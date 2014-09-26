'use strict';

goog.provide('boxuk.translation.module');

goog.require('boxuk.translation.trans.module');
goog.require('boxuk.translation.transchoice.module');
goog.require('boxuk.translation.translator.module');

/**
 * @type {angular.Module}
 */
boxuk.translation.module = angular.module('boxuk.translation', [
    boxuk.translation.trans.module.name,
    boxuk.translation.transchoice.module.name,
    boxuk.translation.translator.module.name
]);
