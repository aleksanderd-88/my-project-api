const mongoose = require("../config");

const schema = new mongoose.Schema(
  {
    text: {
      desc: "User comment",
      trim: true,
      type: String
    },
    videoId: {
      desc: "Id of video that the comment was posted on",
      trim: true,
      type: String,
      required: true
    },
    likes: {
      desc: 'Numbers of likes a comment has',
      type: Number,
      trim: true,
      default: 0
    },
    dislikes: {
      desc: 'Numbers of dislikes a comment has',
      type: Number,
      trim: true,
      default: 0
    },
    canUpVote: {
      desc: 'Whether a comment can be up-voted',
      type: Boolean,
      default: true
    },
    canDownVote: {
      desc: 'Whether a comment can be down-voted',
      type: Boolean,
      default: true
    }
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("Comments", schema);