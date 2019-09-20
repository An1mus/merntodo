import express from 'express';
import bodyParser from 'body-parser';
import authRouter from './routes/authRouter';
import todosRouter from './routes/todosRouter';
import middlewares from './middlewares';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.json({ iseServerRunning: true });
});

app.use('/auth', authRouter);

app.use('/todos', todosRouter);

export default app;

