import { Users } from "@/utils/feedbackService";
import { NextResponse } from "next/server";
export async function POST(request) {
  const { email, password } = await request.json();

  const user = Users.find((x) => x.email === email);
  if (!user) {
    return NextResponse.json(
      { message: "E-posta adresi veya şifre yanlış" },
      { status: 400 }
    );
  }
  const isMatch = user.password === password;
  if (!isMatch) {
    return NextResponse.json(
      { message: "E-posta adresi veya şifre yanlış" },
      { status: 400 }
    );
  }

  const response = NextResponse.json({
    success: true,
    isAuth: true,
    userId: user.id,
  });

  response.cookies.set("isAuth", "true");
  response.cookies.set("userId", user.id);

  return response;
}
