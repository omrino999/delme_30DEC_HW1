# Student API

A RESTful API for managing student records built with Node.js, Express, Sequelize ORM, and SQLite.

## Project Structure

```
student-api/
├── src/
│   ├── config/
│   │   └── database.js          # Sequelize database configuration
│   ├── controllers/
│   │   └── studentController.js # CRUD operations logic
│   ├── models/
│   │   └── Student.js           # Student model definition
│   ├── routes/
│   │   └── studentRoutes.js     # API route definitions
│   └── server.js                # Main application entry point
├── database/
│   └── students.db              # SQLite database (auto-generated)
├── package.json
├── .gitignore
└── README.md
```

## Features

- ✅ Complete CRUD operations (Create, Read, Update, Delete)
- ✅ RESTful API design
- ✅ SQLite database with Sequelize ORM
- ✅ CORS enabled
- ✅ JSON request/response handling
- ✅ Input validation
- ✅ Error handling
- ✅ No timestamps (createdAt/updatedAt disabled)

## Student Model

```javascript
{
  id: Integer (Primary Key, Auto-increment),
  firstName: String (Required),
  lastName: String (Required),
  email: String (Required, Unique, Valid Email)
}
```

## Installation

```bash
# Install dependencies
npm install

# Start the server
npm start

# Start with nodemon (development)
npm run dev
```

## API Endpoints

### Home Route
- **GET /** - Welcome message and API documentation

### Student Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get student by ID |
| POST | `/api/students` | Create new student |
| PUT | `/api/students/:id` | Update student |
| DELETE | `/api/students/:id` | Delete student |

## API Usage Examples

### 1. Get All Students
```bash
curl http://localhost:3000/api/students
```

### 2. Get Student by ID
```bash
curl http://localhost:3000/api/students/1
```

### 3. Create New Student
```bash
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }'
```

### 4. Update Student
```bash
curl -X PUT http://localhost:3000/api/students/1 \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane.doe@example.com"
  }'
```

### 5. Delete Student
```bash
curl -X DELETE http://localhost:3000/api/students/1
```

## Response Examples

### Success Response (GET)
```json
[
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  },
  {
    "id": 2,
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane.smith@example.com"
  }
]
```

### Success Response (POST/PUT)
```json
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com"
}
```

### Success Response (DELETE)
```json
{
  "message": "Student deleted successfully"
}
```

### Error Response
```json
{
  "error": "Student not found"
}
```

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Sequelize** - ORM for database operations
- **SQLite3** - Database
- **CORS** - Cross-Origin Resource Sharing
- **ES6 Modules** - Modern JavaScript syntax

## Environment

- Default Port: 3000
- Database: SQLite (file-based)
- Module System: ES6 (type: "module")

## Error Handling

The API includes comprehensive error handling for:
- Missing required fields
- Invalid email format
- Duplicate email addresses
- Student not found (404)
- Database errors (500)

## License

ISC
