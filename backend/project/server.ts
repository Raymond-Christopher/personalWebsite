import express from 'express';
import cors from 'cors';
import projectsRouter from './routes/projects';
import skillsRouter from './routes/skills';
import jobsRouter from './routes/jobs';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/projects', projectsRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/jobs', jobsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Project service running on port ${PORT}`);
});
