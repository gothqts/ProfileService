package ru.shtamov.backendlk2.extern.converter;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ru.shtamov.backendlk2.domain.Project;
import ru.shtamov.backendlk2.domain.Request;
import ru.shtamov.backendlk2.extern.dto.RequestDto;
import ru.shtamov.backendlk2.extern.repository.ProjectRepository;

@RequiredArgsConstructor
@Component
public class RequestDtoConverter {

    private final ProjectRepository projectRepository;

    public RequestDto toDto(Request request){
        Project project = projectRepository.findById(request.getProjectId())
                .orElseThrow(() -> new IllegalArgumentException("Нет проекта с id" + request.getProjectId()));
        return new RequestDto(
                project.getDirection().getEvent().getName(),
                project.getName(),
                project.getTopic(),
                request.getRequestStatus().getName()

        );
    }
}
