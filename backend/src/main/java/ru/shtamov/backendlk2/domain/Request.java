package ru.shtamov.backendlk2.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import ru.shtamov.backendlk2.domain.enums.RequestStatus;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long projectId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private RequestStatus requestStatus;
}
