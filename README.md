# Three-tier Architecture Demo

### Overview
- This repository contains a minimal containerized web application with a three-tier architecture consisting of a frontend, backend and database.
- The frontend uses JavaScript in conjunction with the Vuejs / Vuetify UX framework that supports hot module reloading *(HMR)*
- The backend uses JavaScript in conjunction with the Nodejs / Expressjs framework that support hot reloading
- The database is a PostgreSQL instance

### Frontend Demo with HMR

<p align="center">
  <img src="https://user-images.githubusercontent.com/80125540/285106196-ead02944-7ee8-4812-b028-a2d02ffb6fac.gif" alt="frontend" style="width: 75%; height: auto;">
</p>

### Backend Demo with nodemon
<p align="center">
  <img src="  https://user-images.githubusercontent.com/80125540/285107388-070c840e-ca12-4a08-bf6f-8ee209d310ac.gif" alt="backend" style="width: 75%; height: auto;">
</p>

### End-to-end Demo
`<TBC>`

## Quick Start

### Requirements 
- Docker

### Instructions
- Clone this repository
    ```Console
    git clone <URL>
    ```

- Launch the container
    ```Console
    docker-compose up
    ```

- Interact with the web applications
    - Frontend is hosted at http://localhost:3000/
    - Backend ist hosted at http://localhost:5000/
    - Database is listening on port 5432
