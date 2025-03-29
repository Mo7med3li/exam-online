import { NextAuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JSON_HEADER } from "./lib/Constants/api.constant";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
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
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: {
            ...JSON_HEADER,
          },
        });
        const payload: APIResponse<LoginResponse> = await response.json();
        console.log("payload", payload);
        if ("code" in payload) {
          throw new Error(payload.message);
        }

        return {
          id: payload.user._id,
          token: payload.token,
          user: payload.user,
        };
      },
    }),
  ], // !Add ways for a users to sign in
  callbacks: {
    //* Jwt take data br ready to encrypt
    jwt: ({ token, user }) => {
      //* user is return data from login
      // *put data i want to encrypt in token
      if (user) {
        token.token = user.token; // token is return from backend
        token.user = user.user;
      }
      return token;
    },
    //* session data want to show not senstive it might used in client side
    session: ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
};
