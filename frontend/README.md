````markdown id="0epx0m"
# Machine Maintenance Tracker

## Overview
Machine Maintenance Tracker is a simple web application used to manage and monitor machine maintenance details.  
The application helps users store machine information, track machine status, and manage maintenance records efficiently.

---

## Tech Stack

### Frontend
- React.js
- HTML
- CSS
- JavaScript

### Backend
- FastAPI
- Python

---

## Features
- Add machine details
- Track machine status (Working / Fault)
- Store machine location
- View machine records in a table
- Simple and user-friendly interface

---

## Project Structure

```plaintext
machine-maintenance-tracker/
│
├── backend/      # FastAPI backend
├── frontend/     # React frontend
└── README.md
````

---

## Installation Guide

### Clone Repository

```bash id="l0v5c8"
git clone https://github.com/anjalichilukuri61/machine-maintenance-tracker.git
```

---

## Backend Setup (FastAPI)

```bash id="sk9v1d"
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend Server:

```plaintext id="oz3v0f"
http://127.0.0.1:8000
```

API Documentation:

```plaintext id="g6f1p3"
http://127.0.0.1:8000/docs
```

---

## Frontend Setup (React)

```bash id="u1n7x4"
cd frontend
npm install
npm start
```

Frontend Server:

```plaintext id="wd8s2q"
http://localhost:3000
```

---

## Future Enhancements

* Authentication system
* Maintenance scheduling alerts
* Database integration
* Dashboard analytics
* Search and filter options

---




