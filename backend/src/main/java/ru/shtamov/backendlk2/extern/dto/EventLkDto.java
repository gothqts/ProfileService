package ru.shtamov.backendlk2.extern.dto;

import java.time.LocalDate;
import java.util.List;

public record EventLkDto(
        String topic,
        List<String> directionsName,
        LocalDate startDate,
        LocalDate endDate
) {
}
