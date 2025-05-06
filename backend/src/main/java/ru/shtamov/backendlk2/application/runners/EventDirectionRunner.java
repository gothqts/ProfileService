package ru.shtamov.backendlk2.application.runners;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ru.shtamov.backendlk2.domain.*;
import ru.shtamov.backendlk2.domain.enums.Stage;
import ru.shtamov.backendlk2.extern.repository.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Slf4j
@RequiredArgsConstructor
@Component
public class EventDirectionRunner {

    private final EventRepository er;
    private final UserRepository ur;
    private final ProjectRepository pr;
    private final DirectionRepository dr;
    private final TeamRepository tr;
    private final MeetingRepository mr;

    @Transactional
    public void run(){
        log.info("EventRepository начал свою работу");

        List<User> users = ur.findAll();

        if (er.count() == 0) {
            // Создаем списки участников
            List<User> curators = List.of(
                    ur.findById(5L).orElseThrow(), // Куратор 1
                    ur.findById(6L).orElseThrow(), // Куратор 2
                    ur.findById(7L).orElseThrow(), // Куратор 3
                    ur.findById(8L).orElseThrow()  // Куратор 4
            );

            List<User> students = List.of(
                    ur.findById(9L).orElseThrow(),  // Студент 1
                    ur.findById(10L).orElseThrow(), // Студент 2
                    ur.findById(11L).orElseThrow(), // Студент 3
                    ur.findById(12L).orElseThrow(), // Студент 4
                    ur.findById(13L).orElseThrow(), // Студент 5
                    ur.findById(14L).orElseThrow(), // Студент 6
                    ur.findById(15L).orElseThrow(), // Студент 7
                    ur.findById(16L).orElseThrow()  // Студент 8
            );

            // Первое мероприятие - Весенний хакатон
            Event springHackathon = new Event(
                    null,
                    "Весенний Хакатон 2025",
                    "Годовой конкурс IT-проектов среди студентов",
                    Stage.CONDUCTING.getName(),
                    LocalDate.of(2025, 3, 15),
                    LocalDate.of(2025, 5, 20),
                    new ArrayList<>()
            );
            springHackathon = er.save(springHackathon);

            // Направления для весеннего хакатона
            Direction webDevelopment = new Direction(
                    null,
                    "Веб-разработка",
                    "Создание современных веб-приложений",
                    springHackathon,
                    null,
                    ur.findById(1L).orElseThrow()
            );
            webDevelopment = dr.save(webDevelopment);

            Direction mobileDevelopment = new Direction(
                    null,
                    "Мобильная разработка",
                    "Разработка приложений для iOS и Android",
                    springHackathon,
                    null,
                    ur.findById(2L).orElseThrow()
            );
            mobileDevelopment = dr.save(mobileDevelopment);

            // Проекты по веб-разработке
            Project mentorPlatform = new Project(
                    null,
                    "MentorMatch",
                    "Платформа для поиска менторов среди старшекурсников",
                    webDevelopment.getName(),
                    Stage.CONDUCTING.getName(),
                    tr.save(new Team(
                            null,
                            "CodeMasters",
                            null,
                            new ArrayList<>(Arrays.asList(curators.get(0), students.get(0), students.get(1), students.get(2)))
                    )),
                    new ArrayList<>(Arrays.asList(
                            mr.save(new Meeting(null, LocalDate.of(2025, 4, 10), "Презентация MVP", "zoom/mentormatch", null)),
                            mr.save(new Meeting(null, LocalDate.of(2025, 5, 15), "Финальная защита", "zoom/mentormatch-final", null))
                    )),
                    webDevelopment,
                    curators.get(0) // Тимлид
            );
            mentorPlatform = pr.save(mentorPlatform);
            for (Meeting meeting : mentorPlatform.getMeetings()){
                meeting.setProject(mentorPlatform);
                mr.save(meeting);
            }
            Team team1 = mentorPlatform.getTeam();
            team1.setProject(mentorPlatform);
            tr.save(team1);

            Project lmsSystem = new Project(
                    null,
                    "Умный LMS",
                    "Система управления обучением с AI-ассистентом",
                    webDevelopment.getName(),
                    Stage.CONDUCTING.getName(),
                    tr.save(new Team(
                            null,
                            "WebWizards",
                            null,
                            new ArrayList<>(Arrays.asList(curators.get(1), students.get(3), students.get(4)))
                    )),
                    new ArrayList<>(Arrays.asList(
                            mr.save(new Meeting(null, LocalDate.of(2025, 4, 5), "Демо API", "meet/lms-api", null)
                    ))),
                    webDevelopment,
                    curators.get(1)
            );
            lmsSystem = pr.save(lmsSystem);
            for (Meeting meeting : lmsSystem.getMeetings()){
                meeting.setProject(lmsSystem);
                mr.save(meeting);
            }
            Team team2 = lmsSystem.getTeam();
            team2.setProject(lmsSystem);
            tr.save(team2);

            // Проекты по мобильной разработке
            Project campusNav = new Project(
                    null,
                    "Campus Navigator",
                    "Навигатор по университетскому кампусу с AR",
                    mobileDevelopment.getName(),
                    Stage.CONDUCTING.getName(),
                    tr.save(new Team(
                            null,
                            "MobileX",
                            null,
                            new ArrayList<>(Arrays.asList(curators.get(2), students.get(5), students.get(6)))
                    )),
                    new ArrayList<>(Arrays.asList(
                            mr.save(new Meeting(null, LocalDate.of(2025, 4, 12), "Демо AR-функций", "meet/campus-ar", null)
                    ))),
                    mobileDevelopment,
                    curators.get(2)
            );
            campusNav = pr.save(campusNav);
            for (Meeting meeting : campusNav.getMeetings()){
                meeting.setProject(campusNav);
                mr.save(meeting);
            }
            Team team3 = campusNav.getTeam();
            team3.setProject(campusNav);
            tr.save(team3);

            Project foodTracker = new Project(
                    null,
                    "FoodTracker",
                    "Приложение для учета питания студентов",
                    mobileDevelopment.getName(),
                    Stage.COMPLETED.getName(),
                    tr.save(new Team(
                            null,
                            "HealthTech",
                            null,
                            new ArrayList<>(Arrays.asList(curators.get(3), students.get(7))))),
                    new ArrayList<>(Arrays.asList(
                            mr.save(new Meeting(null, LocalDate.of(2025, 3, 20), "Финал спринта", "meet/foodtracker", null)),
                            mr.save(new Meeting(null, LocalDate.of(2025, 5, 10), "Защита проекта", "meet/foodtracker-final", null))
                    )),
                    mobileDevelopment,
                    curators.get(3)
            );
            foodTracker = pr.save(foodTracker);
            for (Meeting meeting : foodTracker.getMeetings()){
                meeting.setProject(foodTracker);
                mr.save(meeting);
            }
            Team team4 = foodTracker.getTeam();
            team4.setProject(foodTracker);
            tr.save(team4);

            Event autumnMarathon = new Event(
                    null,
                    "Осенний проектный марафон 2025",
                    "Долгосрочная разработка проектов в командах",
                    Stage.RECRUITMENT.getName(),
                    LocalDate.of(2025, 9, 1),
                    LocalDate.of(2025, 12, 15),
                    new ArrayList<>()
            );
            autumnMarathon = er.save(autumnMarathon);

            // Направления для осеннего марафона
            Direction aiDirection = new Direction(
                    null,
                    "Искусственный интеллект",
                    "Проекты с использованием ML и AI",
                    autumnMarathon,
                    null,
                    ur.findById(3L).orElseThrow()
            );
            aiDirection = dr.save(aiDirection);

            Direction cybersecurity = new Direction(
                    null,
                    "Кибербезопасность",
                    "Разработка инструментов защиты данных",
                    autumnMarathon,
                    null,
                    ur.findById(4L).orElseThrow()
            );
            cybersecurity = dr.save(cybersecurity);

            // Проекты по AI
            Project teamBuilder = new Project(
                    null,
                    "TeamBuilder AI",
                    "Система автоматического формирования команд",
                    aiDirection.getName(),
                    Stage.FORMING_TEAMS.getName(),
                    tr.save(new Team(
                            null,
                            "AI Pioneers",
                            null,
                            new ArrayList<>(Arrays.asList(curators.get(0), students.get(1), students.get(3), students.get(5)))
                    )),
                    new ArrayList<>(Arrays.asList(
                            mr.save(new Meeting(null, LocalDate.of(2025, 8, 25), "Кик-офф", "zoom/teambuilder", null)
                    ))),
                    aiDirection,
                    curators.get(0)
            );
            teamBuilder = pr.save(teamBuilder);
            for (Meeting meeting : teamBuilder.getMeetings()){
                meeting.setProject(teamBuilder);
                mr.save(meeting);
            }
            Team team5 = teamBuilder.getTeam();
            team5.setProject(teamBuilder);
            tr.save(team5);

            // Проекты по кибербезопасности
            Project auditTool = new Project(
                    null,
                    "SecurityAudit",
                    "Инструмент для автоматического аудита безопасности",
                    cybersecurity.getName(),
                    Stage.RECRUITMENT.getName(),
                    tr.save(new Team(
                            null,
                            "CyberGuard",
                            null,
                            new ArrayList<>(Arrays.asList(curators.get(1), students.get(2), students.get(4), students.get(6)))
                    )),
                    new ArrayList<>(Arrays.asList(
                            mr.save(new Meeting(null, LocalDate.of(2025, 9, 5), "Вводное занятие", "meet/security", null)
                    ))),
                    cybersecurity,
                    curators.get(1)
            );
            auditTool = pr.save(auditTool);
            for (Meeting meeting : auditTool.getMeetings()){
                meeting.setProject(auditTool);
                mr.save(meeting);
            }
            Team team6 = auditTool.getTeam();
            team6.setProject(auditTool);
            tr.save(team6);
        }
    }
}
