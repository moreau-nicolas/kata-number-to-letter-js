const {convertNumberToLetter} = require('../index');
require('./german');

describe('Convert number to letter in German', () => {
    const NUMBERS_UP_TO_TWENTY_ARE_SIMPLE_CONSTANTS = [
        [0, 'null'],
        [1, 'eins'],
        [2, 'zwei'],
        [3, 'drei'],
        [4, 'vier'],
        [5, 'fünf'],
        [6, 'sechs'],
        [7, 'sieben'],
        [8, 'acht'],
        [9, 'neun'],
        [10, 'zehn'],
        [11, 'elf'],
        [12, 'zwölf'],
        [13, 'dreizehn'],
        [14, 'vierzehn'],
        [15, 'fünfzehn'],
        [16, 'sechzehn'],
        [17, 'siebzehn'],
        [18, 'achtzehn'],
        [19, 'neunzehn'],
    ];
    const NUMBERS_UNDER_A_MILLION_HAVE_NO_SPACE_BETWEEN_WORDS = [
        [20, 'zwanzig'],
        [21, 'einundzwanzig'],
        [22, 'zweiundzwanzig'],
        [23, 'dreiundzwanzig'],
        [27, 'siebenundzwanzig'],
        [29, 'neunundzwanzig'],
        [30, 'dreißig'],
        [42, 'zweiundvierzig'],
        [51, 'einundfünfzig'],
        [68, 'achtundsechzig'],
        [74, 'vierundsiebzig'],
        [84, 'vierundachtzig'],
        [99, 'neunundneunzig'],
        [100, 'hundert'],
        [101, 'hunderteins'],
        [199, 'hundertneunundneunzig'],
        [200, 'zweihundert'],
        [202, 'zweihundertzwei'],
        [300, 'dreihundert'],
        [800, 'achthundert'],
        [999, 'neunhundertneunundneunzig'],
        [1000, 'tausend'],
        [2000, 'zweitausend'],
        [999999, 'neunhundertneunundneunzigtausendneunhundertneunundneunzig'],
    ];
    const NUMBERS_OVER_A_MILLION_HAVE_A_SPACE = [
        [1000000, 'eine Million'],
        [2000000, 'zwei Millionen'],
        [1000000000, 'eine Milliarde'],
        [4000000000, 'vier Milliarden'],
    ];
    const GERMAN_EXAMPLES = [
        ...NUMBERS_UP_TO_TWENTY_ARE_SIMPLE_CONSTANTS,
        ...NUMBERS_UNDER_A_MILLION_HAVE_NO_SPACE_BETWEEN_WORDS,
        ...NUMBERS_OVER_A_MILLION_HAVE_A_SPACE,
    ];
    test.each(GERMAN_EXAMPLES)("%i should convert to '%s'", (inputNumber, expectedResult) => {
        expect(convertNumberToLetter('German', inputNumber)).toBe(expectedResult);
    });
});
