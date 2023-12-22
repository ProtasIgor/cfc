import lottie from "./lottie";
const buttons = document.querySelectorAll('.form__button');
const form = document.querySelector('.form');
const sendFormData = async () => {
    console.log('data');
    let formData = new FormData(form);
    let summ = formData.get('credit-sum');
    formData.set('credit-sum', summ.replace(/[^0-9]/g, ''));
    let data = JSON.stringify(Object.fromEntries(formData));
    console.log(data);
    await fetch(form.action, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8' //"Content-type: text/plain; charset=UTF-8"
        },
        body: data,
    })
    .then(response => response.json())
    .then(result => {
        lottie.lottie_wait.stop();
        document.querySelector('.form__waiting').classList.add('d-none');
        if(result.status === 'ok') {
            document.querySelector('.form__success').classList.remove('d-none');
            lottie.lottie3.play();
        } else {
            document.querySelector('.form_error').classList.remove('d-none');
            lottie.lottie_err.play();
        }
    })
}

let sumInp = document.querySelector('input[type=text][name=credit-sum]');
sumInp.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
    if('' !== this.value) {
        this.value = this.value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    }
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const widthViewport = 959;
        let Id = button.dataset.stepId;
        const formBox = document.getElementById(Id);

        if (window.innerWidth > 959) {
            setTimeout(() => {
                if (Id === 'step-2') {
                    if (CheckSelectValue() == true) return;

                    formBox.classList.remove('form__box--top-position');

                    setTimeout(() => {
                        formBox.style.display = 'flex';
                        formBox.classList.remove('form__box--disabled');
                    }, 500);
                }
                if (Id === 'step-3') {
                    if (CheckInputValue() == true) return;
                    formBox.classList.remove('form__box--top-position');
                    lottie.lottie_wait.play();
                    setTimeout(() => {
                        setTimeout( async () => {
                            formBox.style.display = 'flex';
                            formBox.classList.remove('form__box--disabled');
                            await sendFormData();
                        }, 1000);
                        
                    }, 500);
                }
            }, 1000);
        }
        else {
            if (Id === 'step-2') {
                if (CheckSelectValue() == true) return;
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
                console.log('step 3');
                if (CheckInputValue() == true) return;

                document.querySelector('#step-2').classList.add('form__box--dis-mob');

                setTimeout( () => {
                    document.querySelector('#step-2').style.display = 'none';

                    formBox.classList.remove('form__box--dis-mob');

                    setTimeout( () => {
                        formBox.classList.remove('form__box--top-position');
                        setTimeout(async () => {
                            formBox.classList.remove('form__box--disabled');
                            lottie.lottie_wait.play();
                            //document.querySelector('.form').submit();
                            await sendFormData();
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

        for (const select of selects) {
            if (select.value == '') {
                isError = true;
                break;
            }
            else {
                isError = false;
            }
        }
        selects.forEach((select) => {
            if (select.value == '') {
                select.nextSibling.classList.add('form__select--reqired');

                setTimeout(() => {
                    select.nextSibling.classList.remove('form__select--reqired');
                }, 3000);
            }
        })

        return isError;
    }

    function CheckInputValue() {
        const inputName = document.querySelector('#form__input--name');
        const messanger = document.getElementsByName('messenger');
        const inputPhone = document.querySelector('#form__input--phone');
        const inputAgreeInfo = document.querySelector('.checkbox');

        let isErrorName = true;
        let isErrorRadio = true;
        let isErrorPhone = true;
        let isErrorCheckbox = true;


        // Имя клиента
        if (/^[а-яА-ЯёЁ\s]{3,32}$/.test(inputName.value.toString()) === false) {

            inputName.previousElementSibling.classList.add('form__input--reqired');
            inputName.classList.add('form__input--reqired');

            setTimeout(() => {
                inputName.previousElementSibling.classList.remove('form__input--reqired');
                inputName.classList.remove('form__input--reqired');
            }, 3000);

            isErrorName = true;
        } else {
            isErrorName = !isErrorName;
        }

        // Radio[] с вариантом ответа на сервере
        for (const radio of messanger) {
            if (radio.checked == true) {
                isErrorRadio = false;
                break;
            }
            else {
                isErrorRadio = true;
            }
        }
        if (isErrorRadio) {
            document.querySelector('.form__out-message').classList.add('form__input--reqired');

            setTimeout(() => {
                document.querySelector('.form__out-message').classList.remove('form__input--reqired');
            }, 3000);

        }

        // Phone
        if (inputPhone.value.length != 19) {
            isErrorPhone = true;

            inputPhone.previousElementSibling.classList.add('form__input--reqired');

            setTimeout(() => {
                inputPhone.previousElementSibling.classList.remove('form__input--reqired');
            }, 3000);
        } else {
            isErrorPhone = !isErrorPhone;
        }

        // CheckBox принятия соглашения
        if (inputAgreeInfo.checked === false) {
            inputAgreeInfo.nextElementSibling.classList.add('form__input--reqired');

            setTimeout(() => {
                inputAgreeInfo.nextElementSibling.classList.remove('form__input--reqired');
            }, 3000);

            isErrorCheckbox = true;
        }
        else {
            isErrorCheckbox = !isErrorCheckbox;
        }

        return (isErrorName || isErrorRadio || isErrorPhone || isErrorCheckbox);
    }
})

