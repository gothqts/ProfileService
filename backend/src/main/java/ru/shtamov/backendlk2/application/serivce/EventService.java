package ru.shtamov.backendlk2.application.serivce;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.shtamov.backendlk2.domain.Event;
import ru.shtamov.backendlk2.extern.repository.EventRepository;

import java.util.List;


@Slf4j
@RequiredArgsConstructor
@Service
public class EventService {

    private final EventRepository eventRepository;

    public List<Event> getAll(){

        List<Event> events = eventRepository.findAll();

        log.info("EventService: Найдены все мероприятия");
        return events;
    }

}
