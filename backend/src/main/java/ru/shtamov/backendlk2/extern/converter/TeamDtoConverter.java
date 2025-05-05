package ru.shtamov.backendlk2.extern.converter;

import org.springframework.stereotype.Component;
import ru.shtamov.backendlk2.domain.Team;
import ru.shtamov.backendlk2.extern.dto.TeamDto;

@Component
public class TeamDtoConverter {

    public TeamDto toDto(Team team){
        return new TeamDto(
             team.getId(),
             team.getName(),
             team.getProject().getName(),
             team.getUsers().stream().map(u -> u.getFirstname() + " " + u.getLastname()).toList()
        );
    }
}
