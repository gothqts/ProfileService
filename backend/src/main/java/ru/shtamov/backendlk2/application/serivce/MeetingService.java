package ru.shtamov.backendlk2.application.serivce;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.shtamov.backendlk2.domain.Meeting;
import ru.shtamov.backendlk2.domain.User;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class MeetingService {

    public List<Meeting> getAllMy(User user) {
        List<Meeting> meetings = user.getTeams()
                .stream()
                .flatMap(t -> t.getProject().getMeetings().stream())
                .toList();

        log.info("Получен список всех встреч пользателя: {}", user.getLastname());
        return meetings;
    }


}
