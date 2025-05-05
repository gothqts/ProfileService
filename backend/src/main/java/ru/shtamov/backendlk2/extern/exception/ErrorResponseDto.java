package ru.shtamov.backendlk2.extern.exception;

import java.time.LocalDateTime;

public record ErrorResponseDto(
        String message,
        String detailMessage,
        LocalDateTime dateTime
) {
}