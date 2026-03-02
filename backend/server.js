import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Applicant from './models/Applicant.js';
import QuoteRequest from './models/QuoteRequest.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Internship positions (used to auto-tag applicantType)
const INTERNSHIP_POSITIONS = ['Data Science Intern', 'Web Development Intern'];

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch((error) => console.error('Error connecting to MongoDB:', error.message));

// Health check
app.get('/', (req, res) => {
  res.send('Auraon Backend Server is up and running!');
});

// POST /api/apply — Save a job or internship applicant
app.post('/api/apply', async (req, res) => {
  try {
    const { name, email, phone, position, experience, resume, linkedin, coverLetter } = req.body;

    if (!name || !email || !phone || !position || !experience || !resume) {
      return res.status(400).json({ success: false, message: 'Required fields are missing.' });
    }

    const applicantType = INTERNSHIP_POSITIONS.includes(position) ? 'Internship' : 'Job';

    const applicant = new Applicant({
      name, email, phone, position, applicantType,
      experience, resume,
      linkedin: linkedin || '',
      coverLetter: coverLetter || ''
    });

    await applicant.save();

    res.status(201).json({ success: true, message: 'Application submitted successfully!', id: applicant._id });
  } catch (error) {
    console.error('Error saving applicant:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

// POST /api/quote — Save a client project quote request
app.post('/api/quote', async (req, res) => {
  try {
    const { name, email, phone, company, service, budget, resume, message } = req.body;

    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({ success: false, message: 'Required fields are missing.' });
    }

    const quoteRequest = new QuoteRequest({
      name, email, phone,
      company: company || '',
      service, budget: budget || '',
      resume: resume || '',
      message
    });

    await quoteRequest.save();

    res.status(201).json({ success: true, message: 'Quote request submitted successfully!', id: quoteRequest._id });
  } catch (error) {
    console.error('Error saving quote request:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
