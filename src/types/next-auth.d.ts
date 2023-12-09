import "next-auth"
import "next-auth/jwt"

/** Example on how to extend the built-in session types */
declare module "next-auth" {
  interface Session {
    /** This is an example. You can find me in types/next-auth.d.ts */
    accessToken?: string | undefined
    user: {
      /** The user's postal address. */
      email: string
    } & DefaultSession["user"]
  }
}

/** Example on how to extend the built-in types for JWT */
declare module "next-auth/jwt" {
  interface JWT {
    /** This is an example. You can find me in types/next-auth.d.ts */
    idToken?: string
    accessToken?: string | undefined
  }
}
