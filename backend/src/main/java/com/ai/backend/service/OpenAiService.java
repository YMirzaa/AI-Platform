package com.ai.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.ai.backend.client.OpenAiClient;
import com.ai.backend.client.model.ConversationRequest;
import com.ai.backend.client.model.ConversationResponse;
import com.ai.backend.client.model.ImageRequest;
import com.ai.backend.client.model.ConversationResponse.Choice.Message;
import com.ai.backend.client.model.ImageResponse.ImageUrl;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OpenAiService {

    private final OpenAiClient openAiClient;

    @Value("${openai.secretKey}")
    private String secretKey;

    @Value("${openai.conversation.model}")
    private String conversationModel;

    @Value("${openai.image.model}")
    private String imageModel;

    public Message getConversation(List<Message> messages) {

        ConversationRequest conversationRequest = new ConversationRequest(conversationModel, messages);
        ConversationResponse response = openAiClient.getConversation(conversationRequest, secretKey);
        return response.choices().get(0).message();
    }

    public List<ImageUrl> getImage(Integer n, String prompt, String size) {
        ImageRequest imageRequest = new ImageRequest(imageModel, prompt, n, size);

        return openAiClient.getImage(imageRequest, secretKey).data();
    }
}
