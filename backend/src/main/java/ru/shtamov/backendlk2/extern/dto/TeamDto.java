package ru.shtamov.backendlk2.extern.dto;

import java.util.List;

public record TeamDto(
        Long id,
        String name,
        String projectName,
        List<String> usersName
) {
}
