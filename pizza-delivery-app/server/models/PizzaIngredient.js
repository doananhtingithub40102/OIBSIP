const mongoose = require('mongoose');

const pizzaIngredientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        type: {
            type: String,
            required: true,
            enum: ['sauce', 'cheese', 'topping', 'veggie'],
        },
        image: {
            type: String, // optional: if you plan to show images for ingredients
        },
        isAvailable: {
            type: Boolean,
            default: true,
        },
        extraPrice: {
            type: Number,
            default: 0, // in case some ingredients cost more
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('PizzaIngredient', pizzaIngredientSchema);