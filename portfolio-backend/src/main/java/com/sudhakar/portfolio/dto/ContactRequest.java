package com.sudhakar.portfolio.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ContactRequest {

    @NotBlank(message = "Name is required")
    @Size(max = 100, message = "Name must be less than 100 characters")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Please provide a valid email address")
    @Size(max = 100, message = "Email must be less than 100 characters")
    private String email;

    @NotBlank(message = "Subject is required")
    @Size(max = 150, message = "Subject must be less than 150 characters")
    private String subject;

    @NotBlank(message = "Message is required")
    @Size(max = 5000, message = "Message must be less than 5000 characters")
    private String message;

    // Getters and Setters

    public String getName() {
        return name;
    }

    public void setName(String name) {
        if (name != null) this.name = name.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        if (email != null) this.email = email.trim();
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        if (subject != null) this.subject = subject.trim();
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        if (message != null) this.message = message.trim();
    }
}
