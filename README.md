<p align="center">
    <img width="500" height="300" src="https://www.hackodisha.tech/Images/Group%208.svg" alt="HackOdisha 3.0">
</p>

# 🚀 BloodCompass | HackOdisha 3.0

This repository contains a project that combines Django, Django REST Framework, React, Vite and Fastn to create a web application with a robust backend and a dynamic frontend.

## Project Structure

The project is organized into two main folders:

- `backend`: Contains the Django application responsible for handling API requests and database interactions.
- `frontend`: Contains the React application built using Vite & Fastn, providing a modern and efficient development experience for the frontend.


## Backend (Django) 📦

The backend is built using Django and Django REST Framework, providing a RESTful API to communicate with the frontend. The key features of the backend include:

- API endpoints to manage various resources, such as users, data models, and more.
- Integration with a database (e.g., PostgreSQL, SQLite) to store and retrieve data.
- Authentication and authorization mechanisms to secure API endpoints.
- Custom views, serializers, and models to tailor the API to your project's needs.

### Setting Up the Backend 🛠️

1. **Create a Python Virtual Environment (Optional, but recommended):**

    Create and activate a virtual environment to isolate project dependencies.

    On macOS and Linux:

    ```
    python3 -m venv venv
    source venv/bin/activate
    ```

    
    On Windows:
    ```
    pip install virtualenv
    virtualenv venv
    ./venv/Scripts/Activate.ps1
    ```


2. Install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

3. Run database migrations:
   ```bash
    python manage.py makemigrations
    python manage.py migrate
   ```
4. Start the Django development server:
   ```bash
    python manage.py runserver
   ```
5. Navigate to `http://localhost:8000` to view the API.

## Frontend (React with Vite & Fastn) ⚛️

The frontend is built using React, Vite and Fastn, providing fast development and hot module replacement for efficient code changes. The frontend offers a user-friendly interface to interact with the API provided by the Django backend.

### Setting Up the Vite Server 🛠️

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install the required Node packages:
   ```bash
    npm install
   ```
3. Start the Vite development server:
   ```bash
    npm run dev
   ```
4. Navigate to `http://localhost:5173` to view the frontend.

### Setting Up the Fastn Server 🛠️

1. Install Fastn in your local environment:
   Refer to the official documents [Fastn Documentation](https://Fastn.com/install/)
2. Navigate to the `open-data` folder:
   ```bash
    cd open-data
   ```
3. Start the Fastn development server:
   ```bash
    Fastn serve --port 8006 --edition=2023
   ```
4. Navigate to `http://localhost:8006` to view BloodCompass | Open.


## Contributors 👥

- [Sayak Saha](https://github.com/contributor1)
- [Suchetan Chanda](https://github.com/SuchetanChanda)

## Credits 👏

- Django: [https://www.djangoproject.com/](https://www.djangoproject.com/)
- Django REST Framework: [https://www.django-rest-framework.org/](https://www.django-rest-framework.org/)
- React: [https://reactjs.org/](https://reactjs.org/)
- Vite: [https://vitejs.dev/](https://vitejs.dev/)
- Fastn: [https://Fastn.com/home/](https://Fastn.com/home/)
