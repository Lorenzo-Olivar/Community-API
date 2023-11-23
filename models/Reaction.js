const { Schema, Types } = require('mongoose');
const moment = require ('moment');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: String,
            default: () => moment(new Date()).format('MMMM Do YYYY, [at] h:mm: a'),
        },
    }
);


module.exports = reactionSchema;