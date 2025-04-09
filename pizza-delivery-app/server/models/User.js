const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        role: {
            type: String,
            enum: ["customer", "admin"],
            default: "customer",
        },
        address: {
            type: String,
        },
        phone: {
            type: String,
        },
        favorites: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'PizzaProduct',
            }
        ],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("User", userSchema);