import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/utils/mongodb";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    const client = await clientPromise;
    const db = client.db("test");

    // Check if a category is provided, if not, return all products
    const query = category ? { category } : {};
    const products = await db
      .collection("prods")
      .find(query)
      .sort({ _id: -1 }) // Sort by newest first
      .toArray();

    return NextResponse.json(products);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Unable to fetch products" },
      { status: 500 }
    );
  }
}
