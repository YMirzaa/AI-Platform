package com.ai.backend.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ai.backend.client.model.ConversationRequest;
import com.ai.backend.client.model.ConversationResponse;
import com.ai.backend.client.model.ImageRequest;
import com.ai.backend.client.model.ImageResponse;

@FeignClient(name = "openai", url = "https://api.openai.com/v1/")
public interface OpenAiClient {

    @RequestMapping(method = RequestMethod.POST, value = "/chat/completions")
    ConversationResponse getConversation(@RequestBody ConversationRequest conversationRequest,
            @RequestHeader("Authorization") String secretKey);

    @RequestMapping(method = RequestMethod.POST, value = "/images/generations")
    ImageResponse getImage(@RequestBody ImageRequest imageRequest,
            @RequestHeader("Authorization") String secretKey);
}
