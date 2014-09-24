'use strict';

/**
 * @fileoverview
 *
 * Integration tests for the module with the BazingaJS Translation Bundle.
 *
 * This test suite should be run against all versions of the Translator
 * bundle that need to be supported (even if the underlying API differs).
 *
 * A note on translations:
 * =======================
 * Fixtures are used to test integration between this module and the Translator.
 * The method signature for adding a translation differs between versions and
 * so cannot be (cleanly) included in this test.
 *
 * As such, fixtures should be specified and loaded by the Karma config,
 * depending on what version of the bundle is being tested.
 */

describe('Integration test of the Translation bundle', function() {
    var Translator;

    beforeEach(module('boxuk.translation'));

    beforeEach(inject(function($injector) {
        Translator = $injector.get('Translator');
    }));

    describe('trans filter', function() {
        var trans;

        beforeEach(inject(function($injector) {
            trans = $injector.get('transFilter');
        }));

        it('should correctly convert simple values', function() {
            expect(trans('foo')).toEqual('A test value.');
            expect(trans('bar')).toEqual('A different value.');
        });

        it('should be able to handle interpolated values', function() {
            expect(trans('hello', {'name': 'Tom'})).toEqual('Hello Tom.');
        });
    });

    describe('transChoice filter', function() {
        var transChoice;

        beforeEach(inject(function($injector) {
            transChoice = $injector.get('transChoiceFilter');
        }));

        it('should handle interpolated values', function() {
            expect(transChoice('food', 1, {'food': 'dog'}))
                .toEqual('My favourite food is dog.');

            expect(transChoice('turn', 1, {'name': 'Clyde'}))
                .toEqual('Right turn, Clyde.');
        });

        it('should handle pluralization', function() {
            expect(transChoice('spoons', 0, {}))
                .toEqual('There is no spoon.');

            expect(transChoice('spoons', 3, {'count': 'three'}))
                .toEqual('There are three spoons.');

            expect(transChoice('spoons', 20, {}))
                .toEqual('Spoons. Spoons everywhere.');
        });
    });
});
