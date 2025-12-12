// app/api/submit-prayer/route.ts
import { NextResponse } from 'next/server';

const WHATSAPP_API_URL = "https://graph.facebook.com/v19.0";

// This is the POST handler for the API route
export async function POST(req: Request) {
  try {
    const { name, phoneNumber, request } = await req.json();

    // 1. Get secrets from environment variables
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
    const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const churchNumber = process.env.CHURCH_WHATSAPP_NUMBER; // The destination number

    if (!accessToken || !phoneId || !churchNumber) {
      return NextResponse.json({ message: "Server configuration error: WhatsApp credentials missing." }, { status: 500 });
    }

    // 2. Format the message content
    const message = `🙏 NEW PRAYER REQUEST 🙏
    
*Name:* ${name}
*Phone:* ${phoneNumber}
---
*Request:*
${request}
    
Please pray for this need.`;

    // 3. Construct the WhatsApp API payload
    const payload = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      // The recipient's number (the church number)
      to: churchNumber, 
      type: "text",
      text: {
        body: message
      }
    };
    
    // 4. Send the request to Meta's API
    const response = await fetch(`${WHATSAPP_API_URL}/${phoneId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok) {
      // Successfully sent message
      return NextResponse.json({ message: "Prayer request sent successfully via WhatsApp.", data }, { status: 200 });
    } else {
      // Failed to send message (e.g., bad token, invalid number)
      console.error("WhatsApp API Error:", data);
      return NextResponse.json({ message: "Failed to send message via WhatsApp.", error: data }, { status: 500 });
    }

  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json({ message: "Internal server error during submission." }, { status: 500 });
  }
}