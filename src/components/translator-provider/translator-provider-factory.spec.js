'use strict';

goog.require('boxuk.translation.provider.module');

describe('Translator factory', function() {
    var $window,
        Translator,
        mockTranslator;

    beforeEach(module(boxuk.translation.translator.module.name));

    beforeEach(inject(function($injector) {
        mockTranslator = {};

        $window = $injector.get('$window');
        $window.Translator = mockTranslator;

        Translator = $injector.get('Translator');
    }));

    it('should return the translator that is available in ' +
        'the global namespace', function() {
        expect(Translator).toBe(mockTranslator);
    });
});
