'use strict';

goog.require('boxuk.translation.translator.module');

describe('Translation service', function() {
    var service,
        adapter,
        Translator1x,
        Translator2x;

    beforeEach(module(boxuk.translation.translator.module.name));

    beforeEach(function() {
        Translator1x = {
            locale: 'en',
            get: jasmine.createSpy('get')
        };

        Translator2x = {
            locale: 'fr',
            trans: {},
            transChoice: {}
        };
    });

    describe('when using a 1.x version of the Symfony ' +
        'translation bundle', function() {

        beforeEach(module(function($provide) {
            $provide.value('Translator', Translator1x);
        }));

        beforeEach(inject(function($injector) {
            service = $injector.get('TranslationService');
            adapter = $injector.get('TranslatorAdapter1x');
        }));

        it('should expose the locale via the adapter', function() {
            expect(service.locale).toBe(Translator1x.locale);
        });

        it('should expose the 2.x API by means of an adapter', function() {
            expect(service.trans).toBe(adapter.trans);
            expect(service.transChoice).toBe(adapter.transChoice);
        });
    });

    describe('when using a 2.x version of the Symfony ' +
        'translation bundle', function() {

        beforeEach(module(function($provide) {
            $provide.value('Translator', Translator2x);
        }));

        beforeEach(inject(function($injector) {
            service = $injector.get('TranslationService');
        }));

        it('should directly expose the methods and properties ' +
            'of the translator', function() {
            expect(service.locale).toBe(Translator2x.locale);
            expect(service.trans).toBe(Translator2x.trans);
            expect(service.transChoice).toBe(Translator2x.transChoice);
        });
    });
});
