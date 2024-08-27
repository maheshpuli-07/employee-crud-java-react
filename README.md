Employee CRUD Application Overview

In this project, I developed a full-stack Employee CRUD (Create, Read, Update, Delete) application using React.js for the frontend, Spring Boot for the backend, and MySQL as the database. The application allows users to perform CRUD operations on employee records and includes an additional feature to clear all employees from the database.

Frontend:

React.js: The frontend of the application is built using React.js, a popular JavaScript library for building user interfaces. React's component-based architecture made it easy to manage the state and UI updates efficiently.

Axios: I used Axios, a promise-based HTTP client, to handle API requests between the frontend and backend. Axios facilitated seamless communication with the Spring Boot API.
Bootstrap: For styling, I used Bootstrap, a widely-used CSS framework that helped in creating a responsive and modern UI. I customized the components to match the design requirements, ensuring that the UI is user-friendly and visually appealing.

Responsive Design: The application is designed to be responsive, ensuring it works well on various devices and screen sizes. Special attention was given to making sure elements like buttons and forms are accessible and appropriately styled.

Backend:

Spring Boot: The backend is built using Spring Boot, a powerful framework for building Java applications. I created RESTful APIs to handle CRUD operations, ensuring a robust and scalable backend.
Spring Data JPA: I used Spring Data JPA for data persistence, simplifying database interactions. It provided an abstraction layer over the database, allowing me to focus more on business logic rather than database-specific code.

MySQL: MySQL was chosen as the database to store employee records. It is a reliable relational database management system that integrates well with Spring Boot and offers the necessary features for the application.
Auto-Increment Management: To manage employee IDs effectively, I implemented logic to reset the auto-increment value of the primary key in the MySQL database after clearing all employees. This ensures that new records start from ID 1, maintaining a clean sequence of IDs.

Additional Features:

Clear All Employees: I added a feature to clear all employee records from the database, with the corresponding API endpoint handled in Spring Boot. This feature was integrated into the frontend with a button that triggers the API call to delete all records and reset the ID sequence.
