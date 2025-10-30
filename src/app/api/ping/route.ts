import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongo";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({
      ok: true,
      message: "MongoDB connected successfully ✅",
    });
  } catch (error) {
    console.error("DB Connection Error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to connect to database ❌" },
      { status: 500 }
    );
  }
}
