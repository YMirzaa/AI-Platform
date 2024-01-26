package com.ai.backend.dto;

public record ClientImageRequest(String prompt,
        Integer n,
        String size) {

}
