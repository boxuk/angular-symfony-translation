'use strict';

/**
 * @fileoverview
 *
 * Register the `trans` filter.
 */

goog.provide('boxuk.translation.trans.module');

goog.require('boxuk.translation.trans.Filter.factory');
goog.require('boxuk.translation.translator.module');

/**
 * @type {angular.Module}
 */
boxuk.translation.trans.module = angular.module('boxuk.translation.trans', [
        boxuk.translation.translator.module.name
    ])
    .filter('trans', boxuk.translation.trans.Filter.factory);
