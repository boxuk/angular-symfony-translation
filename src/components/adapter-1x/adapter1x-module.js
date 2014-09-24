'use strict';

goog.provide('boxuk.translation.adapter1x.module');

goog.require('boxuk.translation.adapter1x.Service');
goog.require('boxuk.translation.provider.module');

/**
 * @type {angular.Module}
 */
boxuk.translation.adapter1x.module = angular.module(
    'boxuk.translation.adapter1x',
    [boxuk.translation.provider.module.name]
)
.service('TranslatorAdapter1x', boxuk.translation.adapter1x.Service);
