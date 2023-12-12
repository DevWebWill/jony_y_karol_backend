import mongoose from "mongoose";

const GuestSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        attendance: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const Guest = mongoose.model('Guest', GuestSchema);
export default Guest;