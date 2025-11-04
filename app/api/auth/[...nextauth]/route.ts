import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      checks: ["pkce", "state"],
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          }
        );
        if (!res.ok) return null;

        const user = await res.json();
        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.provider === "credentials" && user) {
        token.accessToken = (user as any).token;
        return token;
      }

      if (account?.provider === "google" && account.id_token) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/google-login`,
            {
              method: "POST",
              headers: { Authorization: `Bearer ${account.id_token}` },
            }
          );
          if (!res.ok) throw new Error("Google exchange failed");
          const data = await res.json();
          token.accessToken = data.token;
        } catch (e) {
          throw e instanceof Error ? e : new Error("Google exchange failed");
        }
      }

      return token;
    },

    async session({ session, token }) {
      (session as any).accessToken = token.accessToken ?? "";
      return session;
    },
  },
});

export { handler as GET, handler as POST };
