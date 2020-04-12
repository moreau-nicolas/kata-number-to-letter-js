const {registerConverter} = require('../converter-registry');

const {
    resultOf,
    joinWith,
    suffixPowerOfTen,
    literal,
    specialCase,
} = require('../conversion-rules');


registerConverter('Portuguese', PORTUGUESE);

function PORTUGUESE(number) {
    return resultOf(
        joinWith(' e ', [
            specialCase(0, 'zero'),
            suffixPowerOfTen(PORTUGUESE, 9, ' bilhões', 'um bilhão'),
            suffixPowerOfTen(PORTUGUESE, 6, ' milhões', 'um milhão'),
            suffixPowerOfTen(PORTUGUESE, 3, ' mil', 'mil'),
            specialCase(100, 'cem'),
            literal(HUNDREDS, 100, 999, 100),
            literal(TWENTY_TO_NINETY, 20, 99, 10),
            literal(TEN_TO_NINETEEN, 10, 19),
            literal(ONE_TO_NINE, 1, 9),
        ]))(number)
}

const ONE_TO_NINE = [
    'um',
    'dois',
    'três',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove'
];
const TEN_TO_NINETEEN = [
    'dez',
    'onze',
    'doze',
    'treze',
    'catorze',
    'quinze',
    'dezasseis',
    'dezassete',
    'dezoito',
    'dezanove'
];
const TWENTY_TO_NINETY = [
    'vinte',
    'trinta',
    'quarenta',
    'cinquenta',
    'sexenta',
    'setenta',
    'oitenta',
    'noventa'
];
const HUNDREDS = [
    'cento',
    'duzentos',
    'trezentos',
    'quatrocentos',
    'quinhentos',
    'seiscentos',
    'setecentos',
    'oitocentos',
    'novecentos'
];
