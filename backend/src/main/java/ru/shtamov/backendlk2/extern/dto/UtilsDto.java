package ru.shtamov.backendlk2.extern.dto;

import lombok.Data;

import java.util.List;

@Data
public class UtilsDto <T1, T2> {
    private List<T1> utils1;
    private List<T2> utils2;

    public UtilsDto(List<T1> utils1, List<T2> utils2) {
        this.utils1 = utils1;
        this.utils2 = utils2;
    }
}
