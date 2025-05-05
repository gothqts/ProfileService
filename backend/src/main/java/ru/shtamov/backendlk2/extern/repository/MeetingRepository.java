package ru.shtamov.backendlk2.extern.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.shtamov.backendlk2.domain.Meeting;

@Repository
public interface MeetingRepository extends JpaRepository<Meeting, Long> {
}
