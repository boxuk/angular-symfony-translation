'use strict';

goog.provide('boxuk.translation.trans.Filter.factory');

/**
 * @constructor
 * @param {boxuk.translation.translator.Service} TranslationService
 */
var TransFilter = function(TranslationService)
{
    /**
     * @type {boxuk.translation.translator.Service}
     * @private
     */
    this.translationService_ = TranslationService;

    /**
     * @type {Function}
     */
    this.trans = this.trans.bind(this);
};

/**
 * @param {String} key
 * @param {Object=} params
 * @param {String=} domain
 * @return {?String}
 */
TransFilter.prototype.trans = function(key, params, domain)
{
    return this.translationService_.trans(key, params, domain);
};

/**
 * @ngInject
 * @param {boxuk.translation.translator.Service} TranslationService
 * @return {Function}
 */
TransFilter.factory = function(TranslationService)
{
    var filter = new TransFilter(TranslationService);

    return filter.trans;
};

/**
 * @type {TransFilter}
 */
boxuk.translation.trans.Filter.factory = TransFilter.factory;
