import { ProductType } from "@/app/types";
import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { NextRequest } from "next/server";

mercadopago.configure({
  access_token: process.env.NEXT_ACCESS_TOKEN!,
});

const URL = "http://localhost:3000/";

export async function POST(req: NextRequest) {
  try {
    const { cart } = await req.json();

    const items = cart.map((product: ProductType) => ({
      title: product.name,
      unit_price: product.price,
      quantity: 1,
    }));

    const preference: CreatePreferencePayload = {
      items,
      auto_return: "approved",
      back_urls: {
        success: `${URL}`,
        failure: `${URL}`,
      },
      notification_url: `${URL}/api/notify`,
    };

    const response = await mercadopago.preferences.create(preference);

    return new Response(JSON.stringify({ url: response.body.init_point }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: error,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
