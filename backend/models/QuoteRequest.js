import mongoose from 'mongoose';

const quoteRequestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String, default: '' },
    service: { type: String, required: true },
    budget: { type: String, default: '' },
    resume: { type: String, default: '' },
    message: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now }
});

const QuoteRequest = mongoose.model('QuoteRequest', quoteRequestSchema);
export default QuoteRequest;
