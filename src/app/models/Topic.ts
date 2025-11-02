import mongoose, { Schema, Document, models, Types } from "mongoose";

export interface ITopic extends Document {
  _id: Types.ObjectId;
  title: string;
  chapterId: Types.ObjectId;
  userId: Types.ObjectId;
  isCompleted: boolean;
  dateAssigned: Date;
  dateCompleted?: Date | null;
  carriedOverFrom?: Types.ObjectId | null;
  createdAt?: Date;
  updatedAt?: Date;
}

const topicSchema = new Schema<ITopic>(
  {
    title: { type: String, required: true },
    chapterId: { type: Schema.Types.ObjectId, ref: "Chapter", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    isCompleted: { type: Boolean, default: false },
    dateAssigned: { type: Date, default: () => new Date() },
    dateCompleted: { type: Date, default: null },
    carriedOverFrom: {
      type: Schema.Types.ObjectId,
      ref: "Topic",
      default: null,
    },
  },
  { timestamps: true }
);

// If user sets isCompleted to true, set dateCompleted automatically
topicSchema.pre("save", function (next) {
  if (this.isModified("isCompleted")) {
    if (this.isCompleted && !this.dateCompleted) {
      this.dateCompleted = new Date();
    } else if (!this.isCompleted) {
      // if marking incomplete again, clear dateCompleted
      this.dateCompleted = null;
    }
  }
  next();
});

const Topic = models.Topic || mongoose.model<ITopic>("Topic", topicSchema);
export default Topic;
