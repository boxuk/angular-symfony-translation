'use strict';

goog.require('boxuk.translation.transchoice.module');

describe('TransChoice filter', function() {
    var filter, Translator;

    beforeEach(module(boxuk.translation.transchoice.module.name));

    beforeEach(module(function($provide) {
        Translator = {
            transChoice: jasmine.createSpy('transChoice')
        };

        Translator.transChoice.calls.reset();

        $provide.value('Translator', Translator);
    }));

    beforeEach(inject(function($injector) {
        filter = $injector.get('transChoiceFilter');
    }));

    it('should forward the request correctly when just a ' +
        'key and count are defined', function() {
        filter('my.text', 99);

        expect(Translator.transChoice).toHaveBeenCalledWith(
            'my.text',
            99,
            undefined,
            undefined
        );
    });

    it('should forward the request with params and domain', function() {
        filter('some.text', 10, { foo: 'bar' }, 'SOME_DOMAIN');

        expect(Translator.transChoice).toHaveBeenCalledWith(
            'some.text',
            10,
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

        it('should be able to parse parameters and domain', function() {
            var fixture = '<span>' +
                '{{ "some.key" | transChoice: 5: { foo: 123 }: "MY_DOMAIN" }}' +
                '</span>';

            compile(fixture);

            expect(Translator.transChoice).toHaveBeenCalledWith(
                'some.key',
                5,
                { foo: 123 },
                'MY_DOMAIN'
            );
        });
    });
});
