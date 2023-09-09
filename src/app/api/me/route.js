import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "yinpiao wongtrakunmeka",
    studentId: "650612103",
  });
};
