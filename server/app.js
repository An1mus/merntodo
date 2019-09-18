import express from 'express';
import authRouter from './routes/authRouter';

const app = express();

app.get('/', (req, res) => {
	res.json({ iseServerRunning: true });
});

app.use('/auth', authRouter);

export default app;

