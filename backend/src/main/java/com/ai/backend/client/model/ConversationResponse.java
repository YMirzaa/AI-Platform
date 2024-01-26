package com.ai.backend.client.model;
// {

import java.util.List;

public record ConversationResponse(

        List<Choice> choices,
        Long created,
        String id,
        String model,
        String object,
        Usage usage) {

    public record Choice(String finish_reason, Integer index, Message message, String logprobs) {

        public record Message(String content, String role) {
        }
    }

    public record Usage(Integer completion_tokens, Integer prompt_tokens, Integer total_tokens) {
    }

}
