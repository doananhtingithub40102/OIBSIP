const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        items: [
            {
                name: { type: String, required: true },
                image: { type: String },
                size: { type: String, required: true }, // e.g., Small, Medium, Large, Extra Large
                cheese: { type: String }, // e.g., Mozzarella, Cheddar, Parmesan, Vegan Cheese
                sauce: { type: String },
                veggies: [{ type: String }],
                toppings: [{ type: String }],
                quantity: { type: Number, default: 1 },
                price: { type: Number, required: true },
            },
        ],
        totalPrice: {
            type: Number,
            required: true,
        },
        paymentStatus: {
            type: String,
            enum: ['pending', 'paid', 'failed'],
            default: 'pending',
        },
        paymentId: {
            type: String,
        },
        deliveryAddress: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['preparing', 'out for delivery', 'delivered'],
            default: 'preparing',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Order', orderSchema);