# Portfolio Contact Backend

This is the Spring Boot backend service for handling contact form submissions from the React portfolio. It exposes a simple REST API and uses `JavaMailSender` to securely relay visitor messages to a configured Gmail inbox.

## Technology Stack

- **Java 17**
- **Spring Boot 3.3.x**
- **Maven**
- **Spring Web** (REST API)
- **Spring Boot Validation** (Input sanitation & validation)
- **Spring Boot Mail** (SMTP email dispatch)

## Project Structure

```
src/main/java/com/sudhakar/portfolio/
├── PortfolioBackendApplication.java
├── config/
│   └── CorsConfig.java           # Configures allowed frontend origins
├── controller/
│   └── ContactController.java    # Handles API routing (/api/contact, /api/health)
├── dto/
│   └── ContactRequest.java       # Form data representation with validation annotations
├── exception/
│   └── GlobalExceptionHandler.java # Centralized exception handling returning clean JSON
└── service/
    └── EmailService.java         # Contains JavaMailSender logic to send emails
```

## Local Development Setup

### 1. Configure Gmail App Password
To allow Spring Boot to send emails securely without exposing your actual Google password, you need an **App Password**:
1. Go to your Google Account -> **Security**.
2. Enable **2-Step Verification** if not already enabled.
3. Under 2-Step Verification, find **App passwords** (or search "App passwords" in the top bar).
4. Create a new App Password (e.g., name it "Portfolio Backend").
5. Copy the 16-character generated password (no spaces).

### 2. Environment Variables
The application requires the following environment variables to run. You can export them in your terminal before running:

```bash
export MAIL_USERNAME=sudhakartheeone@gmail.com
export MAIL_PASSWORD=YOUR_16_CHAR_APP_PASSWORD
export FRONTEND_URL=http://localhost:5173  # (Change for production)
```

*(Note: Never commit your real `MAIL_PASSWORD` to GitHub!)*

### 3. Run the Backend Locally
From the `portfolio-backend` root directory, execute:

```bash
./mvnw spring-boot:run
```
The server will start on `http://localhost:8080`.

## Testing the API

### 1. Health Check
```bash
curl http://localhost:8080/api/health
```
**Expected Response:**
```json
{ "status": "UP" }
```

### 2. Contact Request (Valid)
```bash
curl -X POST http://localhost:8080/api/contact \
     -H "Content-Type: application/json" \
     -d '{
           "name": "Test Visitor",
           "email": "visitor@example.com",
           "subject": "Test Subject",
           "message": "This is a test message."
         }'
```

## Running the React Frontend Locally

1. Go to your frontend root directory (`/Users/sudhakar/Documents/Sudhakar-Portfolio`).
2. Ensure you have an `.env.local` file containing:
   ```env
   VITE_API_URL=http://localhost:8080
   ```
3. Run the frontend:
   ```bash
   npm run dev
   ```
4. Visit `http://localhost:5173` and submit the contact form. It will POST to the local backend, which will then dispatch an email to your Gmail account.

## Render Deployment Guide

To deploy this backend to Render (Web Service):

1. **Push this `portfolio-backend` project** to its own GitHub repository.
2. Go to **Render Dashboard** -> **New Web Service**.
3. Connect your new backend repository.
4. Set the **Build Command**:
   ```bash
   ./mvnw clean package -DskipTests
   ```
5. Set the **Start Command**:
   ```bash
   java -jar target/portfolio-backend-0.0.1-SNAPSHOT.jar
   ```
6. **Environment Variables** (Add these in Render settings):
   - `MAIL_USERNAME` = `sudhakartheeone@gmail.com`
   - `MAIL_PASSWORD` = `YOUR_16_CHAR_APP_PASSWORD`
   - `FRONTEND_URL` = `https://sudhakar-2428.github.io`

Once deployed, Render will provide a public URL (e.g., `https://portfolio-backend.onrender.com`).

### Connect GitHub Pages Frontend to Render Backend
In your frontend GitHub repository settings or `.env` files for production, ensure the environment variable points to your new Render backend:

```env
VITE_API_URL=https://portfolio-backend.onrender.com
```
Rebuild and deploy your frontend to apply the changes.
