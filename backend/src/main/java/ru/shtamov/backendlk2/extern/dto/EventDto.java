package ru.shtamov.backendlk2.extern.dto;

import ru.shtamov.backendlk2.domain.enums.Stage;

import java.time.LocalDate;
import java.util.List;

public record EventDto(
        Long id,
        String name,
        String description,
        Stage stage,
        LocalDate startDate,
        LocalDate endDate,
        List<String> directionsName
) {
}
