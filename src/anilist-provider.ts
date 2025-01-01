import type {
    OAuth2Config,
    OAuthUserConfig,
    UserinfoEndpointHandler,
} from "@auth/core/providers";
import type { Awaitable, TokenSet, User } from "@auth/core/types";

export interface AnilistProfile {
    id: number;
    isBlocked: boolean;
    siteUrl: string;
    name: string;
    previousNames: unknown[];
    createdAt: number;
    updatedAt: number;
    avatar: {
        large: string;
    };
}
export function AnilistProvider<P extends AnilistProfile>({
                                                              clientSecret,
                                                              clientId,
                                                              ...options
                                                          }: OAuthUserConfig<P>) {


}