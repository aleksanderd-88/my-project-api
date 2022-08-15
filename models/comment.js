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
    }
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("Comments", schema);