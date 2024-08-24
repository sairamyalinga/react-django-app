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
   - Start the Django development server:
     ```bash
     python3 manage.py runserver
     ```

3. **Access the Application:**
   - React client: [http://localhost:5173](http://localhost:5173)
   - Django server: [http://localhost:8000](http://localhost:8000)

