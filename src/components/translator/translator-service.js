'use strict';

goog.provide('boxuk.translation.translator.Service');

/**
 * @ngInject
 * @param {boxuk.translation.translator.factory} Translator
 * @param {boxuk.translation.adapter1x.Service} TranslatorAdapter1x
 * @constructor
 */
var TranslatorService = function(Translator, TranslatorAdapter1x)
{
    /**
     * The external translator that is exposed by
     * the Bazinga JS Translation Symfony2 bundle.
     *
     * @type {angular.window}
     * @private
     */
    this.Translator_ = Translator;

    /**
     * Adapter for using the 2.x API with 1.x bundle.
     *
     * @type {boxuk.translation.adapter1x.Service}
     * @private
     */
    this.TranslatorAdapter1x_ = TranslatorAdapter1x;

    /**
     * @return {Object}
     */
    return this.getTranslator_();
};

/**
 * Check whether the exposed translator is version 1.x.
 *
 * @return {boolean}
 * @private
 */
TranslatorService.prototype.is1x_ = function()
{
    return this.Translator_.hasOwnProperty('get');
};

/**
 * Get the appropriate translator, either by exposing the external
 * translator directly (if it's version 2.x) or by returning an
 * adapter that allows the 2.x API to be used.
 *
 * @return {Object}
 * @private
 */
TranslatorService.prototype.getTranslator_ = function()
{
    if (this.is1x_()) {
        return this.TranslatorAdapter1x_;
    }

    return this.Translator_;
};

/**
 * @type {TranslatorService}
 */
boxuk.translation.translator.Service = TranslatorService;
