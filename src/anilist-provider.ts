import type {
	OAuth2Config,
	OAuthUserConfig,
	UserinfoEndpointHandler,
} from "@auth/core/providers";
import type { AnilistProfile } from "./types.ts";
import type { Awaitable, TokenSet, User } from "@auth/core/types";
import { fetchUserProfile } from "./api.ts";

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
}: OAuthUserConfig<P>) {
	const config: OAuth2Config<P> = {
		type: "oauth",
		id: "anilist",
		name: "Anilist",
		// customFetch: undefined,
		userinfo,
		profile<P>(profile: P, tokens: TokenSet): Awaitable<User> {
			return {};
		},
		options,
	};
	return config;
}
