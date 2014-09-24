'use strict';

goog.require('boxuk.translation.trans.module');
goog.require('boxuk.translation.transchoice.module');
goog.require('boxuk.translation.translator.module');

/**
 * App constructor to instantiate Angular module.
 *
 * @constructor
 */
var App = function()
{
    angular.module('boxuk.translation', [
        boxuk.translation.trans.module.name,
        boxuk.translation.transchoice.module.name,
        boxuk.translation.translator.module.name
    ]);
};

/**
 * @type {App}
 */
var app = new App();
