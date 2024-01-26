package com.ai.backend.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ai.backend.security.model.JwtUserDetails;

public interface JwtUserDetailsRepository extends JpaRepository<JwtUserDetails, Long> {

    Optional<JwtUserDetails> findByUsername(String username);

    Boolean existsByUsername(String username);

}
