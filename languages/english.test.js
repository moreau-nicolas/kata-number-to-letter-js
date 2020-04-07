const {convertNumberToLetter} = require('../index');
require('./english');

describe('Convert number to letter in English', () => {
    const NUMBERS_UP_TO_TWENTY_ARE_SIMPLE_CONSTANTS = [
        [0, 'zero'],
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine'],
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'nineteen'],
    ];
    const NUMBERS_UP_TO_ONE_HUNDRED_HAVE_A_DASH_BETWEEN_WORDS = [
        [20, 'twenty'],
        [21, 'twenty-one'],
        [22, 'twenty-two'],
        [23, 'twenty-three'],
        [27, 'twenty-seven'],
        [29, 'twenty-nine'],
        [30, 'thirty'],
        [42, 'forty-two'],
        [51, 'fifty-one'],
        [68, 'sixty-eight'],
        [74, 'seventy-four'],
        [84, 'eighty-four'],
        [99, 'ninety-nine'],
    ];
    const NUMBERS_OVER_ONE_HUNDRED_HAVE_A_SPACE_BETWEEN_WORDS = [
        [100, 'one hundred'],
        [101, 'one hundred one'],
        [199, 'one hundred ninety-nine'],
        [200, 'two hundred'],
        [300, 'three hundred'],
        [800, 'eight hundred'],
        [999, 'nine hundred ninety-nine'],
        [1000, 'one thousand'],
        [2000, 'two thousand'],
        [999999, 'nine hundred ninety-nine thousand nine hundred ninety-nine'],
        [1000000, 'one million'],
        [2000000, 'two million'],
        [1000000000, 'one billion'],
        [4000000000, 'four billion'],
    ];
    const ENGLISH_EXAMPLES = [
        ...NUMBERS_UP_TO_TWENTY_ARE_SIMPLE_CONSTANTS,
        ...NUMBERS_UP_TO_ONE_HUNDRED_HAVE_A_DASH_BETWEEN_WORDS,
        ...NUMBERS_OVER_ONE_HUNDRED_HAVE_A_SPACE_BETWEEN_WORDS,
    ];
    test.each(ENGLISH_EXAMPLES)("%i should convert to '%s'", (inputNumber, expectedResult) => {
        expect(convertNumberToLetter('English', inputNumber)).toBe(expectedResult);
    });
});
