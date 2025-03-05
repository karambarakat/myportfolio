import { BsLinkedin, BsGithub } from "@qwikest/icons/bootstrap";
import { SiFreelancer } from "@qwikest/icons/simpleicons";
import { TbMailFilled } from "@qwikest/icons/tablericons";

export const links = [
    {
        text: "Email" as const,
        href: "mailto:hi@karam.page",
        Img: TbMailFilled,
    },
    {
        text: "Resume" as const,
        href: "https://docs.google.com/document/d/183Y16BAD9LEBbe_eKvB0JbRpgaxE9xZ0VXy5f31Wews/",
    },
    {
        text: "Github" as const,
        href: "https://github.com/karambarakat/myportfolio",
        Img: BsGithub,
    },
    {
        text: "Freelancer" as const,
        href: "https://www.freelancer.com/u/KennethBarakat",
        Img: SiFreelancer,
    },
    {
        text: "LinkedIn" as const,
        href: "https://www.linkedin.com/in/kenn-barakat-775931262/",
        Img: BsLinkedin,
    },
];

