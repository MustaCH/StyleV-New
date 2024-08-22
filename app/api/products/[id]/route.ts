import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/utils/mongodb";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = await url.pathname.split("/").pop();

    const client = await clientPromise;
    const db = client.db("test");
    const product = await db
      .collection("prods")
      .findOne({ _id: new ObjectId(id) });

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    if (!id) {
      return NextResponse.json(
        { message: "Product ID is required" },
        { status: 400 }
      );
    }

    return NextResponse.json(product);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Unable to fetch product" },
      { status: 500 }
    );
    
  }

  
}