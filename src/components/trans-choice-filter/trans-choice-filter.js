'use strict';

goog.provide('boxuk.translation.transchoice.Filter.factory');

/**
 * @constructor
 * @param {boxuk.translation.translator.Service} TranslationService
 */
var TransChoiceFilter = function(TranslationService)
{
    /**
     * @type {boxuk.translation.translator.Service}
     * @private
     */
    this.translationService_ = TranslationService;

    /**
     * @type {Function}
     */
    this.transChoice = this.transChoice.bind(this);
};

/**
 * @param {String} key
 * @param {Number} count
 * @param {Object=} params
 * @param {String=} domain
 * @return {?String}
 */
TransChoiceFilter.prototype.transChoice = function(key, count, params, domain)
{
    return this.translationService_.transChoice(key, count, params, domain);
};

/**
 * @ngInject
 * @param {boxuk.translation.translator.Service} TranslationService
 * @return {Function}
 */
TransChoiceFilter.factory = function(TranslationService)
{
    var filter = new TransChoiceFilter(TranslationService);

    return filter.transChoice;
};

/**
 * @type {TransChoiceFilter}
 */
boxuk.translation.transchoice.Filter.factory = TransChoiceFilter.factory;
