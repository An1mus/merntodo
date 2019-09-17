import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.json({ iseServerRunning: true });
});

export default app;
