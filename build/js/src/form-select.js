'use strict';

import NiceSelect from "./../../../node_modules/nice-select2/dist/js/nice-select2";

import "nice-select2/dist/css/nice-select2.css";

new NiceSelect(document.getElementById('form__select--sum'), {});
new NiceSelect(document.getElementById('form__select--time'), {});
new NiceSelect(document.getElementById('form__select--work'), {});
new NiceSelect(document.getElementById('form__select--smaller'), {});