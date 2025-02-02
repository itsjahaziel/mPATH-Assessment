# mPATH Assessment Project

## About Me

My name is Jahaziel Ramos, and I thoroughly enjoyed working on this assessment project for the Contract Full Stack Developer position at mPATH. This project was a great opportunity to demonstrate my skills in .NET, Angular, and database integration. I look forward to the possibility of joining mPATH and contributing to its mission in the healthcare industry.

## Project Overview

This project is a healthcare-focused web application designed to manage patient recommendations. The system allows users to log in, browse a list of patients, and view recommendations such as allergy checks and screenings.

### Features Implemented

- **Authentication & Authorization**: Basic role-based authentication.
- **Patient Management**: Displays a list of patients.
- **Recommendations**: Displays patient-specific recommendations.
- **Frontend**: Built with Angular 17+.
- **Backend**: Built with .NET Core 6+.
- **Database**: SQL Server.
- **Security Considerations**: Implemented basic OWASP security best practices.

## Important Notes

Currently, some aspects of the frontend are **hardcoded** for demonstration purposes. Due to time constraints, I decided to hardcode some patient data instead of fully integrating it with the backend. However, in a real-world scenario, these values would be dynamically loaded from the backend API. Given more time, I would:

- Fully integrate the frontend with the backend API.
- Implement a more robust authentication and role-based authorization system.
- Enhance UI with responsive design improvements.
- Improve security measures further.

## Setup Instructions

To run the project locally, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/itsjahaziel/mPATH-Assessment.git
cd mPATH-Assessment
```

### Backend Setup

```bash
cd backend
dotnet restore
dotnet build
dotnet run
```

The backend should now be running on `http://localhost:5029`.

### Frontend Setup

```bash
cd frontend
npm install
ng serve --open
```

The frontend should now be running on `http://localhost:4200`.

## API Documentation

This project follows RESTful API principles, and API documentation is available using Swagger.
To access it, run the backend and open:

```bash
http://localhost:5029/swagger
```

## Final Thoughts

This project was a valuable experience, and I look forward to future opportunities to refine and expand upon it. Thank you for reviewing my assessment submission!

**Contact:** jahazielramos1@outlook.com
[Jahaziel RamosLinkedIn](https://www.linkedin.com/in/jahazielramos/) |
