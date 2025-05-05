package ru.shtamov.backendlk2.extern.dto;

import java.util.List;

public record DirectionDto(
        Long id,
        String name,
        String eventName,
        List<String> projectsName,
        List<String> teamsName
) {
}
