import mongoose, { Schema, Document, models, Types } from "mongoose";

export interface IChapter extends Document {
  _id: Types.ObjectId;
  title: string;
  subjectId: Types.ObjectId;
  userId: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const chapterSchema = new Schema<IChapter>(
  {
    title: { type: String, required: true },
    subjectId: { type: Schema.Types.ObjectId, ref: "Subject", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Chapter = models.Chapter || mongoose.model<IChapter>("Chapter", chapterSchema);
export default Chapter;
