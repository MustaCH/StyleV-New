import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/utils/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("test"); // Replace with your database name
    const products = await db.collection("prods").find({}).toArray();
    return NextResponse.json(products);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Unable to fetch products" },
      { status: 500 }
    );
  }
}
