'use strict';

import NiceSelect from "./../../../node_modules/nice-select2/dist/js/nice-select2";

import "nice-select2/dist/css/nice-select2.css";

new NiceSelect(document.getElementById('form__select--sum'), { placeholder: 'Выбрать...', });
new NiceSelect(document.getElementById('form__select--time'), { placeholder: 'select' });
new NiceSelect(document.getElementById('form__select--work'), { /* placeholder: 'Выбрать...', */ });
new NiceSelect(document.getElementById('form__select--smaller'), { /* placeholder: 'Выбрать...', */ });