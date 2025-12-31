# Student API - Project Structure

## Directory Tree

```
student-api/
│
├── package.json                    # Dependencies and scripts
├── .gitignore                      # Git ignore rules
├── README.md                       # Project documentation
│
├── database/                       # Database storage
│   └── students.db                 # SQLite database (auto-generated)
│
└── src/                           # Source code
    │
    ├── server.js                  # Main entry point - Express app setup
    │
    ├── config/                    # Configuration files
    │   └── database.js           # Sequelize database configuration
    │
    ├── models/                    # Data models
    │   └── Student.js            # Student model (firstName, lastName, email)
    │
    ├── controllers/               # Business logic
    │   └── studentController.js  # CRUD operations for students
    │
    └── routes/                    # API routes
        └── studentRoutes.js      # Student endpoints definition
```

## File Descriptions

### Root Level

- **package.json** - Project dependencies (express, sequelize, sqlite3, cors) and npm scripts
- **.gitignore** - Excludes node_modules, database files, and logs from version control
- **README.md** - Complete project documentation with API usage examples

### src/ Directory

- **server.js** - Application entry point
  - Initializes Express app
  - Sets up middleware (CORS, JSON parsing)
  - Defines home route (/)
  - Mounts API routes (/api/students)
  - Connects to database and starts server

### src/config/

- **database.js** - Sequelize configuration
  - SQLite dialect setup
  - Database file path configuration
  - Connection export for models

### src/models/

- **Student.js** - Student model definition
  - Fields: id, firstName, lastName, email
  - Validation rules (required, email format, unique email)
  - Timestamps disabled
  - Uses Sequelize DataTypes

### src/controllers/

- **studentController.js** - Business logic for CRUD operations
  - `createStudent()` - POST /api/students
  - `getAllStudents()` - GET /api/students
  - `getStudentById()` - GET /api/students/:id
  - `updateStudent()` - PUT /api/students/:id
  - `deleteStudent()` - DELETE /api/students/:id
  - Error handling for validation and database errors

### src/routes/

- **studentRoutes.js** - Express router configuration
  - Maps HTTP methods to controller functions
  - RESTful route structure
  - Exports router for mounting in server.js

### database/

- **students.db** - SQLite database file
  - Auto-generated on first run
  - Contains 'students' table
  - Persists data across restarts

## Data Flow

```
Client Request
    ↓
server.js (Express middleware: CORS, JSON parsing)
    ↓
studentRoutes.js (Route matching)
    ↓
studentController.js (Business logic)
    ↓
Student.js (Model/ORM)
    ↓
database.js (Sequelize connection)
    ↓
students.db (SQLite database)
    ↓
Response back to client
```

## Technology Stack

- **Runtime**: Node.js with ES6 modules
- **Framework**: Express.js
- **ORM**: Sequelize
- **Database**: SQLite3
- **Middleware**: CORS, express.json()
- **Architecture**: MVC pattern (Model-View-Controller)

## Key Features

✓ RESTful API design
✓ Async/await for database operations
✓ Input validation
✓ Error handling
✓ CORS enabled for cross-origin requests
✓ JSON request/response format
✓ No timestamps on Student model
✓ Unique email constraint
✓ Auto-increment primary key
