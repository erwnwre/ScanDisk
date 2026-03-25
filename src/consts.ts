export const SITE = {
  name: "ScanDisk",
  description:
    "Webzine musique internet-core, faux relief cheap, palette acide et rubriques éditoriales.",
  author: "ScanDisk",
  playlistId: "PLB3LuugcEjmZTjv2RNPSelGbQJWTefiOn",
  playlistUrl:
    "https://music.youtube.com/playlist?list=PLB3LuugcEjmZTjv2RNPSelGbQJWTefiOn&si=-oW6R3hzbhN3Pu-p",
};

export const SECTIONS = {
  chronik: {
    label: "Chronik",
    description:
      "Chroniques notées sur 5, image à la une, cartes en mosaïque et lectures rapides.",
    accent: "yellow",
    icon: "★",
  },
  inside: {
    label: "Inside",
    description:
      "Formats longs, coulisses, reportages, enquêtes et papiers illustrés.",
    accent: "cyan",
    icon: "⌘",
  },
  itw: {
    label: "ITW",
    description:
      "Interviews, portraits, échanges et récits d’artistes ou de scènes.",
    accent: "orange",
    icon: "✦",
  },
  freescan: {
    label: "FreeScan",
    description:
      "Billets, éditos, prises de position et textes plus personnels.",
    accent: "cream",
    icon: "▣",
  },
} as const;

export type SectionKey = keyof typeof SECTIONS;
