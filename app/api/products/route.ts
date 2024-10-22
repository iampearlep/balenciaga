import { NextResponse } from "next/server";
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'


export async function GET() {
  try {
    const productsRef = collection(db, 'products')
    const snapshot = await getDocs(productsRef)
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
   return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}