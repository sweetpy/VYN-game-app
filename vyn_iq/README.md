# VYN IQ - Empire Management Application

VYN IQ is a full-stack web application designed as a gamified "empire management" tool to track businesses, finances, ideas, tasks, and more.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Python (3.8 or newer)
- Pip (Python package installer)
- Node.js (14.x or newer)
- npm (Node package manager)

## Backend Setup Instructions

These steps will set up the Django backend server.

1.  **Navigate to the Project Directory:**
    Open your terminal and navigate into the `vyn_iq` project folder.
    ```bash
    cd vyn_iq
    ```

2.  **Install Python Dependencies:**
    Install all the required Python packages using the `requirements.txt` file.
    ```bash
    pip install -r requirements.txt
    ```

3.  **Set Up the Database:**
    The following command will create a fresh SQLite database and apply all the necessary data structures (migrations).
    ```bash
    python manage.py migrate
    ```

4.  **Populate the Database with Sample Data:**
    To get started with a functional environment, run the consolidated setup script. This will create a default user (`testuser`) and populate all modules with sample data (businesses, tasks, etc.).
    ```bash
    python manage.py runscript setup_dev_data
    ```

## Frontend Setup Instructions

These steps will set up the React frontend.

1.  **Navigate to the Frontend Directory:**
    In a **new terminal window**, navigate into the `frontend` directory.
    ```bash
    cd vyn_iq/frontend
    ```

2.  **Install Node.js Dependencies:**
    Install all the required JavaScript packages.
    ```bash
    npm install
    ```

## How to Run the Application

To run the VYN IQ application, you need to have both the backend and frontend servers running simultaneously.

1.  **Start the Backend Server:**
    In your first terminal (the one in the `vyn_iq` directory), run the following command:
    ```bash
    python manage.py runserver
    ```
    The backend API will now be running at `http://localhost:8000`.

2.  **Start the Frontend Server:**
    In your second terminal (the one in the `vyn_iq/frontend` directory), run the following command:
    ```bash
    npm run dev
    ```
    The frontend application will now be running and accessible at `http://localhost:5173`.

3.  **Log In and Use the App:**
    - Open your web browser and navigate to `http://localhost:5173`.
    - You will be redirected to the login page.
    - Use the following default credentials to log in:
        - **Username:** `testuser`
        - **Password:** `testpassword`

You can now explore the full VYN IQ application!
