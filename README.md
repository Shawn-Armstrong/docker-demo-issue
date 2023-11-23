# Three-tier Architecture Demo

### Overview
- This repository contains a minimal containerized web application with a three-tier architecture consisting of a frontend, backend and database.
- The frontend uses JavaScript in conjunction with the Vuejs / Vuetify UX framework that supports hot module reloading *(HMR)*
- The backend uses JavaScript in conjunction with the Nodejs / Expressjs framework that support hot reloading
- The database is a PostgreSQL instance

### Frontend Demo with HMR

<p align="center">
  <img src="https://user-images.githubusercontent.com/80125540/285106196-ead02944-7ee8-4812-b028-a2d02ffb6fac.gif" alt="frontend" style="width: 75%; height: auto;" title="Click for full size">
</p>

### Backend Demo with nodemon
<p align="center">
  <img src="https://user-images.githubusercontent.com/80125540/285107388-070c840e-ca12-4a08-bf6f-8ee209d310ac.gif" alt="backend" style="width: 75%; height: auto;"  title="Click for full size">
</p>

### End-to-end Demo
`<TBC>`

## Quick Start

### Requirements 
- Docker

### Instructions
- Clone this repository

    ```Console
    git clone https://github.com/Shawn-Armstrong/docker-demo-issue.git
    ```

- Launch the multi-container application:

    ```Console
    docker-compose up
    ```

- Interact with the web applications
    - Frontend is hosted at http://localhost:3000/
    - Backend ist hosted at http://localhost:5000/
    - Database is listening on port 5432

## Issues
- **Frontend HMR intermittently fails** after attempting to add AJAX call to backend. I suspect the AJAX call isn't responsible for the failure as I never triggered the event; rather, the HMR went crazy while adding the code. See suspect directory for code. 
  - When attempting to restart the container Docker give the following notification:
      
    ![image](https://user-images.githubusercontent.com/80125540/285111650-9e6b758f-90fa-4790-a6c6-7eba1f8ec764.png)
  - Stats reported by container while spinning

    ![image](https://user-images.githubusercontent.com/80125540/285112239-b3246fa6-f9c0-449a-99f9-13fa71e18d2c.png)

  - Logs, Inspect, Files and Exec cannot be accessed from Docker Desktop GUI for any container
  - High CPU usage

    ![image](https://user-images.githubusercontent.com/80125540/285112634-25fabb6c-416f-4ff7-85f6-17eb872e5fad.png)
  - Docker CLI is also unresponsive
  - Docker notified it failed to remove compose application:
     ![image](https://user-images.githubusercontent.com/80125540/285114071-093c5891-cb6f-4fe8-b92b-c0d090751bd7.png)
  - `docker-compose down` is unresponsive
  - Turning off Docker via tab tray causes a hang once start up stage begins

    ![image](https://user-images.githubusercontent.com/80125540/285115737-8e483979-b08b-43c8-a0a2-6a0ee89db1d4.png)
  - Task manager indicates many docker background processes 

    ![image](https://user-images.githubusercontent.com/80125540/285117189-7d20aae5-efe7-47e2-b523-49b11c3bc495.png)
  - After ending tasks and restarting Docker notifies further errors
    ![image](https://user-images.githubusercontent.com/80125540/285117512-113a299c-e417-4aff-a99b-1234a1813978.png)
  - HMR is supported with the following changes:

    https://github.com/Shawn-Armstrong/docker-demo-issue/blob/82c606060f2b26716b971f2b47791cc7d5c209fa/frontend/vite.config.js#L47-L52
  - Both restart and windows shutdown were conducted but Docker continues to hang on start up
  - Host operating system

    ```Console
    Windows 11 Home 64-bit, 22H2
    AMD Ryzen 7, X86-64
    ```
