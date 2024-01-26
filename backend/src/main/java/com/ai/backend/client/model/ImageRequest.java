package com.ai.backend.client.model;

public record ImageRequest(
        String model,
        String prompt,
        Integer n,
        String size) {
}
