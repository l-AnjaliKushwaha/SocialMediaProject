import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
            userId: { type: Schema.Types.ObjectId, ref: "Users"},
            postId: { type: Schema.Types.ObjectId, ref: "Posts"},
            comment: { type: String, required: true },
            from: { type: String, required: true},
            replies: [
                        {
                                    rid: { type: mongoose.Schema.Types.ObjectId},
                                    userId: { type: Schema.Types.ObjectId, ref: "Users"},
                                    from: { type: String },
                                    replyAt: { type: String },
                                    comment: { tyrp: String },
                                    created_At: { type: Date, default: Date.now()},
                                    updated_At: { type: Date, default: Date.now()},
                                    likes: [{ type: String }],
                        },
            ],
});