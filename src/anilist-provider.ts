import type {
  OAuth2Config,
  OAuthUserConfig,
  UserinfoEndpointHandler,
} from "@auth/core/providers";
import type { AnilistProfile, MakeKeysRequired } from "./types.ts";
import type { Awaitable, TokenSet, User } from "@auth/core/types";
import { fetchUserProfile } from "./api.ts";
import { ANILIST_AUTH_ENDPOINT, ANILIST_TOKEN_ENDPOINT } from "./constant.ts";

const userinfo: UserinfoEndpointHandler = {
  async request({ tokens }: { tokens: TokenSet }) {
    const { access_token } = tokens;
    return await fetchUserProfile(access_token as string);
  },
};

export default function AnilistProvider<P extends AnilistProfile>({
  clientSecret,
  clientId,
  ...options
}: MakeKeysRequired<OAuthUserConfig<P>, "clientId" | "clientSecret">) {
  const config: OAuth2Config<P> = {
    type: "oauth",
    id: "anilist",
    name: "Anilist",
    clientId,
    clientSecret,
    // customFetch: undefined,
    userinfo,
    // biome-ignore lint/correctness/noUnusedVariables: keeping tokens as is for future reference
    profile(profile, tokens): Awaitable<User> {
      return {
        email: undefined,
        id: `${profile.id}`,
        image: profile.avatar.large,
        name: profile.name,
      };
    },
    authorization: {
      url: ANILIST_AUTH_ENDPOINT,
      params: {
        scope: "",
        response_type: "code",
        client_id: clientId,
      },
    },
    issuer: "",
    token: ANILIST_TOKEN_ENDPOINT,
  };
  return config;
}
