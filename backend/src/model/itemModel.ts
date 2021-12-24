import * as mongoose from 'mongoose';

export type ItemDocument = mongoose.Document & {
  description: string;
  name: string;
  number: number;
  quantity: number;
};

const itemSchema = new mongoose.Schema<ItemDocument>(
  {
    description: String,
    name: String,
    number: Number,
    quantity: Number,
  },
  { timestamps: true },
);

export const Item = mongoose.model<ItemDocument>('Item', itemSchema);
