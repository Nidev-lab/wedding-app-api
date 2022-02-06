const mongoose = require("mongoose");
const { Schema } = mongoose;

const Invited = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    lastName: {
      required: true,
      type: String,
    },
    table: {
      required: true,
      type: Number,
    },
    isPaid: {
      required: true,
      type: Boolean,
    },
    needTransport: {
      required: true,
      type: Boolean,
    },
    isPresent: {
      type: Boolean,
    },
    isConfirmed: {
      type: Boolean,
    },
  }
);

module.exports = mongoose.model("invited", Invited);
