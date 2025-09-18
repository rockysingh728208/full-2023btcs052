import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import contactRoutes from "./routes/contactRoute.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.get('/', (req, res) => {
  res.send('API is running');
});

connectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});