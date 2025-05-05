package ru.shtamov.backendlk2.domain.enums;

import lombok.Getter;

@Getter
public enum RequestStatus {
    IN_PROGRESS("В процессе"),
    CLOSED("Закрыто");

    private final String name;

    RequestStatus(String name) {
        this.name = name;
    }

}
