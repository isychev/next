const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    text: String,
    userId: mongoose.Schema.Types.ObjectId,
  },
  { id: false, timestamps: false },
);

postSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

postSchema.set("toJSON", {
  virtuals: true,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
