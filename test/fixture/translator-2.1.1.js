(function(Translator){
    // Translations added using 2.x syntax.
    Translator.add('foo', 'A test value.', 'messages');
    Translator.add('bar', 'A different value.', 'messages');
    Translator.add('hello', 'Hello %name%.', 'messages');

    Translator.add('food', 'My favourite food is %food%.', 'messages');
    Translator.add('turn', 'Right turn, %name%.', 'messages');

    Translator.add(
        'spoons',
        '{0} There is no spoon.' +
            '|[1,10] There are %count% spoons.' +
            '|[11,Inf] Spoons. Spoons everywhere.',
        'messages'
    );
})(window.Translator);
