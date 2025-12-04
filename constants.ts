import { LinkItem, LinkType, Profile } from './types';

export const USER_PROFILE: Profile = {
  name: "NEPTUNUS TOTO",
  handle: "referal Devika88",
  bio: "",
  avatarUrl: "https://neptunusinfo.site/images/upload-Slides-20251030170221.jpg", // Menggunakan gambar banner sebagai profil untuk konsistensi
  location: "Indonesia",
  themeColor: "emerald", // Mengubah tema menjadi hijau sesuai gambar
  promotionalBannerUrl: "https://neptunusinfo.site/images/upload-Slides-20251030170221.jpg"
};

export const LINKS: LinkItem[] = [
  {
    id: '1',
    title: 'DAFTAR SEKARANG',
    url: 'https://neptunusinfo.site/?ref=devika88',
    type: LinkType.WEBSITE,
    iconName: 'globe',
    highlight: true
  }
];