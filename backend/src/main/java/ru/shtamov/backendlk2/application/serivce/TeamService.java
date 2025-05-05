package ru.shtamov.backendlk2.application.serivce;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.shtamov.backendlk2.domain.Team;
import ru.shtamov.backendlk2.domain.User;
import ru.shtamov.backendlk2.extern.repository.TeamRepository;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class TeamService {

    private final TeamRepository teamRepository;

    public List<Team> getAllMy(User user){
        List<Team>  teams = teamRepository
                .findAll()
                .stream()
                .filter(t -> t.getUsers().stream().map(User::getId)
                        .toList().contains(user.getId())).toList();

        log.info("Найдены все команды пользователя: {}", user.getFirstname());
        return teams;
    }
}
