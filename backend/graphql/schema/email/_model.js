import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  name: {
    type: String
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: new Date(),
  }
});

/**
 * This property will ensure our virtuals (including "id")
 * are set on the user when we use it.
 */

emailSchema.set('toObject', { virtuals: true });

emailSchema.method('toGraph', function toGraph() {
  return JSON.parse(JSON.stringify(this));
});

export default mongoose.model('Email', emailSchema);
