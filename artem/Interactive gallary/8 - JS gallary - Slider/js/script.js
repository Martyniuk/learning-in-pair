new Swiper(".swiper-container", { // const mySwiper = new Swiper ... -->  const is necessaty in case of multiple swipers and further manipulations with them.
    speed: 400,
    spaceBetween: 100,
    effect: "slide",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

//navigation physics

const { easing, tween, styler } = window.popmotion;

const divStyler = styler(document.querySelector('.brand'));

tween({
    from: 0,
    to: { x: 100, rotate: 360, x: 100 },
    duration: 1000,
    ease: easing.backOut,
    flip: Infinity,
    ///elapsed: 2000,
    // loop: 5,
    yoyo: 5
}).start(divStyler.set);
