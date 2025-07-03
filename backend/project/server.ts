import express from 'express';
import cors from 'cors';
import path from 'path';

import projectsRouter from './routes/projects';
import skillsRouter from './routes/skills';
import jobsRouter from './routes/jobs';
import educationRouter from './routes/education';
import leadershipRouter from './routes/leadership';
import githubRouter from './routes/github';
import timelineRoutes from './routes/timeline';
import pythonScript from './routes/python';
import blogPost from './routes/post';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const imagePath = path.join(__dirname, 'assets/images');
app.use('/images', express.static(imagePath));

app.use('/api/projects', projectsRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/jobs', jobsRouter);
app.use('/api/education', educationRouter);
app.use('/api/leadership', leadershipRouter);
app.use('/api/github', githubRouter);
app.use('/api/timeline', timelineRoutes);
app.use('/api/python', pythonScript);
app.use('/api/post', blogPost);

app.listen(PORT, () => {
  console.log(`🚀 Project service running on port ${PORT}`);
});
