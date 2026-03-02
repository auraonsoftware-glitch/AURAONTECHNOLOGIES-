import mongoose from 'mongoose';

const applicantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    position: { type: String, required: true },
    applicantType: { type: String, enum: ['Job', 'Internship'], required: true },
    experience: { type: String, required: true },
    resume: { type: String, required: true },
    linkedin: { type: String, default: '' },
    coverLetter: { type: String, default: '' },
    submittedAt: { type: Date, default: Date.now }
});

const Applicant = mongoose.model('Applicant', applicantSchema);
export default Applicant;
