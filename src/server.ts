import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// API for /language
app.get('/language', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'mocks', 'language.json'));
});

// API for /users
app.get('/users', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'mocks', 'users.json'));
});

// Start the server
app.listen(port, () => {
  console.log(`Mock server started on: http://localhost:${port}`);
});
