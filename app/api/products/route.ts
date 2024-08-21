import Product from "@/models/product";
import connectMongoDB from "@/utils/mongodb";
import { NextResponse } from "next/server";


export default async function POST(req: Request){
    const {name, description, price, category, image, size, } =await req.json();
        await connectMongoDB()
        await Product.create({name: name, description: description, price:price, category:category, image:image, size:size});
        return NextResponse.json({ message: "Product added successfully" }, {status: 201})
}
