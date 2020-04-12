const {convertNumberToLetter} = require('../index');
require('./estonian');

describe('Convert number to letter in Estonian', () => {
    const NUMBERS_UP_TO_TEN_ARE_SIMPLE_CONSTANTS = [
        [0, 'null'],
        [1, 'üks'],
        [2, 'kaks'],
        [3, 'kolm'],
        [4, 'neli'],
        [5, 'viis'],
        [6, 'kuus'],
        [7, 'seitse'],
        [8, 'kaheksa'],
        [9, 'üheksa'],
        [10, 'kümme'],
    ];
    const NUMBERS_BETWEEN_ELEVEN_AND_NINETEEN_HAVE_A_COMMON_SUFFIX = [
        [11, 'üksteist'],
        [12, 'kaksteist'],
        [13, 'kolmteist'],
        [14, 'neliteist'],
        [15, 'viisteist'],
        [16, 'kuusteist'],
        [17, 'seitseteist'],
        [18, 'kaheksateist'],
        [19, 'üheksateist'],
    ];
    const MULTIPLES_OF_TEN_UNDER_A_HUNDRED_HAVE_A_COMMON_SUFFIX = [
        [20, 'kakskümmend'],
        [30, 'kolmkümmend'],
        [40, 'nelikümmend'],
        [50, 'viiskümmend'],
        [60, 'kuuskümmend'],
        [70, 'seitsekümmend'],
        [80, 'kaheksakümmend'],
        [90, 'üheksakümmend'],
    ];
    const NUMBERS_HAVE_A_SPACE_BETWEEN_WORDS = [
        [21, 'kakskümmend üks'],
        [22, 'kakskümmend kaks'],
        [23, 'kakskümmend kolm'],
        [24, 'kakskümmend neli'],
        [25, 'kakskümmend viis'],
        [26, 'kakskümmend kuus'],
        [27, 'kakskümmend seitse'],
        [28, 'kakskümmend kaheksa'],
        [29, 'kakskümmend üheksa'],
        [42, 'nelikümmend kaks'],
    ];
    const ONE_IS_OMITTED_BEFORE_A_HUNDRED_AND_A_THOUSAND = [
        [100, 'sada'],
        [1000, 'tuhat'],
    ];
    const HUNDREDS_HAVE_A_COMMON_SUFFIX = [
        [200, 'kakssada'],
        [300, 'kolmsada'],
        [400, 'nelisada'],
        [500, 'viissada'],
        [600, 'kuussada'],
        [700, 'seitsesada'],
        [800, 'kaheksasada'],
        [900, 'üheksasada'],
    ];
    const THOUSANDS_HAVE_A_SPACE = [
        [2000, 'kaks tuhat'],
        [3000, 'kolm tuhat'],
        [4000, 'neli tuhat'],
        [5000, 'viis tuhat'],
        [6000, 'kuus tuhat'],
        [7000, 'seitse tuhat'],
        [8000, 'kaheksa tuhat'],
        [9000, 'üheksa tuhat'],
    ];
    const MILLIONS_AND_BILLIONS_ARE_PLURALIZED = [
        [1000000, 'miljon'],
        [2000000, 'kaks miljonit'],
        [1000000000, 'miljard'],
        [4000000000, 'neli miljardit'],
    ];
    const ESTONIAN_EXAMPLES = [
        ...NUMBERS_UP_TO_TEN_ARE_SIMPLE_CONSTANTS,
        ...NUMBERS_BETWEEN_ELEVEN_AND_NINETEEN_HAVE_A_COMMON_SUFFIX,
        ...MULTIPLES_OF_TEN_UNDER_A_HUNDRED_HAVE_A_COMMON_SUFFIX,
        ...NUMBERS_HAVE_A_SPACE_BETWEEN_WORDS,
        ...ONE_IS_OMITTED_BEFORE_A_HUNDRED_AND_A_THOUSAND,
        ...HUNDREDS_HAVE_A_COMMON_SUFFIX,
        ...THOUSANDS_HAVE_A_SPACE,
        ...MILLIONS_AND_BILLIONS_ARE_PLURALIZED,
    ];
    test.each(ESTONIAN_EXAMPLES)("%i should convert to '%s'", (inputNumber, expectedResult) => {
        expect(convertNumberToLetter('Estonian', inputNumber)).toBe(expectedResult);
    });
});
