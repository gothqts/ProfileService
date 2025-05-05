package ru.shtamov.backendlk2.extern.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ru.shtamov.backendlk2.domain.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {


}
