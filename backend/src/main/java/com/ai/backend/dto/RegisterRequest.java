package com.ai.backend.dto;

import java.util.Set;

import com.ai.backend.security.model.Authority;
import com.ai.backend.security.model.JwtUserDetails;

import jakarta.validation.constraints.NotBlank;

public record RegisterRequest(

        @NotBlank(message = "Username cannot be blank") String username,
        @NotBlank(message = "Password cannot be blank") String password,
        String email,
        String firstName,
        String lastName,
        String phoneNumber,
        String address) {

    // Not used at the moment because we will encode the password
    // public JwtUserDetails toEntity(Authority authority) {

    // return JwtUserDetails.builder()
    // .username(username)
    // .password(password)
    // .authorities(
    // Set.of(authority))
    // .build();
    // }

}
