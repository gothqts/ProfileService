package ru.shtamov.backendlk2.domain.enums;


import lombok.Getter;

@Getter
public enum Stage {
    EDITING("Редактирование"),
    RECRUITMENT("Набор"),
    FORMING_TEAMS("Формирование команд"),
    CONDUCTING("Ведение"),
    COMPLETED("Завершено");

    private final String name;

    Stage(String name) {
        this.name = name;
    }

}
