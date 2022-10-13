require('dotenv').config();
import cookieParser from 'cookie-parser';
import express, { Request, Response, Express, NextFunction } from 'express';
import morgan from 'morgan';
import config from './config';
import cors from 'cors';
import userRouter from './routes/user.route';
import authRouter from './routes/auth.route';
import ConnectDBService from './services/connectDB';
const app: Express = express();
// 1. Body Parser
app.use(express.json({ limit: '10kb' }));

// 2. Cookie Parser
app.use(cookieParser());
// 3. Logger
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(
    cors({
        origin: config.origin,
        credentials: true,
    })
);

// 5. Routes
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

// Testing
app.get('/healthChecker', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to Tuan Auth',
    });
});

app.all('*', (req: Request, res: Response, next: NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 404;
    next(err);
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    err.status = err.status || 'error';
    err.statusCode = err.statusCode || 500;

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});
ConnectDBService.getInstance();
const port = config.port;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
