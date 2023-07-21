import { OAuthConfig, OAuthUserConfig } from 'next-auth/providers';

export type AnilistProfile = Record<string, object>;
export type AnilistProviderOptions<P> = OAuthUserConfig<P> &
  Required<Pick<OAuthConfig<P>, 'userinfo' | 'profile'>>;

export function AnilistProvider<P extends AnilistProfile>(
  options: AnilistProviderOptions<P>
): OAuthConfig<P> {
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
    profile: options?.profile,
    clientId: options.clientId,
    clientSecret: options.clientSecret,
  };
}
