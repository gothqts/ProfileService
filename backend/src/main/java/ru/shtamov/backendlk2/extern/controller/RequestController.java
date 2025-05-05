package ru.shtamov.backendlk2.extern.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.shtamov.backendlk2.application.serivce.RequestService;
import ru.shtamov.backendlk2.application.serivce.UserService;
import ru.shtamov.backendlk2.domain.User;
import ru.shtamov.backendlk2.extern.converter.RequestDtoConverter;
import ru.shtamov.backendlk2.extern.dto.RequestDto;

import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/requests")
public class RequestController {
    private final RequestService requestService;
    private final RequestDtoConverter requestDtoConverter;
    private final UserService userService;

    @GetMapping
    public ResponseEntity<List<RequestDto>> getAllMy(){
        User user = userService.getAuthenticatedUser();

        return ResponseEntity.status(HttpStatus.OK)
                .body(requestService.getAllMy(user).stream().map(requestDtoConverter::toDto).toList());
    }
}
