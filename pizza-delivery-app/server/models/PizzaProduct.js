const mongoose = require('mongoose');

const pizzaProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        basePrice: {
            type: Number,
            required: true,
        },
        availableSizes: [
            {
                size: { type: String }, // e.g., Small, Medium, Large, Extra Large
                price: { type: Number }, // Price for that size
            },
        ],
        defaultSauce: {
            type: String, // Default sauce for preset item (optional)
        },
        defaultToppings: [String],
        defaultVeggies: [String],
        defaultCheese: {
            type: String, // Default cheese for preset item (optional)
        },
        isAvailable: {
            type: Boolean,
            default: true,
        },
        rating: {
            type: Number,
            default: 0,
        },
        numberOfPurchases: {
            type: Number,
            default: 0,
        },
        numberOfFavorites: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('PizzaProduct', pizzaProductSchema);