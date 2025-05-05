package ru.shtamov.backendlk2.extern.converter;

import org.springframework.stereotype.Component;
import ru.shtamov.backendlk2.domain.Meeting;
import ru.shtamov.backendlk2.extern.dto.MeetingDto;

@Component
public class MeetingDtoConverter {

    public MeetingDto toDto(Meeting meeting){
        return new MeetingDto(
                meeting.getDate(),
                meeting.getTopic(),
                meeting.getLink(),
                meeting.getProject().getTeam().getName()
        );
    }
}
