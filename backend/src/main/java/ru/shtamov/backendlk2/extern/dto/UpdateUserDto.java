package ru.shtamov.backendlk2.extern.dto;

import java.util.List;

public record UpdateUserDto(
        String name,
        String surname,
        String patronymic,
        String university,
        String speciality,
        Integer course,
        String telegram,
        String vk,

        String specialization,
        List<String> stack
) {
}
