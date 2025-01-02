import { expect, describe, it } from "bun:test";
import AnilistProvider from "./anilist-provider.ts";

describe("Test Anilist NEXT-AUTH Provider", () => {
  it("should be valid anilist next-auth provider config", () => {
    const provider = AnilistProvider({ clientId: "11", clientSecret: "22" });
    expect(provider).toBeDefined();
    const out = {
      clientId: "11",
      clientSecret: "22",
      id: "anilist",
      name: "Anilist",
      type: "oauth",
    };
    expect(provider).toMatchObject(out);
  });
});
