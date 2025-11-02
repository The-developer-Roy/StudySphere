import mongoose, { Schema, Document, models, Types } from "mongoose";

export interface ISubject extends Document {
  _id: Types.ObjectId;
  title: string;
  description?: string;
  boardId: Types.ObjectId;
  userId: Types.ObjectId;
  color?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const subjectSchema = new Schema<ISubject>(
  {
    title: { type: String, required: true },
    description: { type: String },
    boardId: { type: Schema.Types.ObjectId, ref: "Board", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    color: { type: String },
  },
  { timestamps: true }
);

const Subject = models.Subject || mongoose.model<ISubject>("Subject", subjectSchema);
export default Subject;
