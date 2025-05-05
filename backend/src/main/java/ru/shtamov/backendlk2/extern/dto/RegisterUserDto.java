package ru.shtamov.backendlk2.extern.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record RegisterUserDto(
        @NotBlank
        String firstName,
        @NotBlank
        String lastName,
        @NotBlank
        String phone,
        @Email
        String email,
        @NotBlank
        String password,
        @NotBlank
        String repeatPassword
) {
}
