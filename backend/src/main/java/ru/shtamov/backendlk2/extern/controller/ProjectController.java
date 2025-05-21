package ru.shtamov.backendlk2.extern.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.shtamov.backendlk2.application.serivce.ProjectService;
import ru.shtamov.backendlk2.extern.converter.ProjectDtoConverter;
import ru.shtamov.backendlk2.extern.dto.ProjectMainDto;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/projects")
@RestController
public class ProjectController {

    public final ProjectService projectService;
    private final ProjectDtoConverter projectDtoConverter;

    @GetMapping
    public ResponseEntity<List<ProjectMainDto>> getAll(
            @RequestParam(name = "even_filter", required = false) String eventName,
            @RequestParam(name = "direction_filter", required = false) String directionName){
        return ResponseEntity.status(HttpStatus.OK)
                .body(projectService.getAll(eventName, directionName).stream().map(projectDtoConverter::toMainDto).toList());
    }
}
