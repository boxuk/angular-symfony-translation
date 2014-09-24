'use strict';

goog.require('boxuk.translation.trans.module');

describe('Trans filter', function() {
    var filter, Translator;

    beforeEach(module(boxuk.translation.trans.module.name));

    beforeEach(module(function($provide) {
        Translator = {
            trans: jasmine.createSpy('trans')
        };

        Translator.trans.calls.reset();

        $provide.value('Translator', Translator);
    }));

    beforeEach(inject(function($injector) {
        filter = $injector.get('transFilter');
    }));

    it('should forward the request correctly when just a ' +
        'key is defined', function() {
        filter('test-text');

        expect(Translator.trans).toHaveBeenCalledWith(
            'test-text',
            undefined,
            undefined
        );
    });

    it('should forward the request with params and domain', function() {
        filter('some-text', { foo: 'bar' }, 'SOME_DOMAIN');

        expect(Translator.trans).toHaveBeenCalledWith(
            'some-text',
            { foo: 'bar' },
            'SOME_DOMAIN'
        );
    });

    describe('using the filter in a view partial', function() {
        var scope,
            $compile;

        function compile(fixture) {
            $compile(fixture)(scope);
            scope.$digest();
        }

        beforeEach(inject(function($injector) {
            var $rootScope = $injector.get('$rootScope');

            $compile = $injector.get('$compile');
            scope = $rootScope.$new();
        }));

        it('should parse a simple key correctly', function() {
            var fixture = '<span>{{ "some.text" | trans }}</span>';

            compile(fixture);

            expect(Translator.trans).toHaveBeenCalledWith(
                'some.text',
                undefined,
                undefined
            );
        });

        it('should be able to parse parameters and domain', function() {
            var fixture = '<span>' +
                '{{ "a.key" | trans: { foo: 123 }: "A_DOMAIN" }}</span>';

            compile(fixture);

            expect(Translator.trans).toHaveBeenCalledWith(
                'a.key',
                { foo: 123 },
                'A_DOMAIN'
            );
        });
    });
});
