package com.sudhakar.portfolio.service;

import com.sudhakar.portfolio.dto.ContactRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender mailSender;

    @Value("${contact.recipient.email:sudhakartheeone@gmail.com}")
    private String recipientEmail;

    public EmailServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public void sendContactEmail(ContactRequest request) throws MailException {
        String subject = "Portfolio Contact: " + request.getSubject().replaceAll("[\\r\\n]", " ");

        String text = String.format(
                "You have received a new message from your portfolio contact form.\n\n" +
                        "Name: %s\n" +
                        "Email: %s\n\n" +
                        "Message:\n%s\n",
                request.getName(),
                request.getEmail(),
                request.getMessage()
        );

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(recipientEmail);
        message.setReplyTo(request.getEmail());
        message.setSubject(subject);
        message.setText(text);

        mailSender.send(message);
    }
}
