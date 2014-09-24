'use strict';

goog.require('boxuk.translation.adapter1x.module');

describe('Translation 1.x adapter', function() {
    var adapter,
        Translator;

    beforeEach(module(boxuk.translation.adapter1x.module.name));

    beforeEach(module(function($provide) {
        Translator = {
            get: jasmine.createSpy('get')
        };

        $provide.value('Translator', Translator);
    }));

    beforeEach(inject(function($injector) {
        adapter = $injector.get('TranslatorAdapter1x');
    }));

    describe('the trans method', function() {
        it('should correctly transform the method arguments and call the ' +
            '1.x translator with the result', function() {

            adapter.trans('key', { foo: 'bar' }, 'SOME_DOMAIN');

            expect(Translator.get).toHaveBeenCalledWith(
                'SOME_DOMAIN:key', { foo: 'bar' }
            );
        });

        it('should use a default domain and params if not' +
            ' specified', function() {
            var expectedDomain = adapter.defaultDomain_;

            adapter.trans('key');

            expect(Translator.get).toHaveBeenCalledWith(
                expectedDomain + ':key', {}
            );
        });
    });

    describe('the transChoice method', function() {
        it('should correctly transform the method arguments and call the ' +
            '1.x translator with the result', function() {

            adapter.transChoice('some.key', 5, {foo: 'bar'}, 'A_DOMAIN');

            expect(Translator.get).toHaveBeenCalledWith(
                'A_DOMAIN:some.key',
                { foo: 'bar' },
                5
            );
        });

        it('should use a default domain and params if not' +
            ' specified', function() {
            var expectedDomain = adapter.defaultDomain_;

            adapter.transChoice('key', 5);

            expect(Translator.get).toHaveBeenCalledWith(
                expectedDomain + ':key', {}, 5
            );
        });
    });
});
