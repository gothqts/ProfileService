package ru.shtamov.backendlk2.extern.dto;

import java.util.List;

public record UserDto(

        Long id,
        String name,
        String surname,
        String university,
        String speciality,
        Integer course,
        String telegram,
        String email,
        String vk,
        String specialization,
        List<String> stack,

        String userRole
) {
}
