package com.ai.backend.client.model;

import java.util.List;

import com.ai.backend.client.model.ConversationResponse.Choice.Message;

public record ConversationRequest(
        String model,
        List<Message> messages) {

}
