package ru.shtamov.backendlk2.domain;

import jakarta.persistence.*;
import lombok.*;
import ru.shtamov.backendlk2.domain.enums.CompetenceStatus;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Specialization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Enumerated(EnumType.STRING)
    private CompetenceStatus status;
}
