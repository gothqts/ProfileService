package ru.shtamov.backendlk2.extern.dto;

public record ChangePasswordDto(
        String oldPassword,
        String newPassword
) {
}
