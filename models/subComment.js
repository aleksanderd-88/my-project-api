const mongoose = require("../config");

const schema = new mongoose.Schema(
  {
    text: {
      desc: "User comment",
      trim: true,
      type: String
    },
    commentId: {
      desc: "Id of comment that the sub comment was posted on",
      trim: true,
      type: String,
      required: true
    },
    parentCommentId: {
      desc: "Id of parent comment that the nested sub comments was posted on",
      trim: true,
      type: String,
      required: true
    }
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("SubComments", schema);