package ru.shtamov.backendlk2.domain.enums;


import lombok.Getter;

import java.util.Arrays;

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

    public static Stage getStageByName(String name){
        return switch (name) {
            case "Редактирование" -> Stage.EDITING;
            case "Набор" -> Stage.RECRUITMENT;
            case "Формирование команд" -> Stage.FORMING_TEAMS;
            case "Ведение" -> Stage.CONDUCTING;
            case "Завершено" -> Stage.COMPLETED;
            default -> throw new IllegalArgumentException("Нет такого статуса");
        };
    }

}
