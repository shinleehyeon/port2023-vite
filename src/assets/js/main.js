import { menu } from "./menu.js";
import { port } from "./port.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";

window.addEventListener("load", function () {
    smooth();
    link();
    menu();
    port();
});

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function port() {
    gsap.registerPlugin(ScrollTrigger);
    const horSection = gsap.utils.toArray(".port__item");

    gsap.to(horSection, {
        xPercent: -120 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#port",
            start: "top 56px",
            end: "+=3000",
            pin: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });
}