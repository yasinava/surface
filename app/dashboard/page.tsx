"use client";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { data, status } = useSession();
  if (data) {
    const user = data?.user as { role: string } | undefined;
    const admin = user?.role === "admin";
    if (admin) router.push("/dashboard/admin");
  }
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [status]);
  if (status === "loading") {
    return <div>loading</div>;
  }

  if (status === "authenticated") {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <button onClick={() => signOut()}>logout</button>
      </div>
    );
  }
};

export default page;
