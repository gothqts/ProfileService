package ru.shtamov.backendlk2.extern.dto;

public record ProjectMainDto(
        Long id,
        String topic,
        String eventName,
        String directionName,
        String curatorName
) {
}
