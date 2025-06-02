import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    fullname: {type: String, unique: true},
    email: {type: String, unique: true},
    password: {type: String}
})

const UserModel = mongoose.model('user', UserSchema)

export default UserModel