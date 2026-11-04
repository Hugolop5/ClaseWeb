import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import cors from 'cors';     
import helmet from 'helmet';
import morgan from 'morgan';
import taskRouter from './routes/task.routes.js'; 
import errorHandler from './middlewares/error-handler.js';
import authRouter from './routes/auth.routes.js';

const app = express();
const publicDir = path.join(process.cwd(), 'public');

app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN 
}));

app.use(express.json());
app.use(morgan('dev'));

app.use('/assets', express.static(path.join(publicDir, 'assets')));


app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: publicDir,
    dotfiles: 'deny'
  });
});

app.get('/api/health', (request, response) => {
  response.json({ status: 'ok', system: 'TaskFlow' });
});

app.get('/api/info', (request, response) => {
  response.json({
    name: 'TaskFlow',
    version: '1.0.0',
    description: 'Seguimiento de tareas'
  });
});
// Ruta temporal para la captura

app.get('/api/debug-error', (req, res, next) => {
  next(new Error('Error de prueba para evidencia'));
});

app.use('/api/tasks', taskRouter);
app.use('/api/auth', authRouter);


app.use((request, response) => {
  response.status(404).json({
    message: 'Ruta no encontrada',
    path: request.originalUrl
  });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`TaskFlow API en http://localhost:${PORT}`);
});
