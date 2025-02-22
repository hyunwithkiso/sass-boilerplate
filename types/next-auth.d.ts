import type { DefaultSession } from "next-auth";
import type { AdapterUser } from "@auth/core/adapters";

declare module "next-auth" {
  interface Session {
    user: {
      discordId?: string;
      nickname?: string;
    } & DefaultSession["user"];
  }

  interface User extends AdapterUser {
    discordId?: string;
    nickname?: string;
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    discordId?: string;
    nickname?: string;
  }
}
