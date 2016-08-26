'use strict';

const { NativeModules } = require('react-native');
const { RNI18n } = NativeModules;
let I18n = require('./vendor/i18n');

I18n.locale = (RNI18n && typeof RNI18n !== 'undefined') ? RNI18n.locale.replace(/_/, '-') : '';
if (typeof navigator !== 'undefined') {
  const tries = [
    'language',
    'browserLanguage',
    'systemLanguage',
    'userLanguage',
  ];
  for (const i in tries) {
    if (navigator[tries[i]]) {
      I18n.locale = navigator[tries[i]];
      break;
    }
  }
}

module.exports = I18n;
