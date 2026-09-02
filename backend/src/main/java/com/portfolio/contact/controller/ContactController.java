package com.portfolio.contact.controller;

import com.portfolio.contact.dto.ContactRequest;
import com.portfolio.contact.service.EmailService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ContactController {

    private final EmailService emailService;

    public ContactController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, Object>> submitContactForm(@Valid @RequestBody ContactRequest request) {
        Map<String, Object> response = new HashMap<>();
        try {
            emailService.sendContactEmail(request);
            response.put("success", true);
            response.put("message", "Message sent successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Log the actual error, but don't expose it to the client
            System.err.println("Failed to send email: " + e.getMessage());
            e.printStackTrace();
            
            response.put("success", false);
            response.put("message", "Unable to send message");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
