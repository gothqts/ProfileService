package ru.shtamov.backendlk2.domain;

import jakarta.persistence.*;
import lombok.*;
import ru.shtamov.backendlk2.domain.enums.UserRole;

import java.util.List;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "user_table")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String email;

    private String password;


    private String firstname;

    private String lastname;

    @OneToOne(fetch = FetchType.EAGER)
    private Profile profile;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    @OneToMany(mappedBy = "user")
    private List<Request> requests;

    @OneToMany(mappedBy = "leader", fetch = FetchType.EAGER)
    private List<Direction> directions;

    @OneToMany(mappedBy = "organizer", fetch = FetchType.EAGER)
    private List<Event> events;

    @ManyToMany(mappedBy = "users", fetch = FetchType.EAGER)
    private List<Team> teams;
}
