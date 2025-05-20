package ru.shtamov.backendlk2.extern.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.nio.file.AccessDeniedException;
import java.time.LocalDateTime;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ErrorResponseDto> handleIllegalArgumentException(IllegalArgumentException e){
        return generateResponse(HttpStatus.BAD_REQUEST, "Некорректный запрос", e.getMessage());
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<ErrorResponseDto> handleNoSuchElementException(NoSuchElementException e){
        return generateResponse(HttpStatus.BAD_REQUEST, "Ошибка аутентификации", e.getMessage());
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ErrorResponseDto> handleAccessDeniedException(AccessDeniedException e){
        return generateResponse(HttpStatus.FORBIDDEN, "Недостаточно прав для выполнения операции", e.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponseDto> handleMethodArgumentNotValidException(MethodArgumentNotValidException e){
        String detailMessage = e.getBindingResult()
                .getFieldErrors().stream()
                .map(ex -> ex.getField() + ": " + ex.getDefaultMessage()).collect(Collectors.joining(", "));

        return generateResponse(HttpStatus.BAD_REQUEST, "Некорректный запрос", detailMessage);
    }


    private ResponseEntity<ErrorResponseDto> generateResponse(HttpStatus status, String message, String detailMessage){
        ErrorResponseDto error = new ErrorResponseDto(
                message,
                detailMessage,
                LocalDateTime.now()
        );

        log.error(detailMessage);
        return ResponseEntity.status(status).body(error);
    }
}
