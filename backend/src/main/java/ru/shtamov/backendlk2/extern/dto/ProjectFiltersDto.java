package ru.shtamov.backendlk2.extern.dto;

import java.util.List;

public record ProjectFiltersDto(
        List<FilterDto> events,
        List<FilterDto> directions
) {
}
