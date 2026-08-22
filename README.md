# Machine Maintenance Tracker

A full-stack web application for managing and tracking machine maintenance records. Built with React.js for the frontend and FastAPI with Python for the backend, using SQLite for data storage.


## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Machine Maintenance Tracker is a web application designed to help users manage and monitor machine maintenance records efficiently. Instead of using spreadsheets or paper records, this application provides a centralized digital system where users can:

- Add new machines with detailed information
- Track machine status (Working/Fault)
- Store machine location data
- View all machine records in a table format
- Edit existing machine information
- Delete machines that are no longer needed

This project demonstrates full-stack development skills including frontend-backend communication, RESTful API design, database operations, and state management.

## ✨ Features

- **Add Machines**: Easily add new machines with name, status, and location
- **View Records**: Display all machines in a clean, organized table
- **Edit Records**: Update machine information as needed
- **Delete Records**: Remove machines from the system
- **Status Tracking**: Monitor machine status (Working/Fault)
- **Real-time Updates**: UI updates automatically after data changes
- **Responsive Design**: Clean and user-friendly interface

## 🛠 Tech Stack

### Frontend
- **React.js** - UI framework
- **Axios** - HTTP client for API requests
- **HTML/CSS** - Markup and styling

### Backend
- **Python** - Programming language
- **FastAPI** - Web framework for building APIs
- **Uvicorn** - ASGI server

### Database
- **SQLite** - Lightweight database
- **SQLAlchemy** - Python SQL toolkit and ORM

### Development Tools
- **Pydantic** - Data validation
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
machine-maintenance-tracker/
│
├── backend/
│   ├── main.py              # FastAPI application and API routes
│   ├── models.py            # SQLAlchemy database models
│   ├── database.py          # Database connection setup
│   ├── machines.db          # SQLite database file
│   └── __pycache__/         # Python cache files
│
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── App.js           # Main React component
│   │   ├── App.css          # Component styles
│   │   ├── index.js         # React entry point
│   │   └── index.css        # Global styles
│   ├── package.json         # Node.js dependencies
│   └── package-lock.json    # Dependency lock file
│
└── README.md                # This file
```

## 🚀 Installation

### Prerequisites

- **Python** (3.7 or higher)
- **Node.js** (14 or higher)
- **npm** or **yarn**

### Step 1: Clone the Repository

```bash
git clone https://github.com/anjalichilukuri61/machine-maintenance-tracker.git
cd machine-maintenance-tracker
```

### Step 2: Backend Setup

Navigate to the backend directory and install required Python packages:

```bash
cd backend
pip install fastapi uvicorn sqlalchemy pydantic
```

### Step 3: Frontend Setup

Navigate to the frontend directory and install Node.js dependencies:

```bash
cd ../frontend
npm install
```

## 💻 Usage

### Running the Backend

Open a terminal in the `backend` directory:

```bash
cd backend
python -m uvicorn main:app --reload
```

The backend will start running on: `http://127.0.0.1:8000`

### Running the Frontend

Open a new terminal in the `frontend` directory:

```bash
cd frontend
npm start
```

The frontend will start running on: `http://localhost:3000`

### Accessing the Application

1. Open your browser and go to: `http://localhost:3000`
2. You will see the Machine Maintenance Tracker interface
3. Use the form to add new machines
4. View, edit, and delete machines using the table

### API Documentation

FastAPI automatically generates interactive API documentation:

- **Swagger UI**: http://127.0.0.1:8000/docs
- **ReDoc**: http://127.0.0.1:8000/redoc

## 📡 API Documentation

### Base URL
```
http://127.0.0.1:8000
```

### Endpoints

#### 1. Get All Machines
```http
GET /machines
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Machine A",
    "status": "Working",
    "location": "Factory Floor 1"
  },
  {
    "id": 2,
    "name": "Machine B",
    "status": "Fault",
    "location": "Factory Floor 2"
  }
]
```

#### 2. Add New Machine
```http
POST /machines
Content-Type: application/json

{
  "name": "Machine C",
  "status": "Working",
  "location": "Factory Floor 3"
}
```

**Response:**
```json
{
  "message": "Machine added successfully",
  "data": {
    "id": 3,
    "name": "Machine C",
    "status": "Working",
    "location": "Factory Floor 3"
  }
}
```

#### 3. Update Machine
```http
PUT /machines/{machine_id}
Content-Type: application/json

{
  "name": "Machine C Updated",
  "status": "Fault",
  "location": "Factory Floor 3"
}
```

**Response:**
```json
{
  "message": "Machine updated successfully",
  "data": {
    "id": 3,
    "name": "Machine C Updated",
    "status": "Fault",
    "location": "Factory Floor 3"
  }
}
```

#### 4. Delete Machine
```http
DELETE /machines/{machine_id}
```

**Response:**
```json
{
  "message": "Machine deleted successfully",
  "deleted_id": 3
}
```

## 🗄️ Database Schema

### Table: machines

| Column  | Type    | Description                  |
|---------|---------|------------------------------|
| id      | Integer | Primary key (auto-increment) |
| name    | String  | Machine name                 |
| status  | String  | Machine status (Working/Fault)|
| location| String  | Machine location             |

### Entity-Relationship Diagram

```
┌─────────────────────────────────┐
│           machines               │
├─────────────────────────────────┤
│ id (PK)          INTEGER         │
│ name             STRING          │
│ status           STRING          │
│ location         STRING          │
└─────────────────────────────────┘
```

## 📸 Screenshots

### Main Interface
- Form for adding/updating machines
- Table displaying all machine records
- Edit and Delete buttons for each record

*(Add screenshots here when available)*

## 🔮 Future Improvements

### Planned Features
- [ ] User authentication and authorization
- [ ] Search and filtering functionality
- [ ] Pagination for large datasets
- [ ] Machine maintenance history tracking
- [ ] Notifications for status changes
- [ ] Dashboard with statistics and charts
- [ ] Export to CSV/Excel functionality
- [ ] Image upload for machines
- [ ] Advanced filtering and sorting
- [ ] Data backup and restore

### Technical Improvements
- [ ] Unit and integration tests
- [ ] Better error handling
- [ ] Input validation on frontend
- [ ] Loading states and indicators
- [ ] Responsive design improvements
- [ ] Migration to PostgreSQL for production
- [ ] Docker containerization
- [ ] CI/CD pipeline setup

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



**Built with ❤️ using React and FastAPI**
