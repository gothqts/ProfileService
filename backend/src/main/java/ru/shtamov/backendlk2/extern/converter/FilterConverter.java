package ru.shtamov.backendlk2.extern.converter;

import org.springframework.stereotype.Component;
import ru.shtamov.backendlk2.domain.Direction;
import ru.shtamov.backendlk2.domain.Event;
import ru.shtamov.backendlk2.extern.dto.FilterDto;

@Component
public class FilterConverter {

    public FilterDto fromEventToFilterdto(Event event){
        return new FilterDto(event.getId(), event.getName());
    }

    public FilterDto fromDirectionToFilterdto(Direction direction){
        return new FilterDto(direction.getId(), direction.getName());
    }
}

