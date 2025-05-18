package ru.shtamov.backendlk2.application.serivce;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import ru.shtamov.backendlk2.domain.Direction;
import ru.shtamov.backendlk2.domain.Project;
import ru.shtamov.backendlk2.domain.User;
import ru.shtamov.backendlk2.extern.repository.DirectionRepository;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class DirectionService {

    private final DirectionRepository directionRepository;

    public List<Direction> getAll(){

        List<Direction> events = directionRepository.findAll();

        log.info("EventService: Найдены все направления");
        return events;
    }

    public List<Direction> getAllMy(User user){

        List<Direction> events = directionRepository.findAll().stream().filter(d -> d.getLeader().getId().equals(user.getId())).toList();

        log.info("DirectionService: Найдены все направления для ЛК");
        return events;
    }
}
