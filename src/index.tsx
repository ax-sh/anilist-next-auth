import { OAuthConfig, OAuthUserConfig } from 'next-auth/providers';
import { Awaitable, User } from 'next-auth';
// import { Awaitable, TokenSet, User } from 'next-auth';

export interface AnilistUser {
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

export type AnilistProfile = AnilistUser;
export type AnilistProviderOptions<P> = OAuthUserConfig<P> &
  Required<Pick<OAuthConfig<P>, 'userinfo' | 'profile'>>;

export function AnilistProvider<P extends AnilistProfile>(
  options: AnilistProviderOptions<P>
): OAuthConfig<P> {
  const profile = options.profile
    ? options.profile
    : (profile: P): Awaitable<User> => {
        return {
          id: `${profile.id}`,
          image: profile.avatar.large,
          name: profile.name,
        };
      };
  return {
    id: 'anilist',
    name: 'Anilist',
    type: 'oauth',
    version: '2.0',
    // params: { grant_type: 'authorization_code' },
    accessTokenUrl: 'https://anilist.co/api/v2/oauth/token',
    requestTokenUrl: 'https://anilist.co/api/v2/oauth/token',
    authorization: {
      url: 'https://anilist.co/api/v2/oauth/authorize',
      params: {
        scope: '',
        response_type: 'code',
        client_id: options.clientId,
      },
    },
    token: {
      url: 'https://anilist.co/api/v2/oauth/token',
      params: {},
    },
    userinfo: options.userinfo,
    clientId: options.clientId,
    clientSecret: options.clientSecret,
    profile,
    // profile(profile: P, tokens: TokenSet): Awaitable<User> {
    //   return {
    //     email: undefined,
    //     id: `${profile.id}`,
    //     image: profile.avatar.large,
    //     name: profile.name,
    //   };
    // },
  };
}
