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
