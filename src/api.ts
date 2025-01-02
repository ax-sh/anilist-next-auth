import type { AnilistProfile } from "./types.ts";
import { ANILIST_GRAPH_API_ENDPOINT, ANILIST_USER_GQL } from "./constant.ts";

export async function fetchUserProfile(access_token: string) {
  const url = ANILIST_GRAPH_API_ENDPOINT;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({
      query: ANILIST_USER_GQL,
    }),
  };
  const { data } = await fetch(url, options).then((x) => x.json());
  const profile: AnilistProfile = data.Viewer;
  return profile;
}
