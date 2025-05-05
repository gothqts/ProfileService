package ru.shtamov.backendlk2.extern.controller;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.shtamov.backendlk2.application.serivce.SpecializationService;
import ru.shtamov.backendlk2.extern.dto.SpecializationDto;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/specializations")
@RestController
public class SpecializationController {
    private final SpecializationService specializationService;

    @GetMapping
    public ResponseEntity<List<SpecializationDto>> getAll(){
        return ResponseEntity.ok()
                .body(specializationService.getAll()
                .stream()
                .map(s -> new SpecializationDto(s.getName())).toList());
    }

    @PostMapping
    public ResponseEntity<SpecializationDto> create(@RequestBody SpecializationDto specializationDto){
        SpecializationDto createdDto =
                new SpecializationDto(
                        specializationService.sendRequestToAdd(specializationDto.name()
                        ).getName());

        return ResponseEntity.ok().body(createdDto);
    }
}
