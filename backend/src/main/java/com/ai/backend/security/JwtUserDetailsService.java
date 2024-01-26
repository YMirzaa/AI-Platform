package com.ai.backend.security;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ai.backend.security.model.Authority;
import com.ai.backend.security.model.JwtUserDetails;
import com.ai.backend.security.repository.JwtUserDetailsRepository;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class JwtUserDetailsService implements UserDetailsService {

    private final JwtUserDetailsRepository jwtUserDetailsRepository;

    @PostConstruct
    public void init() {
        JwtUserDetails user1 = JwtUserDetails.builder()
                .username("user")
                .password("$2a$12$0T9u8FCIVKGdzOBjlupCW.0.vwsRP7CUBaLPcz9ygGZWWtYmL3ob2")
                .authorities(
                        Set.of(Authority.builder().authority("ROLE_ADMIN").build()))
                .build();

        jwtUserDetailsRepository.save(user1);
    }

    @Override
    public JwtUserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

        // Get user details
        JwtUserDetails user = jwtUserDetailsRepository.findByUsername(userName)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return user;
    }
}
