import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { client, db } = await connectToDatabase();

        const usersCollection = db.collection("users");

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          throw new Error("User Not Found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Password is invalid!");
        }

        return { email: user.email, name: user.name };
      },
    }),
  ],
});
