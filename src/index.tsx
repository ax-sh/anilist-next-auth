import { OAuthConfig, OAuthUserConfig } from 'next-auth/providers';

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** ISO 3166-1 alpha-2 country code */
  CountryCode: { input: any; output: any };
  /** 8 digit long date integer (YYYYMMDD). Unknown dates represented by 0. E.g. 2016: 20160000, May 1976: 19760500 */
  FuzzyDateInt: { input: any; output: any };
  Json: { input: any; output: any };
};

/** A user's avatars */
export type UserAvatar = {
  __typename?: 'UserAvatar';
  /** The avatar of user at its largest size */
  large?: Maybe<Scalars['String']['output']>;
  /** The avatar of user at medium size */
  medium?: Maybe<Scalars['String']['output']>;
};

/** A user's list options */
export type MediaListOptions = {
  __typename?: 'MediaListOptions';
  /** The user's anime list options */
  // animeList?: Maybe<MediaListTypeOptions>;
  /** The user's manga list options */
  // mangaList?: Maybe<MediaListTypeOptions>;
  /** The default order list rows should be displayed in */
  rowOrder?: Maybe<Scalars['String']['output']>;
  /** The score format the user is using for media lists */
  // scoreFormat?: Maybe<ScoreFormat>;
  /**
   * The list theme options for both lists
   * @deprecated No longer used
   */
  sharedTheme?: Maybe<Scalars['Json']['output']>;
  /**
   * If the shared theme should be used instead of the individual list themes
   * @deprecated No longer used
   */
  sharedThemeEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated No longer used */
  useLegacyLists?: Maybe<Scalars['Boolean']['output']>;
};

/** User's favourite anime, manga, characters, staff & studios */
export type Favourites = {
  __typename?: 'Favourites';
  /** Favourite anime */
  // anime?: Maybe<MediaConnection>;
  /** Favourite characters */
  // characters?: Maybe<CharacterConnection>;
  /** Favourite manga */
  // manga?: Maybe<MediaConnection>;
  /** Favourite staff */
  // staff?: Maybe<StaffConnection>;
  /** Favourite studios */
  // studios?: Maybe<StudioConnection>;
};

export type User = {
  __typename?: 'User';
  /** The bio written by user (Markdown) */
  about?: Maybe<Scalars['String']['output']>;
  /** The user's avatar images */
  avatar?: Maybe<UserAvatar>;
  /** The user's banner images */
  bannerImage?: Maybe<Scalars['String']['output']>;
  bans?: Maybe<Scalars['Json']['output']>;
  /** When the user's account was created. (Does not exist for accounts created before 2020) */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** Custom donation badge text */
  donatorBadge?: Maybe<Scalars['String']['output']>;
  /** The donation tier of the user */
  donatorTier?: Maybe<Scalars['Int']['output']>;
  /** The users favourites */
  favourites?: Maybe<Favourites>;
  /** The id of the user */
  id: Scalars['Int']['output'];
  /** If the user is blocked by the authenticated user */
  isBlocked?: Maybe<Scalars['Boolean']['output']>;
  /** If this user if following the authenticated user */
  isFollower?: Maybe<Scalars['Boolean']['output']>;
  /** If the authenticated user if following this user */
  isFollowing?: Maybe<Scalars['Boolean']['output']>;
  /** The user's media list options */
  mediaListOptions?: Maybe<MediaListOptions>;
  /** The user's moderator roles if they are a site moderator */
  // moderatorRoles?: Maybe<Array<Maybe<ModRole>>>;
  /**
   * If the user is a moderator or data moderator
   * @deprecated Deprecated. Replaced with moderatorRoles field.
   */
  moderatorStatus?: Maybe<Scalars['String']['output']>;
  /** The name of the user */
  name: Scalars['String']['output'];
  /** The user's general options */
  // options?: Maybe<UserOptions>;
  /** The user's previously used names. */
  // previousNames?: Maybe<Array<Maybe<UserPreviousName>>>;
  /** The url for the user page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The users anime & manga list statistics */
  // statistics?: Maybe<UserStatisticTypes>;
  /**
   * The user's statistics
   * @deprecated Deprecated. Replaced with statistics field.
   */
  // stats?: Maybe<UserStats>;
  /** The number of unread notifications the user has */
  unreadNotificationCount?: Maybe<Scalars['Int']['output']>;
  /** When the user's data was last updated */
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

// ------- **** --------

export type AnilistProfile = User; // or Record<string, object>;
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
    profile: options.profile,
    clientId: options.clientId,
    clientSecret: options.clientSecret,
  };
}
