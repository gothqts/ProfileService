package ru.shtamov.backendlk2.extern.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.shtamov.backendlk2.application.serivce.DirectionService;
import ru.shtamov.backendlk2.application.serivce.EventService;
import ru.shtamov.backendlk2.extern.converter.FilterConverter;
import ru.shtamov.backendlk2.extern.dto.FilterDto;
import ru.shtamov.backendlk2.extern.dto.ProjectFiltersDto;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/filter")
public class FiltersController {

    private final EventService eventService;
    private final DirectionService directionService;
    private final FilterConverter filterConverter;

    @GetMapping
    public ResponseEntity<ProjectFiltersDto> getAllNames(){

        List<FilterDto> events = eventService.getAll()
                .stream()
                .map(filterConverter::fromEventToFilterdto).toList();
        List<FilterDto> directions = directionService.getAll()
                .stream()
                .map(filterConverter::fromDirectionToFilterdto).toList();

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(new ProjectFiltersDto(events, directions));
    }
}
