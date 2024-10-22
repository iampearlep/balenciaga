import { NextResponse } from "next/server";
import { db } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const productRef = doc(db, 'products', params.id);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    const product = {
      id: productSnap.id,
      ...productSnap.data()
    };

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}