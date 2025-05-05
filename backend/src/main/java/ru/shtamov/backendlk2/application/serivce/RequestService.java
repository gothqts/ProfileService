package ru.shtamov.backendlk2.application.serivce;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.shtamov.backendlk2.domain.Request;
import ru.shtamov.backendlk2.domain.User;
import ru.shtamov.backendlk2.extern.repository.RequestRepository;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class RequestService {
    private final RequestRepository requestRepository;

    public List<Request> getAllMy(User user) {

        List<Request> requests = requestRepository
                .findAll()
                .stream()
                .filter(r -> r.getUser().getId().equals(user.getId()))
                .toList();

        log.info("Получен список всех запросов пользователя: {}", user.getLastname());
        return requests;
    }
}
