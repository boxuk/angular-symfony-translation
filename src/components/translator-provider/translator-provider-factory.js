'use strict';

goog.provide('boxuk.translation.provider.factory');

/**
 * Angular factory for returning the Translator object.
 *
 * @ngInject
 * @param {angular.window} $window
 * @return {Translator}
 */
var translatorFactory = function($window)
{
    return $window['Translator'];
};

/**
 * @type {translatorFactory}
 */
boxuk.translation.provider.factory = translatorFactory;
