package ru.shtamov.backendlk2.extern.controller;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.shtamov.backendlk2.application.serivce.StackService;
import ru.shtamov.backendlk2.extern.dto.StackDto;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/stacks")
@RestController
public class StackController {

    private final StackService stackService;

    @GetMapping
    public ResponseEntity<List<StackDto>> getAll(){
        return ResponseEntity.ok()
                .body(stackService.getAll()
                        .stream()
                        .map(s -> new StackDto(s.getName())).toList());
    }

    @PostMapping
    public ResponseEntity<StackDto> create(@RequestBody StackDto stackDto){
        StackDto createdDto =
                new StackDto(
                        stackService.sendRequestToAdd(stackDto.name()
                        ).getName());

        return ResponseEntity.ok().body(createdDto);
    }
}
