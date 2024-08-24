# Recipe Application

## Overview

This application is a full-stack recipe management system. It allows users to perform CRUD operations on recipes. The frontend is built with React, while the backend is powered by Django. Data is managed using SQLite.

## Features
- Create, view, and delete recipes.
- Display recipes as cards with details like title, cuisine, instructions, difficulty, and author.
- Delete recipes directly from the card.

## Technologies Used
- **React**: JavaScript library used for building the frontend.
- **Vite**: Build tool for web development with React.
- **MUI**: React component library.
- **Tailwind CSS**: CSS framework for styling.
- **Django**: Backend framework for handling APIs and database interactions.
- **SQLite**: Lightweight database for storing recipe data during development.
- **Axios**: HTTP client for making API requests.

## Local Development

### Setup

1. **Frontend Setup:**
   - Navigate to the `frontend` directory.
     ```bash
      cd frontend
      ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm run dev
     ```

2. **Backend Setup:**
   - Navigate to the `server` directory.
     ``` bash
     cd server
     ```
   - Create a virtual environment
     ```bash
     python3 -m venv recipes
     ```
   - Install dependencies
     ```bash
     recipes/bin/pip3 install -r requirements.txt
     ```
   - Activate venv
     ```bash
     source recipes/bin/activate
     ```
   - Run the migrations
     ```bash
     python3 manage.py migrate
     ```
   - Start the Django development server using python3/python:
     ```bash
     python3 manage.py runserver
     ```

3. **Access the Application:**
   - React client: [http://localhost:5173](http://localhost:5173)
   - Django server: [http://localhost:8000](http://localhost:8000)

### Notes:
- This setup assumes you have **Linux/MacOS** environment. For Windows, update the commands accordingly.
- Replace pip with pip3 and python with python3 if you’re using a system where Python 2 and 3 coexist and you need to specify Python 3 explicitly.

