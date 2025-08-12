import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    fullname: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    cart: [{
        productId: String,
        name: String,
        category: String,
        price: Number,
        quantity: Number,
        image: String
    }],
    orders: [{
        items: [{
            productId: String,
            name: String,
            category: String,
            price: Number,
            quantity: Number,
            image: String
        }],
        total: Number,
        address: String,
        date: { type: Date, default: Date.now }
    }]
})

const UserModel = mongoose.model('user', UserSchema)

export default UserModel