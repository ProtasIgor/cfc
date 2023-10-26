
import lottie from "lottie-web/build/player/lottie";

const lottie1 = lottie.loadAnimation({
    container: document.querySelector('.lottie-1'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: './images/src/animation_lmon3n6x.json'
});

const lottie2 = lottie.loadAnimation({
    container: document.querySelector('.lottie-2'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './images/src/animation_lo6v8qwh.json'
});

const lottie3 = lottie.loadAnimation({
    container: document.querySelector('.lottie-3'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './images/src/NBafdsPXVq.json'
});

setTimeout(() => {
    lottie1.play();
}, 2000);

const form = document.querySelector('.form');

// Создаем новый observer (наблюдатель)
let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {

        if (entry.isIntersecting)
            setTimeout(() => {
                lottie2.play();
            }, 1000);
    });
});

// Прикрепляем его к «наблюдателю»
observer.observe(form);

export default {
    'lottie1': lottie1,
    'lottie2': lottie2,
    'lottie3': lottie3,
};