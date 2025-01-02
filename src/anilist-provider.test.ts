import { expect, describe, it } from "bun:test";
import AnilistProvider from "./anilist-provider.ts";

describe("Test Anilist NEXT-AUTH Provider", () => {
  it("should check", () => {
    const provider = AnilistProvider({});
    expect(provider).toBeDefined();
    expect(provider).toMatchObject(
      expect.objectContaining({
        clientId: "11",
        clientSecret: "22",
        id: "anilist",
        name: "Anilist",
      }),
    );
  });
});
