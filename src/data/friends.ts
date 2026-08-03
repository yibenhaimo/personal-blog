export type FriendProfile = {
  name: string;
  url: string;
  image: string;
  imageFit?: 'cover' | 'contain';
  description?: string;
};

/**
 * Add friend sites here. Images can be local paths under public/ or absolute URLs.
 */
export const friends: FriendProfile[] = [
  {
    name: 'Herenkang',
    url: 'https://youyi-blog.pages.dev/',
    image: '/friends/herenkang.png',
    imageFit: 'contain',
  },
];
