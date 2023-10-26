import lottie from "./lottie";

const buttons = document.querySelectorAll('.form__button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let Id = button.dataset.stepId;
        const formBox = document.getElementById(Id);

        formBox.classList.remove('form__box--top-position');



        setTimeout(() => {
            /* formBox.classList.remove('form__box--disabled'); */
            if (Id === 'step-2') {
                formBox.style.display = 'flex';
                formBox.classList.remove('form__box--disabled');
                
                lottie.lottie3.play();
            }
            if (Id === 'step-3') {
                formBox.classList.remove('form__box--disabled');
                lottie.lottie3.play();
            }
        }, 1000);
    });
})