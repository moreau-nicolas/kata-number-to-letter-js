const {convertNumberToLetter} = require('../index');
require('./portuguese');

describe('Convert number to letter in Portuguese', () => {
    const NUMBERS_UP_TO_SIXTEEN_ARE_SIMPLE_CONSTANTS = [
        [0, 'zero'],
        [1, 'um'],
        [2, 'dois'],
        [3, 'três'],
        [4, 'quatro'],
        [5, 'cinco'],
        [6, 'seis'],
        [7, 'sete'],
        [8, 'oito'],
        [9, 'nove'],
        [10, 'dez'],
        [11, 'onze'],
        [12, 'doze'],
        [13, 'treze'],
        [14, 'catorze'],
        [15, 'quinze'],
        [16, 'dezasseis'],
        [17, 'dezassete'],
        [18, 'dezoito'],
        [19, 'dezanove'],
    ];
    const NUMBERS_HAVE_A_WORD_AND_SPACES_BETWEEN_WORDS = [
        [20, 'vinte'],
        [22, 'vinte e dois'],
        [23, 'vinte e três'],
        [27, 'vinte e sete'],
        [29, 'vinte e nove'],
        [30, 'trinta'],
        [42, 'quarenta e dois'],
        [51, 'cinquenta e um'],
        [68, 'sexenta e oito'],
        [74, 'setenta e quatro'],
        [79, 'setenta e nove'],
        [84, 'oitenta e quatro'],
        [91, 'noventa e um'],
        [99, 'noventa e nove'],
    ];
    const ONE_IS_OMITTED_BEFORE_ONE_HUNDRED_AND_ONE_THOUSAND = [
        [100, 'cem'],
        [101, 'cento e um'],
        [121, 'cento e vinte e um'],
        [138, 'cento e trinta e oito'],
        [199, 'cento e noventa e nove'],
        [1000, 'mil'],
        [1007, 'mil e sete'],
    ];
    const HUNDREDS_ARE_PLURALIZED = [
        [200, 'duzentos'],
        [203, 'duzentos e três'],
        [300, 'trezentos'],
        [302, 'trezentos e dois'],
        [400, 'quatrocentos'],
        [487, 'quatrocentos e oitenta e sete'],
        [500, 'quinhentos'],
        [600, 'seiscentos'],
        [700, 'setecentos'],
        [701, 'setecentos e um'],
        [800, 'oitocentos'],
        [811, 'oitocentos e onze'],
        [900, 'novecentos'],
        [940, 'novecentos e quarenta'],
        [999, 'novecentos e noventa e nove'],
    ]
    const THOUSANDS_ARE_NOT_PLURALIZED = [
        [2000, 'dois mil'],
        [2004, 'dois mil e quatro'],
        [2058, 'dois mil e cinquenta e oito'],
        [2400, 'dois mil e quatrocentos'],
        [5009, 'cinco mil e nove'],
        [200000, 'duzentos mil'],
        [999999, 'novecentos e noventa e nove mil e novecentos e noventa e nove'],
    ];
    const MILLIONS_AND_BILLIONS_ARE_PLURALIZED = [
        [1000000, 'um milhão'],
        [2000000, 'dois milhões'],
        [1000000000, 'um bilhão'],
        [4000000000, 'quatro bilhões'],
    ];
    const PORTUGUESE_EXAMPLES = [
        ...NUMBERS_UP_TO_SIXTEEN_ARE_SIMPLE_CONSTANTS,
        ...NUMBERS_HAVE_A_WORD_AND_SPACES_BETWEEN_WORDS,
        ...ONE_IS_OMITTED_BEFORE_ONE_HUNDRED_AND_ONE_THOUSAND,
        ...HUNDREDS_ARE_PLURALIZED,
        ...THOUSANDS_ARE_NOT_PLURALIZED,
        ...MILLIONS_AND_BILLIONS_ARE_PLURALIZED,
    ];
    test.each(PORTUGUESE_EXAMPLES)("%i should convert to '%s'", (inputNumber, expectedResult) => {
        expect(convertNumberToLetter('Portuguese', inputNumber)).toBe(expectedResult);
    });
});
