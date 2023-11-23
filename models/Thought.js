const { Schema, model } = require('mongoose');
const moment = require ('moment');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        maxLength: 280,
        minLength: 1,
    },
    createdAt: {
        type: String,
        default: () => moment(new Date()).format('MMMM Do YYYY, [at] h:mm: a'),
    },
    username: {
        type: String,
        required: true,
    },
    // reactions: [{ type: Schema.Types.ObjectId, ref: 'reactionSchema' }],
  },
  
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  //   id: false,
  // }
);

// Create a virtual property `friendCount` that gets the amount of friends per user
// thoughtSchema.virtual('reactionCount').get(function () {
//   return this.reactions.length;
// });


// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;