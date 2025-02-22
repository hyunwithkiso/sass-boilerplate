import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/lib/db/schema";
import DiscordProvider from "next-auth/providers/discord";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      profile: (profile) => {
        return {
          id: profile.id,
          name: profile.username,
          nickname: profile.global_name,
          email: profile.email,
          image: profile.avatar,
          discordId: profile.id,
          emailVerified: null,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.discordId = user.discordId;
        session.user.nickname = user.nickname;
        session.user.id = user.id;
        session.user.email = user.email;
        session.user.image = user.image;
        session.user.name = user.name;
      }
      return session;
    },
  },
});
