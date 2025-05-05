package ru.shtamov.backendlk2.extern.converter;

import org.springframework.stereotype.Component;
import ru.shtamov.backendlk2.domain.Direction;
import ru.shtamov.backendlk2.domain.Project;
import ru.shtamov.backendlk2.extern.dto.DirectionDto;

@Component
public class DirectionDtoConverter {

    public DirectionDto toDto(Direction direction){
        return new DirectionDto(
                direction.getId(),
                direction.getName(),
                direction.getEvent().getName(),
                direction.getProjects().stream().map(Project::getName).toList(),
                direction.getProjects().stream().map(p -> p.getTeam().getName()).toList()
        );
    }
}
