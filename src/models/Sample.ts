import { Schema } from 'mongoose';
import db from '@/connections/mongo';

const schema = new Schema(
  {
    name: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  {
    timestamps: true
  }
);

export default db.model('sample', schema);
