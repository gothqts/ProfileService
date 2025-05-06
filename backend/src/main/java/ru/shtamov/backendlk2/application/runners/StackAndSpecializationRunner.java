package ru.shtamov.backendlk2.application.runners;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ru.shtamov.backendlk2.domain.Specialization;
import ru.shtamov.backendlk2.domain.Stack;
import ru.shtamov.backendlk2.domain.enums.CompetenceStatus;
import ru.shtamov.backendlk2.extern.repository.SpecializationRepository;
import ru.shtamov.backendlk2.extern.repository.StackRepository;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Component
public class StackAndSpecializationRunner {

    private final StackRepository stackRepository;
    private final SpecializationRepository specializationRepository;


    @Transactional
    @EventListener(ApplicationReadyEvent.class)
    public void run(){

        List<Stack> stacks = List.of(
                new Stack(null, "C#", CompetenceStatus.CONFIRMED),
                new Stack(null, "Spring", CompetenceStatus.CONFIRMED),
                new Stack(null, "React", CompetenceStatus.CONFIRMED),
                new Stack(null, "Java", CompetenceStatus.CONFIRMED),
                new Stack(null, "HTML", CompetenceStatus.CONFIRMED),
                new Stack(null, "CSS", CompetenceStatus.CONFIRMED)
        );
        stackRepository.saveAll(stacks);

        List<Specialization> specializations = List.of(
                new Specialization(null, "Java-разработчик", CompetenceStatus.CONFIRMED),
                new Specialization(null, "Frontend разработчик", CompetenceStatus.CONFIRMED),
                new Specialization(null, "UX/UI-дизайнер", CompetenceStatus.CONFIRMED),
                new Specialization(null, "Аналитик UX", CompetenceStatus.CONFIRMED),
                new Specialization(null, "С# разработчик", CompetenceStatus.CONFIRMED),
                new Specialization(null, "Project manager", CompetenceStatus.CONFIRMED)
                );
        specializationRepository.saveAll(specializations);

    }
}
