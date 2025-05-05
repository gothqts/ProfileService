package ru.shtamov.backendlk2.application.runners;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ru.shtamov.backendlk2.domain.Direction;
import ru.shtamov.backendlk2.domain.Event;
import ru.shtamov.backendlk2.domain.enums.Stage;
import ru.shtamov.backendlk2.extern.repository.DirectionRepository;
import ru.shtamov.backendlk2.extern.repository.EventRepository;

import java.time.LocalDate;
import java.util.ArrayList;


@Slf4j
@RequiredArgsConstructor
@Component
public class EventDirectionRunner {

    private final EventRepository eventRepository;
    private final DirectionRepository directionRepository;

    @Transactional
    @EventListener(ApplicationReadyEvent.class)
    public void run(){
        log.info("EventRepository начал свою работу");

        if (eventRepository.count() == 0){
            Event event1 = new Event(null, "Весна 2025", "Мероприятие в рамкам ПП", Stage.RECRUITMENT, LocalDate.of(2024, 3, 1), LocalDate.of(2024, 6, 1), new ArrayList<>());
            Direction direction1Event1 = new Direction(null, "Веб сервис", "Создание комплексной системы для студнета", null, null, null);
            Direction direction2Event1 = new Direction(null, "Мобильное приложение", "Создание мобильной системы для проектирования", null, null, null);
            direction1Event1.setEvent(event1);
            direction2Event1.setEvent(event1);
            directionRepository.save(direction1Event1);
            directionRepository.save(direction2Event1);
            event1.getDirections().add(direction1Event1);
            event1.getDirections().add(direction2Event1);
            eventRepository.save(event1);

            Event event2 = new Event(
                    null,
                    "Осенний Хакатон 2025",
                    "Годовой конкурс IT-проектов среди университетов",
                    Stage.RECRUITMENT,
                    LocalDate.of(2025, 9, 15),
                    LocalDate.of(2025, 12, 20),
                    new ArrayList<>()
            );

            Direction direction1Event2 = new Direction(
                    null,
                    "Искусственный интеллект",
                    "Разработка решений на основе машинного обучения",
                    null,
                    null,
                    null
            );

            Direction direction2Event2 = new Direction(
                    null,
                    "Кибербезопасность",
                    "Создание инструментов анализа уязвимостей",
                    null,
                    null,
                    null
            );

            direction1Event2.setEvent(event2);
            direction2Event2.setEvent(event2);

            directionRepository.save(direction1Event2);
            directionRepository.save(direction2Event2);

            event2.getDirections().add(direction1Event2);
            event2.getDirections().add(direction2Event2);

            eventRepository.save(event2);

        }
    }
}
