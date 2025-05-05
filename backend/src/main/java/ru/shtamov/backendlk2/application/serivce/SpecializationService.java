package ru.shtamov.backendlk2.application.serivce;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.shtamov.backendlk2.domain.Specialization;
import ru.shtamov.backendlk2.domain.enums.CompetenceStatus;
import ru.shtamov.backendlk2.extern.repository.SpecializationRepository;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class SpecializationService {
    private final SpecializationRepository specializationRepository;

    public List<Specialization> getAll(){
        List<Specialization> specializations = specializationRepository.findAll()
                .stream()
                .filter(s -> s.getStatus().equals(CompetenceStatus.CONFIRMED)).toList();
        log.info("Получены все специализации");
        return specializations;
    }

    public Specialization sendRequestToAdd(String name){
        Specialization specialization = new Specialization();

        specialization.setName(name);
        specialization.setStatus(CompetenceStatus.UNDER_CONSIDERATION);
        specializationRepository.save(specialization);

        log.info("Отправлен запрос на добавление специализации {}", specialization.getName());

        return specialization;
    }
}
