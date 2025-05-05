package ru.shtamov.backendlk2.application.serivce;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.shtamov.backendlk2.config.jwt.JwtTokenManager;
import ru.shtamov.backendlk2.domain.Profile;
import ru.shtamov.backendlk2.domain.User;
import ru.shtamov.backendlk2.domain.enums.UserRole;
import ru.shtamov.backendlk2.extern.repository.ProfileRepository;
import ru.shtamov.backendlk2.extern.repository.ProjectRepository;
import ru.shtamov.backendlk2.extern.repository.UserRepository;

import java.util.NoSuchElementException;

@Slf4j
@Service
public class UserService {

    private final UserRepository userRepository;
    private final ProfileRepository profileRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenManager jwtTokenManager;
    private final PasswordEncoder passwordEncoder;
    private final ProjectRepository projectRepository;

    public UserService(UserRepository userRepository, ProfileRepository profileRepository, @Lazy AuthenticationManager authenticationManager, @Lazy JwtTokenManager jwtTokenManager, @Lazy PasswordEncoder passwordEncoder, ProjectRepository projectRepository) {
        this.userRepository = userRepository;
        this.profileRepository = profileRepository;
        this.authenticationManager = authenticationManager;
        this.jwtTokenManager = jwtTokenManager;
        this.passwordEncoder = passwordEncoder;
        this.projectRepository = projectRepository;
    }

    public User findByEmail(String email) {
        return userRepository.findUserByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Нет пользователя с email" + email));
    }

    public User getAuthenticatedUser(){
        Authentication authentication = SecurityContextHolder.getContext().
                getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new NoSuchElementException("Ошибка аутентификации");
        }

        User currentUser = (User) authentication.getPrincipal();
        log.info("Получен пользователь {}", currentUser.getFirstname() + " " + currentUser.getLastname());
        return currentUser;
    }


    public Profile updateUser(Profile profile) {
        User user = getAuthenticatedUser();
        Profile currentProfile = user.getProfile();

        currentProfile.setName(profile.getName());
        currentProfile.setSurname(profile.getSurname());
        currentProfile.setPatronymic(profile.getPatronymic());
        currentProfile.setUniversity(profile.getUniversity());
        currentProfile.setSpeciality(profile.getSpeciality());
        currentProfile.setCourse(profile.getCourse());
        currentProfile.setSpecialization(profile.getSpecialization());
        currentProfile.setStackList(profile.getStackList());
        currentProfile.setVk(profile.getVk());
        currentProfile.setTelegram(profile.getTelegram());
        profileRepository.save(currentProfile);

        user.setProfile(currentProfile);
        userRepository.save(user);

        log.info("Пользователь {} {} обновлен", profile.getName(), profile.getSurname());

        return currentProfile;
    }

    public User registerUser(User user){
        if (userRepository.existsByEmail(user.getEmail()))
            throw new IllegalArgumentException("Пользователь с почтой %s уже существует".formatted(user.getEmail()));

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(UserRole.STUDENT);

        Profile profile = new Profile();
        profile.setName(user.getFirstname());
        profile.setSurname(user.getLastname());
        profile.setEmail(user.getEmail());
        profileRepository.save(profile);
        user.setProfile(profile);

        User createdUser = userRepository.save(user);
        log.info("Пользователь с логином {} создан", createdUser.getEmail());

        return  createdUser;
    }

    public String authenticateUser(String email, String password){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        email,
                        password
                )
        );

        return jwtTokenManager.generateToken(email, authentication.getAuthorities());
    }

}
