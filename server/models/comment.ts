import { Schema, Model, Document, model } from "mongoose";
import { IComment } from "../../interfaces/mongo/comment";

const commentSchema = new Schema(
  {
    message: String,
    userId: Schema.Types.ObjectId,
    postId: Schema.Types.ObjectId,
  },
  { id: false },
);

export type CommentMongoose = IComment & Document;

commentSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

commentSchema.set("toJSON", {
  virtuals: true,
});

const CommentMongooseModel: Model<CommentMongoose> = model<
  CommentMongoose
>("Comment", commentSchema);

export default CommentMongooseModel;
