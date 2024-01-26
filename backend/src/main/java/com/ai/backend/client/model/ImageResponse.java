package com.ai.backend.client.model;

import java.util.List;

public record ImageResponse(
        Long created,
        List<ImageUrl> data) {

    public record ImageUrl(String url) {
    }
}