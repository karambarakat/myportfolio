import GsapImage from "~/routes/projects/(page)/GSAP_Landing_Page/img.png";
import GulpImage from "~/routes/projects/(page)/Gulp_Handlebars_Express/img.webp";
import WebVitalImage from "~/routes/projects/(page)/Web_Metric_And_Vital/displayPicture.png";

export const from_slug = (slug: string) => {
  return {
    Gulp_Handlebars_Express: GulpImage,
    GSAP_Landing_Page: GsapImage,
    Web_Metric_And_Vital: WebVitalImage,
  }[slug];
};
