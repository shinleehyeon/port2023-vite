// main.js
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function port() {
    const horSection = gsap.utils.toArray(".port__item");

    gsap.to(horSection, {
        xPercent: -100 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#port",
            start: "top top",
            end: () => "+=" + document.querySelector("#port").offsetWidth,
            pin: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });
}

// 실행
port();
