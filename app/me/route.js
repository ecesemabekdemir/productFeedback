import { Users } from "@/utils/feedbackService";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const user = Users.find((x) => x.id === CurrentUser.id);
    if (!user) {
      return NextResponse.json(
        { message: "Oturum doğrulanamadı" },
        { status: 401 }
      );
    }
    return NextResponse.json(user);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Bir hata oluştu" }, { status: 500 });
  }
}
