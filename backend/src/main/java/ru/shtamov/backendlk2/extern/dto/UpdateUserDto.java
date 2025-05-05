package ru.shtamov.backendlk2.extern.dto;

import java.util.List;

public record UpdateUserDto(
        String lastName,
        String firstName,
        String surname,
        String university,
        String speciality,
        Integer course,
        String telegram,
        String vk,

        String specializationName,
        List<String> stackNames
) {
}
