'use strict';

export default () => {

    const config = {
        behavior: 'smooth',
        block: 'center'
    }

    const button = document.querySelector('.button__header');

    button.addEventListener('click', (e) => {
        e.preventDefault();

        const form = document.querySelector('.order');

        form.scrollIntoView(config);
    });
}