import mongoose from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    sparse: true,
    unique: true,
  },

  hash: String,
  salt: String,

  role: {
    type: String,
    enum: ['USER', 'ADMIN'],
    default: 'USER',
  },

  created_at: {
    type: Date,
    default: new Date(),
  },

  updated_at: {
    type: Date,
    default: new Date(),
  }
});

userSchema.pre('save', function save(next) {
  // get the current date
  const currentDate = new Date();
  // change the updated_at field to current date
  this.updated_at = currentDate;
  // if created_at doesn't exist, add to that field
  if (!this.created_at) this.created_at = currentDate;
  next();
});

userSchema.method('setPassword', function setPassword(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
});

userSchema.method('validatePassword', function validatePassword(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
});

userSchema.method('generateJWT', function generateJWT() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    },
    jwtSecret,
  );
});

userSchema.method('toAuthJSON', function toAuthJSON() {
  return {
    user: this.toGraph(),
    token: this.generateJWT()
  };
});

/**
 * This property will ensure our virtuals (including "id")
 * are set on the user when we use it.
 */
userSchema.set('toObject', { virtuals: true });

/**
 * Used for returning user object to graphql
 */
userSchema.method('toGraph', function toGraph() {
  return JSON.parse(JSON.stringify(this));
});

export default mongoose.model('User', userSchema);
