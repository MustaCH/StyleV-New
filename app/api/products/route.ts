import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/utils/mongodb";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    const client = await clientPromise;
    const db = client.db("test");

    const query = category ? { category } : {};
    const products = await db.collection("prods").find(query).toArray();

    return NextResponse.json(products);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Unable to fetch products" },
      { status: 500 }
    );
  }
}

export async function GetAllProducts(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("test");

    const products = await db
      .collection("prods")
      .find({})
      .sort({ _id: -1 }) 
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