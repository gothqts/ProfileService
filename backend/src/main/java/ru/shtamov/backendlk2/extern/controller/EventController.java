package ru.shtamov.backendlk2.extern.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.shtamov.backendlk2.application.serivce.EventService;
import ru.shtamov.backendlk2.extern.converter.EventDtoConverter;
import ru.shtamov.backendlk2.extern.dto.EventDto;

import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/events")
public class EventController {
    private final EventService eventService;
    private final EventDtoConverter eventDtoConverter;

    @GetMapping
    public ResponseEntity<List<EventDto>> getAll(){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(eventService.getAll().stream().map(eventDtoConverter::toDto).toList());
    }
}
