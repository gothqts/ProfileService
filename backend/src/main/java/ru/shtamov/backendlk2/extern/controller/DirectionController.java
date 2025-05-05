package ru.shtamov.backendlk2.extern.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.shtamov.backendlk2.application.serivce.DirectionService;
import ru.shtamov.backendlk2.extern.converter.DirectionDtoConverter;
import ru.shtamov.backendlk2.extern.dto.DirectionDto;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/directions")
public class DirectionController {

    private final DirectionService directionService;
    private final DirectionDtoConverter directionDtoConverter;


    @GetMapping
    public ResponseEntity<List<DirectionDto>> getAll(){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(directionService.getAll().stream().map(directionDtoConverter::toDto).toList());
    }
}
