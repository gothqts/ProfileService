package ru.shtamov.backendlk2.application.runners;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ru.shtamov.backendlk2.domain.Profile;
import ru.shtamov.backendlk2.domain.User;
import ru.shtamov.backendlk2.domain.enums.UserRole;
import ru.shtamov.backendlk2.extern.repository.ProfileRepository;
import ru.shtamov.backendlk2.extern.repository.UserRepository;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Component
public class UserRunner {

    private final UserRepository userRepository;
    private final ProfileRepository profileRepository;
    private final PasswordEncoder passwordEncoder;


    @Transactional
    @EventListener(ApplicationReadyEvent.class)
    public void run(){
        log.info("UserRunners начал свою работу");

        if (userRepository.count() == 0){
            List<User> users = List.of(
                    // 8 лидеров (LEADER)
                    createUserWithProfile("leader1@university.ru", "LeaderPass123!", "Иван", "Петров", "Сергеевич", 3, "МГУ", "Прикладная информатика", "@ivan_petrov", "vk.com/ivan_petrov", UserRole.LEADER),
                    createUserWithProfile("leader2@university.ru", "LeaderPass123!", "Анна", "Смирнова", "Игоревна", 4, "СПбГУ", "Программная инженерия", "@anna_smirnova", "vk.com/anna_smirnova", UserRole.LEADER),
                    createUserWithProfile("leader3@university.ru", "LeaderPass123!", "Дмитрий", "Кузнецов", "Алексеевич", 2, "НГУ", "Компьютерные науки", "@dmitry_kuznetsov", "vk.com/dmitry_kuz", UserRole.LEADER),
                    createUserWithProfile("leader4@university.ru", "LeaderPass123!", "Екатерина", "Волкова", "Дмитриевна", 3, "УрФУ", "Информационные системы", "@ekaterina_volkova", "vk.com/katya_volkova", UserRole.LEADER),
                    createUserWithProfile("leader5@university.ru", "LeaderPass123!", "Артем", "Соколов", "Андреевич", 4, "КФУ", "Искусственный интеллект", "@artem_sokolov", "vk.com/artem_sokolov", UserRole.LEADER),
                    createUserWithProfile("leader6@university.ru", "LeaderPass123!", "Ольга", "Попова", "Викторовна", 2, "МФТИ", "Анализ данных", "@olga_popova", "vk.com/olga_popova", UserRole.LEADER),
                    createUserWithProfile("leader7@university.ru", "LeaderPass123!", "Михаил", "Васильев", "Олегович", 3, "ВШЭ", "Кибербезопасность", "@mikhail_vasiliev", "vk.com/misha_vasiliev", UserRole.LEADER),
                    createUserWithProfile("leader8@university.ru", "LeaderPass123!", "Алина", "Новикова", "Артемовна", 4, "ИТМО", "Веб-разработка", "@alina_novikova", "vk.com/alina_novikova", UserRole.LEADER),

                    // 4 куратора (CURATOR)
                    createUserWithProfile("curator1@university.ru", "CuratorPass123!", "Сергей", "Иванов", "Петрович", null, "МГУ", null, "@sergey_ivanov", "vk.com/sergey_ivanov", UserRole.CURATOR),
                    createUserWithProfile("curator2@university.ru", "CuratorPass123!", "Мария", "Федорова", "Александровна", null, "СПбГУ", null, "@maria_fedorova", "vk.com/maria_fedorova", UserRole.CURATOR),
                    createUserWithProfile("curator3@university.ru", "CuratorPass123!", "Александр", "Морозов", "Дмитриевич", null, "НГУ", null, "@alex_morozov", "vk.com/alex_morozov", UserRole.CURATOR),
                    createUserWithProfile("curator4@university.ru", "CuratorPass123!", "Наталья", "Захарова", "Сергеевна", null, "УрФУ", null, "@natalia_zakharova", "vk.com/natalia_z", UserRole.CURATOR),

                    // 8 студентов (STUDENT)
                    createUserWithProfile("student1@university.ru", "StudentPass123!", "Алексей", "Штамов", "Александрович", 3, "УрФУ", "ИВТ", "@shtamov_leshka", "vk.com/id134123432", UserRole.STUDENT),
                    createUserWithProfile("student2@university.ru", "StudentPass123!", "Дарья", "Ковалева", "Андреевна", 2, "МГУ", "Прикладная математика", "@darya_kovaleva", "vk.com/darya_kovaleva", UserRole.STUDENT),
                    createUserWithProfile("student3@university.ru", "StudentPass123!", "Павел", "Григорьев", "Иванович", 1, "СПбГУ", "Программная инженерия", "@pavel_grigoriev", "vk.com/pavel_grig", UserRole.STUDENT),
                    createUserWithProfile("student4@university.ru", "StudentPass123!", "Елена", "Семенова", "Владимировна", 4, "НГУ", "Компьютерные науки", "@elena_semenova", "vk.com/elena_sem", UserRole.STUDENT),
                    createUserWithProfile("student5@university.ru", "StudentPass123!", "Игорь", "Медведев", "Сергеевич", 3, "КФУ", "Искусственный интеллект", "@igor_medvedev", "vk.com/igor_med", UserRole.STUDENT),
                    createUserWithProfile("student6@university.ru", "StudentPass123!", "Виктория", "Павлова", "Олеговна", 2, "МФТИ", "Анализ данных", "@vika_pavlova", "vk.com/vika_pavlova", UserRole.STUDENT),
                    createUserWithProfile("student7@university.ru", "StudentPass123!", "Кирилл", "Белов", "Анатольевич", 1, "ВШЭ", "Кибербезопасность", "@kirill_belov", "vk.com/kirill_belov", UserRole.STUDENT),
                    createUserWithProfile("student8@university.ru", "StudentPass123!", "Ангелина", "Тихонова", "Дмитриевна", 4, "ИТМО", "Веб-разработка", "@angelina_tikhonova", "vk.com/angelina_t", UserRole.STUDENT)
            );
            users.forEach(user -> {
                Profile profile = user.getProfile();
                profile = profileRepository.save(profile);
                user.setProfile(profile);
                userRepository.save(user);
            });
        }
    }

    private User createUserWithProfile(
            String email,
            String password,
            String firstName,
            String lastName,
            String middleName,
            Integer course,
            String university,
            String speciality,
            String telegram,
            String vk,
            UserRole role
    ) {
        User user = new User(
                null,
                null,
                email,
                passwordEncoder.encode(password),
                firstName,
                lastName,
                null,
                role,
                null,
                null,
                null
        );

        Profile profile = new Profile(
                null,
                telegram,
                email,
                lastName,
                firstName,
                middleName,
                course,
                university,
                speciality,
                vk,
                null,
                null
        );

        user.setProfile(profile);
        return user;
    }
}