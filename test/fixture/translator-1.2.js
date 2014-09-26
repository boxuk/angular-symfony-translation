(function(Translator){
    // Translations added using 1.x syntax.
    Translator.add('messages:foo', 'A test value.');
    Translator.add('messages:bar', 'A different value.');
    Translator.add('messages:hello', 'Hello %name%.');

    Translator.add('messages:food', 'My favourite food is %food%.');
    Translator.add('messages:turn', 'Right turn, %name%.');

    Translator.add(
        'messages:spoons',
        '{0} There is no spoon.' +
            '|[1,10] There are %count% spoons.' +
            '|[11,Inf] Spoons. Spoons everywhere.'
    );
})(window.Translator);
