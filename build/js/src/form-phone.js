'use strict';

import Cleave from 'cleave.js';

require('cleave.js/dist/addons/cleave-phone.by');

export default new Cleave('.form__input--phone', {
    /* phone: true,
    phoneRegionCode: 'BY',
    uppercase: true,
    delimiters: ['(', ')', '-', '-', '-'],
    blocks: [4, 2, 3, 3, 2, 2], */
    uppercase: true,
    delimiters: [' (', ') ', '-', '-', '-'],
    blocks: [4, 2, 3, 2, 2]
});