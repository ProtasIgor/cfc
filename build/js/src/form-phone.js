'use strict';

import IMask from 'imask';

/* import Cleave from 'cleave.js';

require('cleave.js/dist/addons/cleave-phone.by');

export default new Cleave('.form__input--phone', {
    prefix: '+375',
    uppercase: true,
    delimiters: [' (', ') ', '-', '-', '-'],
    blocks: [4, 2, 3, 2, 2]
}); */

IMask(
    document.querySelector('.form__input--phone'),
    {
        mask: '{+375} (00) 000-00-00'
    }
)