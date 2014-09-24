'use strict';

goog.provide('boxuk.translation.translator.module');

goog.require('boxuk.translation.adapter1x.module');
goog.require('boxuk.translation.provider.module');
goog.require('boxuk.translation.translator.Service');

/**
 * @type {angular.Module}
 */
boxuk.translation.translator.module = angular.module(
    'boxuk.translation.translator',
    [
        boxuk.translation.adapter1x.module.name,
        boxuk.translation.provider.module.name
    ]
)
    .service('TranslationService', boxuk.translation.translator.Service);
