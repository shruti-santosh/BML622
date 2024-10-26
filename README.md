# BML622 Assignment

### 1. Project Overview
This project involves developing a web application (shruti.html), containerizing it with Docker, automating CI/CD pipelines with GitHub Actions. The project demonstrates containerization and automation for scalable deployment. This is just a trial project.

### 2. Project Structure
- `shruti.html`: The main HTML file for the web application.
- Dockerfile: Defines instructions to build a Docker image for the application.
- GitHub Actions configuration: Workflow for automated CI/CD.
  
### 3. Steps to Set Up and Deploy the Project
A. Local Development and Dockerization
- Create the Web Application: Develop the `shruti.html` file with basic HTML and JavaScript for logging messages to the console.
- Dockerize the Application:
- Create a Dockerfile to containerize `shruti.html`.
Build the Docker image:
```
docker build -t shrutisan/bml622:latest .
```
Push the image to DockerHub:
```
docker login -u <username> -p <password>
docker push shrutisan/bml622:latest
```
B. CI/CD Setup with GitHub Actions
- GitHub Actions Workflow:
Create a .github/workflows/deploy.yml file to define CI/CD steps.
Include steps to build the Docker image and push it to DockerHub.
- Configure Secrets: Set up DockerHub credentials in GitHub repository secrets to allow GitHub Actions to push images.

### 4. Testing and Verification
Verify Docker Image: Confirm that the Docker image runs locally and logs as expected.
Verify CI/CD Pipeline: Ensure GitHub Actions workflow completes successfully, pushing the Docker image to DockerHub.

