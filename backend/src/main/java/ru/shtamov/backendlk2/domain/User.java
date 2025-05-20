package ru.shtamov.backendlk2.domain;

import jakarta.persistence.*;
import lombok.*;
import ru.shtamov.backendlk2.domain.enums.UserRole;

import java.util.ArrayList;
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

    @OneToOne(fetch = FetchType.EAGER, orphanRemoval = true)
    private Profile profile;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    @OneToMany(mappedBy = "user", orphanRemoval = true)
    private List<Request> requests = new ArrayList<>();

    @OneToMany(mappedBy = "leader", fetch = FetchType.EAGER)
    private List<Direction> directions;

    @OneToMany(mappedBy = "organizer", fetch = FetchType.EAGER)
    private List<Event> events;

    @ManyToMany(mappedBy = "users", fetch = FetchType.EAGER)
    private List<Team> teams;

    public List<Request> getRequests() {
        if (requests == null) this.requests = new ArrayList<>();
        return requests;
    }
}
