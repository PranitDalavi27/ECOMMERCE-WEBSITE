const mongoose = require("mongoose");
const { stringify } = require("querystring");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true

    },
    price: {
        type: Number,
        required: true,
        maxLength: [8, "Price cannot exceed 8 characters"]

    },
    ratings: {
        type: Number,
        default: 0
    },
    image: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }

        }
    ],
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        maxLength: [4, "stock cannot exceed 4 characters"],
        default: 1

    },
    numberOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [

        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "user",
                require: true,
            },

            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Product", productSchema);