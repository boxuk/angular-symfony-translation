'use strict';

goog.provide('boxuk.translation.provider.module');

goog.require('boxuk.translation.provider.factory');

/**
 * @type {angular.Module}
 */
boxuk.translation.provider.module = angular.module(
    'boxuk.translation.provider',
    []
)
    .factory('Translator', boxuk.translation.provider.factory);
