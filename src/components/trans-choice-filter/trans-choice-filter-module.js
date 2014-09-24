'use strict';

/**
 * @fileoverview
 *
 * Register the `transchoice` filter.
 */

goog.provide('boxuk.translation.transchoice.module');

goog.require('boxuk.translation.transchoice.Filter.factory');
goog.require('boxuk.translation.translator.module');

/**
 * @type {angular.Module}
 */
boxuk.translation.transchoice.module = angular.module(
    'boxuk.translation.transchoice',
    [
        boxuk.translation.translator.module.name
    ])
    .filter('transChoice', boxuk.translation.transchoice.Filter.factory);
