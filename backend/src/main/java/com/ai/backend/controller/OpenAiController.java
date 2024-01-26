package com.ai.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ai.backend.client.model.ConversationResponse.Choice.Message;
import com.ai.backend.client.model.ImageResponse.ImageUrl;
import com.ai.backend.dto.ClientImageRequest;
import com.ai.backend.service.OpenAiService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/openai")
public class OpenAiController {

    private final OpenAiService openAiService;

    @PostMapping("/conversation")
    public Message getConversation(@RequestBody List<Message> messages) {
        return openAiService.getConversation(messages);
    }

    @PostMapping("/image")
    public List<ImageUrl> getConversation(@RequestBody ClientImageRequest clientImageRequest) {
        return openAiService.getImage(clientImageRequest.n(), clientImageRequest.prompt(), clientImageRequest.size());
    }

}
