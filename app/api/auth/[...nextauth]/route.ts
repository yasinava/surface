import UserModel from "@/models/users";
import connect from "@/utils/db";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials: Record<string, string>) {
        await connect();
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user = await UserModel.findOne({ email: email });
        console.log(user);
        if (!user) throw new Error("invalid your email!");
        const isPasswordCorrect = bcrypt.compareSync(password, user?.password);
        console.log(isPasswordCorrect);
        if (!isPasswordCorrect) throw new Error("invalid your password!");
        return user;
      },
    }),
  ],
  callbacks: {
    jwt(params: any) {
      if (params.user?.role) {
        params.token.role = params.user.role;
        params.token.id = params.user.id;
      }
      return params.token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as { id: string }).id = token.id as string;
        (session.user as { role: string }).role = token.role as string;
      }
      return session;
    },
    // redirect() {
    //   return "/dashboard";
    // },
  },
  pages: {
    error: "/dashboard/login",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
