package ru.shtamov.backendlk2.extern.dto;

import java.time.LocalDate;

public record ProjectMainDto(
        Long id,
        String topic,
        String eventName,
        String directionName,
        String curatorName,
        LocalDate startTime,
        LocalDate endTime
) {
}
