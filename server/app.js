import express from 'express';
import authRouter from './routes/authRouter';
import middlewares from './middlewares';
import cors from 'cors';

const app = express();

app.use(cors());

app.use('/', middlewares.bodyParser);

app.get('/', (req, res) => {
	res.json({ iseServerRunning: true });
});

app.use('/auth', authRouter);

export default app;

