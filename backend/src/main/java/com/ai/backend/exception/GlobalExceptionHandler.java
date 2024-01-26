package com.ai.backend.exception;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.ai.backend.common.MessageResponse;
import com.ai.backend.common.MessageType;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // @ExceptionHandler(RuntimeException.class)
    // public ResponseEntity<MessageResponse> handleException(RuntimeException
    // exception) {
    // return new ResponseEntity<MessageResponse>(
    // new MessageResponse(exception.getMessage(), MessageType.ERROR),
    // HttpStatus.INTERNAL_SERVER_ERROR);
    // }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public List<String> handleValidationException(MethodArgumentNotValidException exception) {
        return exception.getFieldErrors().stream().map(fieldError -> fieldError.getDefaultMessage())
                .collect(Collectors.toList());
    }

}
