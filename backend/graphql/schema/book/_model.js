import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  }
});

/**
 * This property will ensure our virtuals (including "id")
 * are set on the user when we use it.
 */

bookSchema.set('toObject', { virtuals: true });

bookSchema.method('toGraph', function toGraph() {
  return JSON.parse(JSON.stringify(this));
});

export default mongoose.model('Book', bookSchema);
