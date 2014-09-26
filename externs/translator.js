/**
 * @fileoverview
 *
 * Externs for Bazinga JS Translations bundle.
 *
 * @externs
 */

var Translator = {};

/**
 * @type {String}
 */
Translator.locale;

/**
 * @param {String} key
 * @param {Object} placeholders
 * @param {Number} number
 * @return {String}
 */
Translator.get = function(key, placeholders, number) {};

/**
 * @param {String} id
 * @param {Object} parameters
 * @param {String=} domain
 * @param {String=} locale
 * @return {String}
 */
Translator.trans = function(id, parameters, domain, locale) {};

/**
 * @param {String} id
 * @param {Number} number
 * @param {Object} parameters
 * @param {String=} domain
 * @param {String=} locale
 * @return {String}
 */
Translator.transChoice = function(id, number, parameters, domain, locale) {};
