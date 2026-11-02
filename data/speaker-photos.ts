export type SpeakerPhoto = { src: string; position: string };

// Only portraits with a named local asset or a verifiable corporate source are connected.
export const speakerPhotos: Partial<Record<string, SpeakerPhoto>> = {
  'Ibrahim Canliel': { src: '/images/speakers/ibrahim-canliel.webp', position: '50% 28%' },
  'Yerbolat Baisalykov': { src: '/images/speakers/originals/yerbolat-baisalykov.jpeg', position: '52% 24%' },
  'Bella Tormysheva': { src: '/images/speakers/bella-tormysheva.webp', position: '50% 24%' },
  'Yuliya Tsoy': { src: '/images/speakers/originals/yuliya-tsoy.jpeg', position: '50% 28%' },
  'Johan Eidhagen': { src: '/images/speakers/johan-eidhagen.webp', position: '50% 24%' },
  'Yelena Obukhova': { src: '/images/speakers/yelena-obukhova.webp', position: '50% 22%' },
  'Alexandr Neboga': { src: '/images/speakers/alexandr-neboga.webp', position: '100% 20%' },
  'Yevgeniya Ni': { src: '/images/speakers/yevgeniya-ni.webp', position: '50% 24%' },
  'Serik Rys-Uly': { src: '/images/speakers/originals/serik-rys-uly.jpg', position: '57% 19%' },
  'Filippos Siakkas': { src: '/images/speakers/filippos-siakkas.webp', position: '50% 24%' },
  'Piyush Taori': { src: '/images/speakers/piyush-taori.webp', position: '50% 24%' },
  'Keith Wardle': { src: '/images/speakers/originals/keith-wardle.jpeg', position: '50% 28%' },
  'Gerhard Coetzee': { src: '/images/speakers/gerhard-coetzee.webp', position: '50% 24%' },
  'Andy Holt': { src: '/images/speakers/andy-holt.webp', position: '50% 20%' },
  'Damon Bowles': { src: '/images/speakers/damon-bowles.webp', position: '50% 20%' },
  'Goncalo Pires': { src: '/images/speakers/goncalo-pires.webp', position: '50% 24%' },
};
