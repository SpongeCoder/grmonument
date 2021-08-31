'use strict';

/*
    This file can be used as entry point for webpack!
 */

import svg4everybody from 'static/js/plugins/svg4everybody.min.js';
window.$ = window.jQuery = require("jquery");

import 'components/vertical-main-menu/vertical-main-menu.js';
import 'components/header/header.js';
import 'components/main-menu/main-menu.js';
import 'components/develop-monument/develop-monument.js';
import 'components/special-offers/special-offers.js';
import 'components/feedback-btn/feedback-btn.js';

svg4everybody();
