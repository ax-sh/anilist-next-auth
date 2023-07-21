import { UserinfoEndpointHandler } from 'next-auth/providers/oauth';
import { Awaitable, TokenSet, User } from 'next-auth';
import { AnilistProfile, AnilistProvider } from '../src/index';

describe('anilist-provider', () => {
  const provider = AnilistProvider({
    profile: {} as (
      profile: AnilistProfile,
      tokens: TokenSet
    ) => Awaitable<User>,
    userinfo: {} as UserinfoEndpointHandler,
    clientId: '11',
    clientSecret: '22',
  });
  it('should contain clientId clientSecret', () => {
    expect(provider).toContain({ clientId: '11', clientSecret: '22' });
  });
});
