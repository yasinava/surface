import React, { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import LogoutButton from "@/components/LogoutButton/LogoutButton";

interface Props {
  children: ReactNode;
}

export default async function AdminLayout({ children }: Props) {
  const session = await getServerSession(authOptions);
  const user = session?.user as { role: string } | undefined;
  const admin = user?.role === "admin";
  if (!admin) redirect("/dashboard");

  return (
    <section className="admin-layout">
      <div className="admin-layout-links">
        <Link href="/dashboard/admin">Store</Link>
        <Link href="/dashboard/admin/add-product">AddProduct</Link>
        <Link href="/dashboard/admin/add-accessories">AddAccessories</Link>
        <Link href="/dashboard/admin/comments">Comments</Link>
        <Link href="/dashboard/admin/completed-orders">CompletedOrders</Link>
        <Link href="/dashboard/admin/orders">Orders</Link>
        <Link href="/dashboard/admin/inbox">Inbox</Link>
        <LogoutButton />
      </div>
      <div className="admin-layout-children">{children}</div>
    </section>
  );
}
