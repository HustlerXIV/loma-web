import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string | null;
    idToken?: string | null;
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    } & DefaultSession["user"];
  }

  interface JWT {
    accessToken?: string | null;
    idToken?: string | null;
  }

  interface User extends DefaultUser {
    token?: string;
    fullName?: string;
  }
}
