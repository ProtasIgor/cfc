import lottie from "./lottie";

const buttons = document.querySelectorAll('.form__button');


buttons.forEach((button) => {
    button.addEventListener('click', () => {

        const widthViewport = 959;

        let Id = button.dataset.stepId;

        const formBox = document.getElementById(Id);



        if (window.innerWidth > 959) {

            setTimeout(() => {

                if (Id === 'step-2') {
                    //if (CheckSelectValue() == false) return;

                    formBox.classList.remove('form__box--top-position');

                    setTimeout(() => {
                        formBox.style.display = 'flex';
                        formBox.classList.remove('form__box--disabled');
                    }, 500);
                }
                if (Id === 'step-3') {
                    if (CheckInputValue() == false) return;

                    formBox.classList.remove('form__box--top-position');

                    lottie.lottie3.play();

                    setTimeout(() => {
                        formBox.style.display = 'flex';
                        formBox.classList.remove('form__box--disabled');
                    }, 500);
                }

            }, 1000);
        }
        else {

            if (Id === 'step-2') {

                if (CheckSelectValue() == false) return;

                document.querySelector('#step-1').classList.add('form__box--dis-mob');

                setTimeout(() => {
                    document.querySelector('#step-1').style.display = 'none';

                    formBox.classList.remove('form__box--dis-mob');

                    setTimeout(() => {
                        formBox.classList.remove('form__box--top-position');
                        setTimeout(() => {
                            formBox.classList.remove('form__box--disabled');
                        }, 1000);
                    }, 1000);

                }, 1000);
            }
            if (Id === 'step-3') {

                document.querySelector('#step-2').classList.add('form__box--dis-mob');

                setTimeout(() => {
                    document.querySelector('#step-2').style.display = 'none';

                    formBox.classList.remove('form__box--dis-mob');

                    setTimeout(() => {
                        formBox.classList.remove('form__box--top-position');
                        setTimeout(() => {
                            formBox.classList.remove('form__box--disabled');
                            lottie.lottie3.play();
                        }, 1000);
                    }, 1000);

                }, 1000);

            }
        }
    });

    function CheckSelectValue() {
        const selectCreditSum = document.querySelector('#form__select--sum');
        const selectCreditTime = document.querySelector('#form__select--time');
        const selectWorkTime = document.querySelector('#form__select--work');
        const selectIncome = document.querySelector('#form__select--income');

        const selects = [
            selectCreditSum,
            selectCreditTime,
            selectWorkTime,
            selectIncome,
        ]

        let isError = true;

        selects.forEach((select) => {
            if (select.value == '') {
                select.nextSibling.classList.add('form__select--reqired');

                setTimeout(() => {
                    select.nextSibling.classList.remove('form__select--reqired');
                }, 3000);

                isError = false;
            }
        })

        return isError;
    }

    function CheckInputValue() {
        const inputName = document.querySelector('#form__input--name');
        const messager = document.getElementsByName('messenger');
        const inputPhone = document.querySelector('#form__input--phone');
        const inputAgreeInfo = document.querySelector('.checkbox');

        /* const inputs = [
            inputName,
            messager,
            inputPhone,
            inputAgreeInfo,
        ]; */

        let isError = true;

        //console.log('Test' + /[^\d\s]{3,32}/.test(inputName.value.toString()));
        if (/[^\d\s]{3,32}/.test(inputName.value.toString()) === false) {

            inputName.previousElementSibling.classList.add('form__input--reqired');
            inputName.classList.add('form__input--reqired');

            setTimeout(() => {
                inputName.previousElementSibling.classList.remove('form__input--reqired');
                inputName.classList.remove('form__input--reqired');
            }, 3000);

            isError = false;
        }

        messenger.forEach((radio) => {
            if (radio.checked === false) {
                document.querySelector('.form__out-message').classList.add('form__input--reqired');

                setTimeout(() => {
                    document.querySelector('.form__out-message').classList.remove('form__input--reqired');
                }, 3000);

                isError = false;
            }
        });


        if (inputAgreeInfo.checked === false) {
            inputAgreeInfo.nextElementSibling.classList.add('form__input--reqired');

            setTimeout(() => {
                inputAgreeInfo.nextElementSibling.classList.remove('form__input--reqired');
            }, 3000);

            isError = false;
        }

        return isError;



        /* selects.forEach((select) => {
            if (select.value == '') {
                select.nextSibling.classList.add('form__select--reqired');

                setTimeout(() => {
                    select.nextSibling.classList.remove('form__select--reqired');
                }, 3000);

                isError = false;
            }
        })

        return isError; */
    }
})

