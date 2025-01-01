// accessTokenUrl: "https://anilist.co/api/v2/oauth/token",
// requestTokenUrl: "https://anilist.co/api/v2/oauth/token",
// authorization: "https://anilist.co/api/v2/oauth/authorize",
import type { AnilistProfile } from "./types.ts";
import {GRAPH_API_ENDPOINT} from "./constant.ts";

export async function fetchUserProfile(access_token: string) {
	const url = GRAPH_API_ENDPOINT;
	const query = `
    query AnilistUserProfileQuery {
                  Viewer {
                    id
                    name
                    avatar {
                      large
                    }
                  }
    }
  `;
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${access_token}`,
		},
		body: JSON.stringify({
			query,
		}),
	};
	const { data } = await fetch(url, options).then((x) => x.json());
	const profile: AnilistProfile = data.Viewer;
	return profile;
}
