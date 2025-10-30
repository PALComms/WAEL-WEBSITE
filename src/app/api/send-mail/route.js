import { sendMail } from "@/lib/mail";
import { NextResponse } from "next/server";
// import { sendMail } from "@/lib/mail";

export async function POST(request) {
  try {
    const body = await request.json();
    const { formType, ...formData } = body;
    await sendMail(formType, formData);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
