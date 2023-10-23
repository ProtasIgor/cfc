'use strict';

import Cleave from 'cleave.js';

console.log(document.querySelector('.form__input--phone'));

export default cleave = new Cleave('.form__input--phone', {
    phone: true,
    phoneRegionCode: 'BY'
});