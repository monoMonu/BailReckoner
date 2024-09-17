import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import offenceRouter from './routes/offenceRoutes.js';
import bailApplicationRouter from './routes/bailApplicationRoutes.js';

dotenv.config({ path: '.env' });
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
   console.log('Connected to MongoDB');
   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(error => console.log(error));

// Routes
app.use('/api/offences', offenceRouter);
app.use('/api/bail-applications', bailApplicationRouter);
