package ru.shtamov.backendlk2.extern.dto;

public record RequestDto(
        String eventName,
        String projectName,
        String specializationName,
        String status
) {
}
