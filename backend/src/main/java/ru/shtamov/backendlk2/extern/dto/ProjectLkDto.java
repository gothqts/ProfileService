package ru.shtamov.backendlk2.extern.dto;


import java.time.LocalDate;

public record ProjectLkDto(
        Long id,
        String eventName,
        String directionName,
        String topic,
        String teamName,
        LocalDate startTime,
        LocalDate endTime
) {
}
