package ru.shtamov.backendlk2.extern.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.shtamov.backendlk2.application.serivce.MeetingService;
import ru.shtamov.backendlk2.application.serivce.UserService;
import ru.shtamov.backendlk2.domain.User;
import ru.shtamov.backendlk2.extern.converter.MeetingDtoConverter;
import ru.shtamov.backendlk2.extern.dto.MeetingDto;

import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/meetings")
public class MeetingController {
    private final MeetingService meetingService;
    private final UserService userService;
    private final MeetingDtoConverter meetingDtoConverter;

    @GetMapping
    public ResponseEntity<List<MeetingDto>> getAllMy(){
        User user = userService.getAuthenticatedUser();
        return ResponseEntity.status(HttpStatus.OK)
                .body(meetingService.getAllMy(user).stream().map(meetingDtoConverter::toDto).toList());
    }
}
