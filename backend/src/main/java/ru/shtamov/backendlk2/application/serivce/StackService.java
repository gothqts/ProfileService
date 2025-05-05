package ru.shtamov.backendlk2.application.serivce;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.shtamov.backendlk2.domain.Specialization;
import ru.shtamov.backendlk2.domain.Stack;
import ru.shtamov.backendlk2.domain.enums.CompetenceStatus;
import ru.shtamov.backendlk2.extern.repository.StackRepository;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class StackService {
    private final StackRepository stackRepository;

    public List<Stack> getAll(){
        List<Stack> specializations = stackRepository.findAll()
                .stream()
                .filter(s -> s.getStatus().equals(CompetenceStatus.CONFIRMED)).toList();
        log.info("Получены все стеки");
        return specializations;
    }

    public Stack sendRequestToAdd(String name){
        Stack stack = new Stack();

        stack.setName(name);
        stack.setStatus(CompetenceStatus.UNDER_CONSIDERATION);
        stackRepository.save(stack);

        log.info("Отправлен запрос на добавление специализации {}", stack.getName());
        return stack;
    }
}
