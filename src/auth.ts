import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JSON_HEADER } from "./lib/Constants/api.constant";
export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials", // This is the name that will be displayed on the sign-in form (e.g. "Sign in with...")
      credentials: {
        email: {},
        password: {},
      }, // The name of the form fields for the credentials provider,
      authorize: async (credentials) => {
        const response = await fetch(`${process.env.API}/auth/sign`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            ...JSON_HEADER,
          },
        });
        const payload = await response.json();
        console.log("payload", payload);

        return payload;
      },
    }),
  ], // !Add ways for a users to sign in
  callbacks: {
    //* Jwt take data br ready to encrypt
    jwt: ({ token, user }) => {
      //* user is return data from login
      // *put data i want to encrypt in token
      token.name = user.name;
      return token;
    },
    //* session data want to show not senstive it might used in client side
    session: ({ session, token }) => {
      session.user!.name = token.name;
      return session;
    },
  },
};
