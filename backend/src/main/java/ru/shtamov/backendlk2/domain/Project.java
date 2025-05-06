package ru.shtamov.backendlk2.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import ru.shtamov.backendlk2.domain.enums.Stage;

import java.util.List;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private String topic;

    private String stage;

    @OneToOne(mappedBy = "project", fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    private Team team;

    @OneToMany(mappedBy = "project", fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    private List<Meeting> meetings;

    @ManyToOne
    @JoinColumn(name = "direction_id")
    private Direction direction;

    @ManyToOne
    @JoinColumn(name = "curator_id")
    private User curator;


}
