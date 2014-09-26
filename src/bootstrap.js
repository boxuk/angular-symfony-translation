'use strict';

/**
 * @fileoverview
 *
 * Simple bootstrapping file that requires the main app.
 *
 * This means we can export the app module using `goog.provide` and so
 * can include it directly in tests (if required). If we provided it but
 * never actually required it anywhere, we would end up with an empty
 * compilation result.
 */

goog.require('boxuk.translation.module');
