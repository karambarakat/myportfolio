import GsapImage from "../../public/portfolio_item_1.png";
import GulpImage from "../../public/portfolio_item_2.webp";

export const include_in_build = (src: string) => {
  return { [GulpImage]: GulpImage, [GsapImage]: GsapImage }[src] || src;
};

export const from_slug = (slug: string) => {
  return {
    Tracker_Web_App: GulpImage,
  }[slug];
};
