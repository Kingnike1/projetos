document.addEventListener("DOMContentLoaded", () => {
    
    const controller = new ScrollMagic.Controller();

    // Animação de texto em cada seção
    document.querySelectorAll(".content h2").forEach((heading) => {
        new ScrollMagic.Scene({
            triggerElement: heading,
            triggerHook: 0.8,
            reverse: false,
        })
        .setTween(
            gsap.from(heading, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
            })
        )
        .addTo(controller);
    });

    // Efeito Parallax avançado nas imagens de fundo
    document.querySelectorAll(".parallax").forEach((parallax) => {
        new ScrollMagic.Scene({
            triggerElement: parallax,
            triggerHook: 1,
            duration: "200%",
        })
        .setTween(
            gsap.to(parallax, {
                backgroundPosition: "50% 0%",
                ease: "power1.out",
            })
        )
        .addTo(controller);
    });

    // Animação para os parágrafos
    document.querySelectorAll(".content p").forEach((paragraph) => {
        new ScrollMagic.Scene({
            triggerElement: paragraph,
            triggerHook: 0.9,
            reverse: false,
        })
        .setTween(
            gsap.from(paragraph, {
                opacity: 0,
                x: -100,
                duration: 1.2,
                ease: "power2.inOut",
            })
        )
        .addTo(controller);
    });

    // Animação para imagens
    document.querySelectorAll(".image").forEach((img) => {
        new ScrollMagic.Scene({
            triggerElement: img,
            triggerHook: 0.9,
            reverse: false,
        })
        .setClassToggle(img, "visible")
        .addTo(controller);
    });

    // Animação para botões
    document.querySelectorAll("button").forEach((button) => {
        new ScrollMagic.Scene({
            triggerElement: button,
            triggerHook: 0.9,
            reverse: false,
        })
        .setTween(
            gsap.from(button, {
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
                ease: "power1.out",
            })
        )
        .addTo(controller);
    });

    // Scroll suave para debugging (opcional)
    controller.scrollTo((newPos) => {
        gsap.to(window, {
            scrollTo: { y: newPos, autoKill: false },
            duration: 0.8,
            ease: "power2.inOut",
        });
    });
});
