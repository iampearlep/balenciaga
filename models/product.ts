import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({
    name: {type: "string", required: true},
    price: {type: "number", required: true},
    description: {type: "string", required: true},
    category: {type: "string", required: true},
    image: {type: "string", required: true},
    size: {type: [String, Number] }
},{
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product;