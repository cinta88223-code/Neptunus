export enum LinkType {
  SOCIAL = 'SOCIAL',
  WEBSITE = 'WEBSITE',
  CONTACT = 'CONTACT',
  PRODUCT = 'PRODUCT'
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  type: LinkType;
  iconName: string; // Used to map to specific icon components
  highlight?: boolean;
}

export interface Profile {
  name: string;
  handle: string;
  bio: string;
  avatarUrl: string;
  location?: string;
  themeColor: string;
  promotionalBannerUrl?: string;
}