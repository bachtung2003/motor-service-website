import express from 'express';
// eslint-disable-next-line no-undef
import mongoose from 'mongoose';
import { connect, connection } from 'mongoose';
// eslint-disable-next-line no-undef
import { json } from 'body-parser';
import authRoutes from './routes/auth';
// eslint-disable-next-line no-undef
import cors from 'cors';

const app = express();

// Middleware
app.use(json());
app.use(cors());

// MongoDB connection
connect('mongodb://localhost:27017/vue-auth', { useNewUrlParser: true, useUnifiedTopology: true });

const db = connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Routes
import authRoutes from './routes/auth';
app.use('/api/auth', authRoutes);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
