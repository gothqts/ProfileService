package ru.shtamov.backendlk2.extern.dto;


public record ProjectLkDto(
        Long id,
        String eventName,
        String directionName,
        String topic,
        String teamName
) {
}
