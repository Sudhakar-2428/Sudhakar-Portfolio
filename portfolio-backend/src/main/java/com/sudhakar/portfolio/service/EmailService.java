package com.sudhakar.portfolio.service;

import com.sudhakar.portfolio.dto.ContactRequest;
import org.springframework.mail.MailException;

public interface EmailService {
    void sendContactEmail(ContactRequest request) throws MailException;
}
