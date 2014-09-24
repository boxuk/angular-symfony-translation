'use strict';

goog.provide('boxuk.translation.adapter1x.Service');

/**
 * Adapter for using 2.x API with 1.x.
 *
 * @ngInject
 * @param {boxuk.translation.Translator} Translator
 * @constructor
 */
var TranslatorAdapter1x = function(Translator)
{
    /**
     * @type {boxuk.translation.Translator}
     * @private
     */
    this.Translator_ = Translator;

    /**
     * The default domain used if one is not specified.
     *
     * @private
     * @type {string}
     */
    this.defaultDomain_ = 'messages';

    /**
     * @type {?String}
     */
    this.locale = Translator.locale;
};

/**
 * See:
 * https://github.com/willdurand/BazingaJsTranslationBundle/blob/1.2/Resources/doc/index.md
 *
 * @param {String} key
 * @param {Object=} params
 * @param {String=} domain
 * @return {?String}
 */
TranslatorAdapter1x.prototype.trans = function(key, params, domain)
{
    params = params || {};
    domain = domain || this.defaultDomain_;

    return this.Translator_.get(domain + ':' + key, params);
};

/**
 *
 * @param {String} key
 * @param {Number} count
 * @param {Object=} params
 * @param {String=} domain
 * @return {?String}
 */
TranslatorAdapter1x.prototype.transChoice = function(key, count, params, domain)
{
    params = params || {};
    domain = domain || this.defaultDomain_;

    return this.Translator_.get(
        domain + ':' + key,
        params,
        count
    );
};

/**
 * @type {TranslatorAdapter1x}
 */
boxuk.translation.adapter1x.Service = TranslatorAdapter1x;
