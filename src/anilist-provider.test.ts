import { expect, describe, it } from "bun:test";
import AnilistProvider from "./anilist-provider.ts";
import type { OAuth2Config } from "@auth/core/providers";
import type { AnilistProfile } from "./types.ts";

describe("Test Anilist NEXT-AUTH Provider", () => {
  it("should be valid anilist next-auth provider config", () => {
    const provider = AnilistProvider({ clientId: "11", clientSecret: "22" });
    expect(provider).toBeDefined();
    const out: OAuth2Config<AnilistProfile> = {
      clientId: "11",
      clientSecret: "22",
      id: "anilist",
      name: "Anilist",
      type: "oauth",
      authorization: { url: "https://anilist.co/api/v2/oauth/authorize" },
      token: "https://anilist.co/api/v2/oauth/token",
      style: {
        brandColor: "#3db4f2",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/AniList_logo.svg",
      },
    };
    expect(provider).toMatchObject(out);
  });
});
