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
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String telegram;
    private String email;
    private String surname;
    private String name;
    private String patronymic;
    private Integer course;
    private String university;
    private String speciality;
    private String vk;

    @ManyToOne(fetch = FetchType.EAGER)
    private Specialization specialization;

    @ManyToMany(fetch = FetchType.EAGER)
    private List<Stack> stackList;

}
