// accessTokenUrl: "https://anilist.co/api/v2/oauth/token",
// requestTokenUrl: "https://anilist.co/api/v2/oauth/token",
// authorization: "https://anilist.co/api/v2/oauth/authorize",

export const ANILIST_GRAPH_API_ENDPOINT = "https://graphql.anilist.co/";
export const ANILIST_AUTH_ENDPOINT =
  "https://anilist.co/api/v2/oauth/authorize";
export const ANILIST_TOKEN_ENDPOINT = "https://anilist.co/api/v2/oauth/token";

export const ANILIST_USER_GQL = `
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
