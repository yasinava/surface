import React, { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface Props {
  children: ReactNode;
}

export default async function authLayout({ children }: Props) {
  const session = await getServerSession(authOptions);
  if (session) {
    const user = session?.user as { role: string } | undefined;
    const admin = user.role === "admin";
    if (admin) {
      redirect("/dashboard/admin");
    } else {
      redirect("/dashboard");
    }
  }
  return <>{children}</>;
}
