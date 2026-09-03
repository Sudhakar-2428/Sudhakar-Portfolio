package com.portfolio.contact.service;

import com.portfolio.contact.dto.ContactRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;
    
    @Value("${app.mail.to}")
    private String destinationEmail;

    @Value("${app.mail.from}")
    private String fromEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactEmail(ContactRequest request) {
        SimpleMailMessage message = new SimpleMailMessage();
        
        message.setFrom(fromEmail);
        message.setTo(destinationEmail);
        message.setReplyTo(request.getEmail());
        message.setSubject("[Portfolio Contact] " + request.getSubject());
        
        String emailBody = String.format(
            "New Portfolio Contact Message\n\n" +
            "Name:\n%s\n\n" +
            "Email:\n%s\n\n" +
            "Subject:\n%s\n\n" +
            "Message:\n%s\n\n" +
            "--------------------------------\n" +
            "Sent from Sudhakar's Portfolio",
            request.getName(),
            request.getEmail(),
            request.getSubject(),
            request.getMessage()
        );
        
        message.setText(emailBody);
        
        mailSender.send(message);
    }
}
