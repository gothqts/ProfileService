package ru.shtamov.backendlk2.extern.converter;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ru.shtamov.backendlk2.domain.Profile;
import ru.shtamov.backendlk2.domain.Stack;
import ru.shtamov.backendlk2.domain.User;
import ru.shtamov.backendlk2.extern.dto.RegisterUserDto;
import ru.shtamov.backendlk2.extern.dto.UpdateUserDto;
import ru.shtamov.backendlk2.extern.dto.UserDto;
import ru.shtamov.backendlk2.extern.repository.SpecializationRepository;
import ru.shtamov.backendlk2.extern.repository.StackRepository;

@RequiredArgsConstructor
@Component
public class UserDtoConverter {

    private final SpecializationRepository specializationRepository;
    private final StackRepository stackRepository;

    public UserDto toUserDto(User user, Profile profile) {
        return new UserDto(
                user.getId(),
                user.getFirstname(),
                user.getLastname(),
                profile.getUniversity(),
                profile.getSpeciality(),
                profile.getCourse(),
                profile.getTelegram(),
                profile.getEmail(),
                profile.getVk(),
                (profile.getSpecialization() != null) ? profile.getSpecialization().getName() : null,
                (profile.getStackList() != null) ? profile.getStackList().stream().map(Stack::getName).toList() : null,
                user.getRole().name()
        );
    }

    public Profile toProfile(UpdateUserDto userDto) {
        Profile profile = new Profile();

        profile.setName(userDto.firstName());
        profile.setSurname(userDto.lastName());
        profile.setPatronymic(userDto.surname());
        profile.setUniversity(userDto.university());
        profile.setSpeciality(userDto.speciality());
        profile.setCourse(userDto.course());
        profile.setSpecialization(specializationRepository.findByName(userDto.specializationName()));
        profile.setStackList(stackRepository.findAllByNameIn(userDto.stackNames()));

        return profile;

    }

    public User toDomain(RegisterUserDto userDto) {
        User user = new User();

        user.setFirstname(userDto.firstName());
        user.setLastname(userDto.lastName());
        user.setEmail(userDto.email());

        if (!userDto.password().equals(userDto.repeatPassword()))
            throw new IllegalArgumentException("Пароли не совпадают");

        user.setPassword(userDto.password());

        return user;
    }
}
