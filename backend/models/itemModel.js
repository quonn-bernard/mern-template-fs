import mongoose from 'mongoose'

const itemSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a text value']
    },
    description: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true,
})

export default mongoose.model('Item', itemSchema)