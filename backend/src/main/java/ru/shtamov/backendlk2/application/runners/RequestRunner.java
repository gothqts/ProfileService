package ru.shtamov.backendlk2.application.runners;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ru.shtamov.backendlk2.domain.Request;
import ru.shtamov.backendlk2.domain.User;
import ru.shtamov.backendlk2.domain.enums.RequestStatus;
import ru.shtamov.backendlk2.extern.repository.RequestRepository;
import ru.shtamov.backendlk2.extern.repository.UserRepository;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Component
public class RequestRunner {

    private final UserRepository ur;
    private final RequestRepository rr;

    @Transactional
    public void run(){
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

        List<User> curators = List.of(
                ur.findById(5L).orElseThrow(), // Куратор 1
                ur.findById(6L).orElseThrow(), // Куратор 2
                ur.findById(7L).orElseThrow(), // Куратор 3
                ur.findById(8L).orElseThrow()  // Куратор 4
        );

        Request request1 = new Request(null, 1L, students.get(0), RequestStatus.CLOSED);
        Request request2 = new Request(null, 2L, students.get(0), RequestStatus.IN_PROGRESS);

        Request request3 = new Request(null, 1L, students.get(1), RequestStatus.CLOSED);
        Request request4 = new Request(null, 2L, students.get(1), RequestStatus.IN_PROGRESS);
        request3 = rr.save(request3);
        request4 = rr.save(request4);

        Request request5 = new Request(null, 6L, students.get(2), RequestStatus.CLOSED);
        Request request6 = new Request(null, 4L, students.get(2), RequestStatus.IN_PROGRESS);
        request5 = rr.save(request5);
        request6 = rr.save(request6);

        Request request7 = new Request(null, 5L, students.get(3), RequestStatus.CLOSED);
        Request request8 = new Request(null, 1L, students.get(3), RequestStatus.IN_PROGRESS);
        Request request9 = new Request(null, 2L, students.get(3), RequestStatus.CLOSED);
        request7 = rr.save(request7);
        request8 = rr.save(request8);
        request9 = rr.save(request9);

        Request request10 = new Request(null, 1L, students.get(4), RequestStatus.IN_PROGRESS);
        request10 = rr.save(request10);
        students.get(4).getRequests().add(request10);

        Request request11 = new Request(null, 5L, students.get(5), RequestStatus.CLOSED);
        request11 = rr.save(request11);
        students.get(5).getRequests().add(request11);

        Request request12 = new Request(null, 6L, students.get(6), RequestStatus.CLOSED);
        request12 = rr.save(request12);
        students.get(6).getRequests().add(request12);

        Request request13 = new Request(null, 4L, students.get(7), RequestStatus.CLOSED);
        request13 = rr.save(request13);
        students.get(7).getRequests().add(request13);

        Request request14 = new Request(null, 1L, curators.get(0), RequestStatus.CLOSED);
        Request request15 = new Request(null, 2L, curators.get(0), RequestStatus.IN_PROGRESS);
        request14 = rr.save(request14);
        request15 = rr.save(request15);
        curators.get(0).getRequests().add(request14);
        curators.get(0).getRequests().add(request15);

        Request request16 = new Request(null, 2L, curators.get(1), RequestStatus.CLOSED);
        Request request17 = new Request(null, 3L, curators.get(1), RequestStatus.IN_PROGRESS);
        request16 = rr.save(request16);
        request17 = rr.save(request17);
        curators.get(1).getRequests().add(request16);
        curators.get(1).getRequests().add(request17);

        Request request18 = new Request(null, 3L, curators.get(2), RequestStatus.CLOSED);
        request18 = rr.save(request18);
        curators.get(2).getRequests().add(request18);

        Request request19 = new Request(null, 4L, curators.get(3), RequestStatus.CLOSED);
        request19 = rr.save(request19);
        curators.get(3).getRequests().add(request19);
    }


}
