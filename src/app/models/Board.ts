import mongoose, { Schema, Document, models, Types } from "mongoose";

export interface IBoard extends Document {
  _id: Types.ObjectId;
  title: string;
  description?: string;
  userId: Types.ObjectId;
  participants?: Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}

const boardSchema = new Schema<IBoard>(
  {
    title: { type: String, required: true },
    description: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Board = models.Board || mongoose.model<IBoard>("Board", boardSchema);
export default Board;
