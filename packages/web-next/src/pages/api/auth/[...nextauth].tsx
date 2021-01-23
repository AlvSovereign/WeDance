import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'

const options: InitOptions = {
  callbacks: {
    signIn: async () => {
      console.log('signedIn')
    },
  },
  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
  events: {
    error: async (message) => {
      console.error('message: ', message)
    },
    signIn: async (message) => {
      console.log('message: ', 'YYEEESS')
      ;('/* on successful sign in */')
    },
  },
  jwt: {
    encryption: true,
    secret: process.env.NEXT_AUTH_SECRET,
  },
  // pages: {
  //   signIn: '/music/signin',
  //   signOut: '/music/signout',
  // },
  // Configure one or more authentication providers
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
}

export default (req, res) => NextAuth(req, res, options)
