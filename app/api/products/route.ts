import Product from "@/models/product";
import connectMongoDB from "@/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const product = await req.json();
    console.log("Received data:", product);

    await connectMongoDB();
    console.log("Connected to MongoDB");

    const newProduct = await Product.create(product);
    console.log("Product created:", newProduct);

    return NextResponse.json(
      { message: "Product added successfully", product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const products = await Product.find();
    console.log("Fetched products:", products);
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
