package ru.shtamov.backendlk2.extern.dto;

import java.time.LocalDate;

public record MeetingDto(
    LocalDate date,
    String topic,
    String link,
    String teamName
) {
}
