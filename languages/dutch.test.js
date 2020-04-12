const {convertNumberToLetter} = require('../index');
require('./dutch');

describe('Convert number to letter in Dutch', () => {
    const NUMBERS_UP_TO_TWENTY_ARE_SIMPLE_CONSTANTS = [
        [0, 'nul'],
        [1, 'een'],
        [2, 'twee'],
        [3, 'drie'],
        [4, 'vier'],
        [5, 'vijf'],
        [6, 'zes'],
        [7, 'zeven'],
        [8, 'acht'],
        [9, 'negen'],
        [10, 'tien'],
        [11, 'elf'],
        [12, 'twaalf'],
        [13, 'dertien'],
        [14, 'veertien'],
        [15, 'vijftien'],
        [16, 'zestien'],
        [17, 'zeventien'],
        [18, 'achttien'],
        [19, 'negentien'],
    ];
    const NUMBERS_UP_TO_A_HUNDRED_HAVE_A_WORD_BETWEEN_WORDS = [
        [20, 'twintig'],
        [21, 'eenentwintig'],
        [27, 'zevenentwintig'],
        [29, 'negenentwintig'],
        [30, 'dertig'],
        [47, 'zevenenveertig'],
        [51, 'eenenvijftig'],
        [68, 'achtenzestig'],
        [74, 'vierenzeventig'],
        [84, 'vierentachtig'],
        [99, 'negenennegentig'],
    ];
    const NUMBERS_ENDING_IN_TWO_OR_THREE_HAVE_AN_ACCENT = [
        [22, 'tweeëntwintig'],
        [23, 'drieëntwintig'],
        [32, 'tweeëndertig'],
        [33, 'drieëndertig'],
        [42, 'tweeënveertig'],
        [43, 'drieënveertig'],
        [52, 'tweeënvijftig'],
        [53, 'drieënvijftig'],
        [62, 'tweeënzestig'],
        [63, 'drieënzestig'],
        [72, 'tweeënzeventig'],
        [73, 'drieënzeventig'],
        [82, 'tweeëntachtig'],
        [83, 'drieëntachtig'],
        [92, 'tweeënnegentig'],
        [93, 'drieënnegentig'],
    ];
    const NUMBERS_OVER_A_HUNDRED_HAVE_A_SPACE_BETWEEN_WORDS = [
        [100, 'honderd'],
        [101, 'honderd een'],
        [199, 'honderd negenennegentig'],
        [200, 'tweehonderd'],
        [202, 'tweehonderd twee'],
        [300, 'driehonderd'],
        [800, 'achthonderd'],
        [999, 'negenhonderd negenennegentig'],
        [1000, 'duizend'],
        [2000, 'tweeduizend'],
        [999999, 'negenhonderd negenennegentigduizend negenhonderd negenennegentig'],
        [1000000, 'een miljoen'],
        [2000000, 'twee miljoen'],
        [1000000000, 'een miljard'],
        [4000000000, 'vier miljard'],
    ];
    const DUTCH_EXAMPLES = [
        ...NUMBERS_UP_TO_TWENTY_ARE_SIMPLE_CONSTANTS,
        ...NUMBERS_UP_TO_A_HUNDRED_HAVE_A_WORD_BETWEEN_WORDS,
        ...NUMBERS_ENDING_IN_TWO_OR_THREE_HAVE_AN_ACCENT,
        ...NUMBERS_OVER_A_HUNDRED_HAVE_A_SPACE_BETWEEN_WORDS,
    ];
    test.each(DUTCH_EXAMPLES)("%i should convert to '%s'", (inputNumber, expectedResult) => {
        expect(convertNumberToLetter('Dutch', inputNumber)).toBe(expectedResult);
    });
});
