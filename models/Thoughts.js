const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ReactionSchema = new Schema({
  reactionId: {},
  reactionBody: {},
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
});

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minimumLength: 1,
      maximumLength: 128,
    },
    createdAt: {
      type: Date,
      defaault: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
  },
  thoughts: {

  },
  friends: {
    
  }
})
