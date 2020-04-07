const {convertNumberToLetter} = require('../index');
require('./french');

describe('Convert number to letter in French', () => {
    const NUMBERS_UP_TO_SIXTEEN_ARE_SIMPLE_CONSTANTS = [
        [0, 'zéro'],
        [1, 'un'],
        [2, 'deux'],
        [3, 'trois'],
        [4, 'quatre'],
        [5, 'cinq'],
        [6, 'six'],
        [7, 'sept'],
        [8, 'huit'],
        [9, 'neuf'],
        [10, 'dix'],
        [11, 'onze'],
        [12, 'douze'],
        [13, 'treize'],
        [14, 'quatorze'],
        [15, 'quinze'],
        [16, 'seize'],
    ];
    const NUMBERS_HAVE_A_DASH_BETWEEN_WORDS = [
        [17, 'dix-sept'],
        [18, 'dix-huit'],
        [19, 'dix-neuf'],
        [20, 'vingt'],
        [22, 'vingt-deux'],
        [23, 'vingt-trois'],
        [27, 'vingt-sept'],
        [29, 'vingt-neuf'],
        [30, 'trente'],
        [42, 'quarante-deux'],
        [68, 'soixante-huit'],
        [81, 'quatre-vingt-un'],
    ];
    const SEVENTIES_ARE_BASED_ON_SIXTY = [
        [74, 'soixante-quatorze'],
        [79, 'soixante-dix-neuf'],
    ];
    const NINETIES_ARE_BASED_ON_EIGHTY = [
        [91, 'quatre-vingt-onze'],
        [99, 'quatre-vingt-dix-neuf'],
    ];
    const ONE_IS_OMITTED_BEFORE_ONE_HUNDRED_AND_ONE_THOUSAND = [
        [101, 'cent-un'],
        [199, 'cent-quatre-vingt-dix-neuf'],
        [1000, 'mille'],
        [1007, 'mille-sept'],
    ];
    const SOME_NUMBERS_ENDING_WITH_ONE_HAVE_AN_EXTRA_WORD = [
        [21, 'vingt-et-un'],
        [31, 'trente-et-un'],
        [41, 'quarante-et-un'],
        [51, 'cinquante-et-un'],
        [61, 'soixante-et-un'],
        [71, 'soixante-et-onze'],
        [21000, 'vingt-et-un-mille'],
        [31000, 'trente-et-un-mille'],
        [41000, 'quarante-et-un-mille'],
        [51000, 'cinquante-et-un-mille'],
        [61000, 'soixante-et-un-mille'],
        [71000, 'soixante-et-onze-mille'],
    ]
    const SEVERAL_HUNDREDS_ENDS_WITH_AN_S_WHEN_NOT_FOLLOWED_BY_ANOTHER_WORD = [
        [100, 'cent'],
        [200, 'deux-cents'],
        [203, 'deux-cent-trois'],
        [300, 'trois-cents'],
        [302, 'trois-cent-deux'],
        [400, 'quatre-cents'],
        [500, 'cinq-cents'],
        [600, 'six-cents'],
        [700, 'sept-cents'],
        [800, 'huit-cents'],
        [900, 'neuf-cents'],
        [999, 'neuf-cent-quatre-vingt-dix-neuf'],
        [200000, 'deux-cent-mille'],
    ]
    const EIGHTY_ENDS_WITH_AN_S_WHEN_NOT_FOLLOWED_BY_ANOTHER_NUMBER = [
        [80, 'quatre-vingts'],
        [84, 'quatre-vingt-quatre'],
        [90, 'quatre-vingt-dix'],
        [180, 'cent-quatre-vingts'],
        [1984, 'mille-neuf-cent-quatre-vingt-quatre'],
        [280000, 'deux-cent-quatre-vingt-mille'],
        [380000000, 'trois-cent-quatre-vingts-millions'],
        [480000000000, 'quatre-cent-quatre-vingts-milliards'],
    ];
    const THOUSANDS_ARE_NOT_PLURALIZED = [
        [2000, 'deux-mille'],
        [999999, 'neuf-cent-quatre-vingt-dix-neuf-mille-neuf-cent-quatre-vingt-dix-neuf'],
    ];
    const MILLIONS_AND_BILLIONS_ARE_PLURALIZED = [
        [1000000, 'un-million'],
        [2000000, 'deux-millions'],
        [1000000000, 'un-milliard'],
        [4000000000, 'quatre-milliards'],
    ];
    const FRENCH_EXAMPLES = [
        ...NUMBERS_UP_TO_SIXTEEN_ARE_SIMPLE_CONSTANTS,
        ...NUMBERS_HAVE_A_DASH_BETWEEN_WORDS,
        ...SEVENTIES_ARE_BASED_ON_SIXTY,
        ...NINETIES_ARE_BASED_ON_EIGHTY,
        ...EIGHTY_ENDS_WITH_AN_S_WHEN_NOT_FOLLOWED_BY_ANOTHER_NUMBER,
        ...SOME_NUMBERS_ENDING_WITH_ONE_HAVE_AN_EXTRA_WORD,
        ...ONE_IS_OMITTED_BEFORE_ONE_HUNDRED_AND_ONE_THOUSAND,
        ...SEVERAL_HUNDREDS_ENDS_WITH_AN_S_WHEN_NOT_FOLLOWED_BY_ANOTHER_WORD,
        ...THOUSANDS_ARE_NOT_PLURALIZED,
        ...MILLIONS_AND_BILLIONS_ARE_PLURALIZED,
    ];
    test.each(FRENCH_EXAMPLES)("%i should convert to '%s'", (inputNumber, expectedResult) => {
        expect(convertNumberToLetter('French', inputNumber)).toBe(expectedResult);
    });
});
