package ru.shtamov.backendlk2.application.serivce;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.shtamov.backendlk2.config.jwt.JwtTokenManager;
import ru.shtamov.backendlk2.domain.*;
import ru.shtamov.backendlk2.domain.enums.UserRole;
import ru.shtamov.backendlk2.extern.exception.CustomAccessDeniedHandler;
import ru.shtamov.backendlk2.extern.repository.*;

import java.util.List;
import java.util.NoSuchElementException;

@Slf4j
@Service
public class UserService {

    private final UserRepository userRepository;
    private final ProfileRepository profileRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenManager jwtTokenManager;
    private final PasswordEncoder passwordEncoder;

    private final RequestRepository requestRepository;
    private final DirectionRepository directionRepository;
    private final EventRepository eventRepository;

    public UserService(UserRepository userRepository, ProfileRepository profileRepository, @Lazy AuthenticationManager authenticationManager, @Lazy JwtTokenManager jwtTokenManager, @Lazy PasswordEncoder passwordEncoder, RequestRepository requestRepository, DirectionRepository directionRepository, EventRepository eventRepository) {
        this.userRepository = userRepository;
        this.profileRepository = profileRepository;
        this.authenticationManager = authenticationManager;
        this.jwtTokenManager = jwtTokenManager;
        this.passwordEncoder = passwordEncoder;
        this.requestRepository = requestRepository;
        this.directionRepository = directionRepository;
        this.eventRepository = eventRepository;
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
        if(authentication.getAuthorities().stream()
                .anyMatch(auth -> "REMOVED".equals(auth.getAuthority()))){
            throw new NoSuchElementException("Пользователь с такими данными не существует");
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

    public String registerUser(User user){
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

        return jwtTokenManager.generateToken(user.getEmail()
                , List.of(new SimpleGrantedAuthority(user.getRole().name())));
    }

    public String authenticateUser(String email, String password){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        email,
                        password
                )
        );

        if(authentication.getAuthorities().stream()
                .anyMatch(auth -> "REMOVED".equals(auth.getAuthority()))){
            throw new NoSuchElementException("Пользователь с такими данными не существует");
        }

        return jwtTokenManager.generateToken(email, authentication.getAuthorities());
    }

    public void changePassword(String oldPassword, String newPassword){
        User user = getAuthenticatedUser();

        if (!user.getPassword().equals(oldPassword))
            throw new IllegalArgumentException("Текущий пароль введен неправильно");

        if (newPassword == null)
            throw new IllegalArgumentException("Новый пароль не может быть пустым");

        user.setPassword(newPassword);
        userRepository.save(user);

        log.info("Пароль для пользователя {} изменен с {} на {}", user.getEmail(), oldPassword, newPassword);
    }

    public void deleteAccount(){
        User user = getAuthenticatedUser();

        user.setRole(UserRole.REMOVED);
        userRepository.save(user);

        log.info("Пользователь {} Удален", user.getEmail());
    }
}
