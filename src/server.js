import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import studentRoutes from './routes/studentRoutes.js';
import 'dotenv/config';  // Add this at the top

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Student API',
    version: '1.0.0',
    endpoints: {
      students: {
        getAll: 'GET /api/students',
        getById: 'GET /api/students/:id',
        create: 'POST /api/students',
        update: 'PUT /api/students/:id',
        delete: 'DELETE /api/students/:id'
      }
    }
  });
});

// API routes
app.use('/api/students', studentRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Initialize database and start server
const startServer = async () => {
  try {
    // Test database connection
    await sequelize.authenticate();
    console.log('✓ Database connection established successfully');
    
    // Sync database (creates tables if they don\'t exist)
    await sequelize.sync();
    console.log('✓ Database synchronized');
    
    // Start server
    app.listen(PORT, () => {
      console.log(`✓ Server is running on http://localhost:${PORT}`);
      console.log(`✓ API endpoints available at http://localhost:${PORT}/api/students`);
    });
  } catch (error) {
    console.error('✗ Unable to start server:', error);
    process.exit(1);
  }
};

startServer();
