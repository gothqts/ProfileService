package ru.shtamov.backendlk2.extern.converter;

import org.springframework.stereotype.Component;
import ru.shtamov.backendlk2.domain.Project;
import ru.shtamov.backendlk2.domain.Team;
import ru.shtamov.backendlk2.extern.dto.ProjectLkDto;
import ru.shtamov.backendlk2.extern.dto.ProjectMainDto;

@Component
public class ProjectDtoConverter {

    public ProjectLkDto toLkDto(Project project){
        return new ProjectLkDto(
                project.getId(),
                project.getDirection().getEvent().getName(),
                project.getDirection().getName(),
                project.getTopic(),
                project.getTeam().getName(),
                project.getStartDate(),
                project.getEndDate()
        );
    }

    public ProjectMainDto toMainDto(Project project){
        return new ProjectMainDto(
                project.getId(),
                project.getTopic(),
                project.getDirection().getEvent().getName(),
                project.getDirection().getName(),
                project.getCurator().getLastname(),
                project.getStartDate(),
                project.getEndDate()
        );
    }
}
