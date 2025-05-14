package ru.shtamov.backendlk2.extern.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.shtamov.backendlk2.application.serivce.DirectionService;
import ru.shtamov.backendlk2.application.serivce.ProjectService;
import ru.shtamov.backendlk2.application.serivce.TeamService;
import ru.shtamov.backendlk2.application.serivce.UserService;
import ru.shtamov.backendlk2.domain.Profile;
import ru.shtamov.backendlk2.domain.User;
import ru.shtamov.backendlk2.domain.enums.UserRole;
import ru.shtamov.backendlk2.extern.converter.DirectionDtoConverter;
import ru.shtamov.backendlk2.extern.converter.ProjectDtoConverter;
import ru.shtamov.backendlk2.extern.converter.TeamDtoConverter;
import ru.shtamov.backendlk2.extern.converter.UserDtoConverter;
import ru.shtamov.backendlk2.extern.dto.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    private final UserDtoConverter userDtoConverter;
    private final DirectionService directionService;
    private final ProjectService projectService;
    private final TeamService teamService;
    private final ProjectDtoConverter projectDtoConverter;
    private final DirectionDtoConverter directionDtoConverter;
    private final TeamDtoConverter teamDtoConverter;


    @PostMapping
    public ResponseEntity<JwtResponse> createUser(@RequestBody @Valid RegisterUserDto userDto){
        String jwt = userService.registerUser(userDtoConverter.toDomain(userDto));

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(new JwtResponse(jwt));
    }

    @PostMapping("/auth")
    public ResponseEntity<JwtResponse> authenticateUser(@RequestBody @Valid EnterUserDto userDto){
        String jwt = userService.authenticateUser(userDto.email(), userDto.password());

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(new JwtResponse(jwt));
    }

    @GetMapping
    public ResponseEntity<?> getCurrentUser(){
        User user = userService.getAuthenticatedUser();
        Profile profile = user.getProfile();

        return ResponseEntity.ok().body(userDtoConverter.toUserDto(user, profile));
    }

    @GetMapping("/my")
    public ResponseEntity<UtilsDto<?, ?>> getAllMy(){

        User user = userService.getAuthenticatedUser();
        UserRole role = user.getRole();

        List<?> utils1;
        List<?> utils2;
        if (role.equals(UserRole.LEADER)){
            utils1 = directionService.getAllMy(userService.getAuthenticatedUser())
                    .stream().map(directionDtoConverter::toDto).toList();

        }else {
            utils1 = teamService.getAllMy(user)
                    .stream().map(teamDtoConverter::toDto).toList();
        }
        utils2 = projectService.getAllMy(user)
                .stream().map(projectDtoConverter::toLkDto).toList();

        UtilsDto<?, ?> utilsDto = new UtilsDto<>(utils1, utils2);
        return ResponseEntity.status(HttpStatus.OK)
                .body(utilsDto);
    }

    @PutMapping
    public ResponseEntity<?> update(@RequestBody UpdateUserDto userDto){
        Profile updatedProfile = userService.updateUser(userDtoConverter.toProfile(userDto));

        User currentUser = userService.getAuthenticatedUser();

        return ResponseEntity.ok().body(userDtoConverter.toUserDto(currentUser, updatedProfile));
    }


}
