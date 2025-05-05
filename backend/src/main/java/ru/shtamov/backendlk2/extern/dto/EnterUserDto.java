package ru.shtamov.backendlk2.extern.dto;

import jakarta.validation.constraints.NotBlank;

public record EnterUserDto(
        @NotBlank
        String email,
        @NotBlank
        String password
) {
}
