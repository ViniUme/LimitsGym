import Auth0Provider from "next-auth/providers/auth0";
import NextAuth from "next-auth"

const options = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER
    })
  ]
};

export default (req, res) => NextAuth(req, res, options);