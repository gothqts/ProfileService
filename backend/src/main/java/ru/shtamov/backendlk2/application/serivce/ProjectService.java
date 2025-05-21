package ru.shtamov.backendlk2.application.serivce;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.shtamov.backendlk2.domain.*;
import ru.shtamov.backendlk2.domain.enums.UserRole;
import ru.shtamov.backendlk2.extern.repository.ProjectRepository;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class ProjectService {

    private final ProjectRepository projectRepository;


    public List<Project> getAll(String eventName, String directionName){
        List<Project> projects = projectRepository.findAll();

        if (eventName != null)
            projects = projects.stream()
                    .filter(p -> p.getDirection().getEvent().getName().equals(eventName))
                    .toList();

        if (directionName != null)
            projects = projects.stream()
                    .filter(p -> p.getDirection().getName().equals(directionName))
                    .toList();


        log.info("ProjectService: Получил список всех проектов для общей страницы");
        return projects;
    }

    public List<Project> getAllMy(User user){

        List<Project> projects;
        if (user.getRole().equals(UserRole.LEADER)){
            projects = user.getDirections().stream().flatMap(d -> d.getProjects().stream()).toList();
        }
        else {
            projects = user.getTeams().stream().map(Team::getProject).toList();
        }

        log.info("ProjectService: Найдены все проекты для ЛК");
        return projects;
    }

}
