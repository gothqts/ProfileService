package ru.shtamov.backendlk2.extern.converter;

import org.springframework.stereotype.Component;
import ru.shtamov.backendlk2.domain.Direction;
import ru.shtamov.backendlk2.domain.Event;
import ru.shtamov.backendlk2.domain.enums.Stage;
import ru.shtamov.backendlk2.extern.dto.EventDto;

@Component
public class EventDtoConverter {

    public EventDto toDto(Event event){
        return new EventDto(
                event.getId(),
                event.getName(),
                event.getDescription(),
                Stage.getStageByName(event.getStage()),
                event.getStartDate(),
                event.getEndDate(),
                event.getDirections().stream().map(Direction::getName).toList()
        );
    }
}
