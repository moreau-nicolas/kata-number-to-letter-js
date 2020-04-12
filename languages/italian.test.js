const {convertNumberToLetter} = require('../index');
require('./italian');

describe('Convert number to letter in Italian', () => {
    const NUMBERS_UP_TO_TEN_ARE_SIMPLE_CONSTANTS = [
        [0, 'zero'],
        [1, 'uno'],
        [2, 'due'],
        [3, 'tre'],
        [4, 'quattro'],
        [5, 'cinque'],
        [6, 'sei'],
        [7, 'sette'],
        [8, 'otto'],
        [9, 'nove'],
        [10, 'dieci'],
    ];
    const NUMBERS_BETWEEN_ELEVEN_AND_SIXTEEN_HAVE_A_COMMON_SUFFIX = [
        [11, 'undici'],
        [12, 'dodici'],
        [13, 'tredici'],
        [14, 'quattordici'],
        [15, 'quindici'],
        [16, 'sedici'],
    ];
    const NUMBERS_BETWEEN_SEVENTEEN_AND_NINETEEN_HAVE_A_COMMON_PREFIX = [
        [17, 'diciasette'],
        [18, 'diciotto'],
        [19, 'diciannove'],
    ];
    const SMALLER_NUMBERS_HAVE_NO_SPACE_BETWEEN_WORDS = [
        [20, 'venti'],
        [22, 'ventidue'],
        [30, 'trenta'],
        [34, 'trentaquattro'],
        [40, 'quaranta'],
        [42, 'quarantadue'],
        [45, 'quarantacinque'],
        [50, 'cinquanta'],
        [56, 'cinquantasei'],
        [60, 'sessanta'],
        [67, 'sessantasette'],
        [70, 'settanta'],
        [74, 'settantaquattro'],
        [80, 'ottanta'],
        [89, 'ottantanove'],
        [90, 'novanta'],
    ];
    const TENS_LOSE_THEIR_LAST_VOWEL_BEFORE_ANOTHER_VOWEL = [
        [21, 'ventuno'],
        [28, 'ventotto'],
        [31, 'trentuno'],
        [38, 'trentotto'],
        [41, 'quarantuno'],
        [48, 'quarantotto'],
        [51, 'cinquantuno'],
        [58, 'cinquantotto'],
        [61, 'sessantuno'],
        [68, 'sessantotto'],
        [71, 'settantuno'],
        [78, 'settantotto'],
        [81, 'ottantuno'],
        [88, 'ottantotto'],
        [91, 'novantuno'],
        [98, 'novantotto'],
    ];
    const COMPOUND_NUMBERS_ENDING_IN_THREE_HAVE_AN_ACCENT = [
        [23, 'ventitré'],
        [33, 'trentatré'],
        [43, 'quarantatré'],
        [53, 'cinquantatré'],
        [63, 'sessantatré'],
        [73, 'settantatré'],
        [83, 'ottantatré'],
        [93, 'novantatré'],
        [23000, 'ventitrémila'],
    ];
    const ONE_IS_OMITTED_BEFORE_A_HUNDRED_AND_A_THOUSAND = [
        [100, 'cento'],
        [1000, 'mille'],
        [1001, 'milleuno'],
    ];
    const HUNDREDS_HAVE_A_COMMON_SUFFIX = [
        [200, 'duecento'],
        [300, 'trecento'],
        [400, 'quattrocento'],
        [500, 'cinquecento'],
        [600, 'seicento'],
        [700, 'settecento'],
        [800, 'ottocento'],
        [900, 'novecento'],
    ];
    const THOUSANDS_ARE_PLURALIZED = [
        [2000, 'duemila'],
        [3000, 'tremila'],
        [4000, 'quattromila'],
        [5000, 'cinquemila'],
        [6000, 'seimila'],
        [7000, 'settemila'],
        [8000, 'ottomila'],
        [9000, 'novemila'],
    ];
    const THOUSANDS_OVER_A_HUNDRED_ARE_FOLLOWED_BY_A_SPACE = [
        [2020, 'duemilaventi'],
        [2345, 'duemilatrecentoquarantacinque'],
        [765200, 'settecentosessantacinquemila duecento'],
        [999666, 'novecentonovantanovemila seicentosessantasei'],
    ];
    const THOUSANDS_ENDING_WITH_00_ARE_NOT_FOLLOWED_BY_A_SPACE = [
        [100142, 'centomilacentoquarantadue'],
        [600002, 'seicentomiladue'],
    ];
    const MILLIONS_AND_BILLIONS_ARE_PLURALIZED = [
        [1000000, 'un milione'],
        [2000000, 'due milioni'],
        [1000000000, 'un miliarde'],
        [4000000000, 'quattro miliardi'],
    ];
    const ITALIAN_EXAMPLES = [
        ...NUMBERS_UP_TO_TEN_ARE_SIMPLE_CONSTANTS,
        ...NUMBERS_BETWEEN_ELEVEN_AND_SIXTEEN_HAVE_A_COMMON_SUFFIX,
        ...NUMBERS_BETWEEN_SEVENTEEN_AND_NINETEEN_HAVE_A_COMMON_PREFIX,
        ...SMALLER_NUMBERS_HAVE_NO_SPACE_BETWEEN_WORDS,
        ...TENS_LOSE_THEIR_LAST_VOWEL_BEFORE_ANOTHER_VOWEL,
        ...COMPOUND_NUMBERS_ENDING_IN_THREE_HAVE_AN_ACCENT,
        ...ONE_IS_OMITTED_BEFORE_A_HUNDRED_AND_A_THOUSAND,
        ...HUNDREDS_HAVE_A_COMMON_SUFFIX,
        ...THOUSANDS_ARE_PLURALIZED,
        ...THOUSANDS_OVER_A_HUNDRED_ARE_FOLLOWED_BY_A_SPACE,
        ...THOUSANDS_ENDING_WITH_00_ARE_NOT_FOLLOWED_BY_A_SPACE,
        ...MILLIONS_AND_BILLIONS_ARE_PLURALIZED,
    ];
    test.each(ITALIAN_EXAMPLES)("%i should convert to '%s'", (inputNumber, expectedResult) => {
        expect(convertNumberToLetter('Italian', inputNumber)).toBe(expectedResult);
    });
});
