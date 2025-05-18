package ru.shtamov.backendlk2.domain;

import jakarta.persistence.*;
import lombok.*;
import ru.shtamov.backendlk2.domain.enums.Stage;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private String stage;

    private LocalDate startDate;

    private LocalDate endDate;

    @OneToMany(mappedBy = "event", fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    private List<Direction> directions;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User organizer;
    
}
