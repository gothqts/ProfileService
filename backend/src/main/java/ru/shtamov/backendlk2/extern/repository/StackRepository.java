package ru.shtamov.backendlk2.extern.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.shtamov.backendlk2.domain.Stack;

import java.util.List;

@Repository
public interface StackRepository extends JpaRepository<Stack, Long> {

    List<Stack> findAllByNameIn(List<String> names);
}
