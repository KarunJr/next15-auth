import { currentUserRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const role = await currentUserRole();
  if (role === UserRole.ADMIN) {
    return new NextResponse("Hello from the server", { status: 200 });
  }

  return new NextResponse("You are not admin.", { status: 403 });
}
