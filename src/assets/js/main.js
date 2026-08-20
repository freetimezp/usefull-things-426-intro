document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(CustomEase, SplitText);

    CustomEase.create("hop", "0.9, 0, 0.1, 1");

    const splitText = (selector, type, className) => {
        return SplitText.create(selector, {
            type,
            [`${type}Class`]: className,
            mask: type,
        });
    };

    const headerSplit = splitText(".header h1", "chars", "char");

    const navSplit = splitText("nav a", "words", "word");

    const footerSplit = splitText(".hero-footer p", "words", "word");

    const counterProgress = document.querySelector(".preloader-counter h1");

    const counterContainer = document.querySelector(".preloader-counter");

    const preloader = document.querySelector(".preloader");

    const counter = {
        value: 0,
    };

    const tl = gsap.timeline();

    /* =========================
       COUNTER
    ========================= */

    tl.to(counter, {
        value: 100,

        duration: 3,

        ease: "power3.out",

        onUpdate: () => {
            counterProgress.textContent = Math.floor(counter.value);
        },

        onComplete: () => {
            const counterSplit = splitText(counterProgress, "chars", "digit");

            gsap.to(counterSplit.chars, {
                x: "-100%",

                duration: 0.75,

                ease: "power3.out",

                stagger: 0.08,

                delay: 0.3,

                onComplete: () => {
                    counterContainer.remove();
                },
            });
        },
    });

    /* =========================
       COUNTER SCALE
    ========================= */

    tl.to(
        counterContainer,
        {
            scale: 1,

            duration: 1,

            ease: "power3.out",
        },
        "<",
    );

    /* =========================
       LOADING BAR
    ========================= */

    tl.to(
        ".progress-bar",
        {
            scaleX: 1,

            duration: 3,

            ease: "power3.out",
        },
        "<",
    );

    /* =========================
       IMAGE DEVELOPMENT
    ========================= */

    tl.to(
        ".hero-bg",
        {
            clipPath: "polygon(35% 35%, 65% 35%, 65% 65%, 35% 65%)",

            duration: 1.5,

            ease: "hop",
        },
        4.5,
    );

    tl.to(
        ".hero-bg img",
        {
            scale: 1.5,

            duration: 1.5,

            ease: "hop",
        },
        "<",
    );

    /* =========================
       IMAGE FULL REVEAL
    ========================= */

    tl.to(
        ".hero-bg",
        {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",

            duration: 2,

            ease: "hop",
        },
        6,
    );

    tl.to(
        ".hero-bg img",
        {
            scale: 1,

            duration: 2,

            ease: "hop",
        },
        6,
    );

    /* =========================
       IMAGE COLOR DEVELOP
    ========================= */

    tl.to(
        ".hero-bg img",
        {
            filter: "grayscale(75%) contrast(1.25) brightness(0.7) sepia(0.15)",

            duration: 2,

            ease: "power2.out",
        },
        6,
    );

    /* =========================
       PROGRESS FINISH
    ========================= */

    tl.to(
        ".progress",
        {
            scaleX: 1,

            duration: 2,

            ease: "hop",
        },
        6,
    );

    /* =========================
       TITLE
    ========================= */

    tl.to(
        ".header h1 .char",
        {
            x: "0%",

            duration: 1.15,

            ease: "power4.out",

            stagger: 0.06,
        },
        7,
    );

    /* =========================
       NAV
    ========================= */

    tl.to(
        "nav a .word",
        {
            y: "0%",

            duration: 1,

            ease: "power4.out",

            stagger: 0.075,
        },
        7.5,
    );

    /* =========================
       FOOTER
    ========================= */

    tl.to(
        ".hero-footer p .word",
        {
            y: "0%",

            duration: 1,

            ease: "power4.out",

            stagger: 0.075,
        },
        7.5,
    );

    /* =========================
       META
    ========================= */

    tl.from(
        ".hero-meta > *",
        {
            opacity: 0,

            y: 15,

            duration: 0.8,

            stagger: 0.1,

            ease: "power3.out",
        },
        7.3,
    );

    /* =========================
       LOCATION
    ========================= */

    tl.from(
        ".location",
        {
            opacity: 0,

            y: 20,

            duration: 1,

            ease: "power3.out",
        },
        7.5,
    );

    /* =========================
       PRELOADER EXIT
    ========================= */

    tl.to(
        preloader,
        {
            opacity: 0,

            duration: 1.2,

            ease: "power2.inOut",

            pointerEvents: "none",
        },
        7.8,
    );
});
