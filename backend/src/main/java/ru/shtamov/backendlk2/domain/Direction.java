package ru.shtamov.backendlk2.domain;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Direction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "event_id")
    private Event event;

    @OneToMany(mappedBy = "direction", cascade = CascadeType.PERSIST)
    private List<Project> projects;

    @ManyToOne
    @JoinColumn(name = "leader_id")
    private User leader;
}
