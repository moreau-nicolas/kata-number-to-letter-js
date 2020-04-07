const {registerConverter} = require('../converter-registry');

const {
    resultOf,
    joinWith,
    suffixPowerOfTen,
    literal,
    specialCase,
} = require('../conversion-rules');


registerConverter('French', FRENCH);

function FRENCH(number) {
    return resultOf(
        joinWith('-', [
            specialCase(0, 'zéro'),
            suffixPowerOfTen(FRENCH, 9, '-milliards', 'un-milliard'),
            suffixPowerOfTen(FRENCH, 6, '-millions', 'un-million'),
            suffixPowerOfTen(FRENCH_THOUSANDS, 3, '-mille', 'mille'),
            specialCase(900, 'neuf-cents'),
            specialCase(800, 'huit-cents'),
            specialCase(700, 'sept-cents'),
            specialCase(600, 'six-cents'),
            specialCase(500, 'cinq-cents'),
            specialCase(400, 'quatre-cents'),
            specialCase(300, 'trois-cents'),
            specialCase(200, 'deux-cents'),
            suffixPowerOfTen(FRENCH, 2, '-cent', 'cent'),
            specialCase(80, 'quatre-vingts'),
            CONVERT_SMALLER_NUMBERS,
        ]))(number)
}

function FRENCH_THOUSANDS(number) {
    return resultOf(
        joinWith('-', [
            suffixPowerOfTen(FRENCH_THOUSANDS, 2, '-cent', 'cent'),
            CONVERT_SMALLER_NUMBERS,
        ]))(number)
}

const ONE_TO_NINE = [
    'un',
    'deux',
    'trois',
    'quatre',
    'cinq',
    'six',
    'sept',
    'huit',
    'neuf'
];
const ELEVEN_TO_SIXTEEN = [
    'onze',
    'douze',
    'treize',
    'quatorze',
    'quinze',
    'seize',
];
const TWENTY_TO_FIFTY = [
    'vingt',
    'trente',
    'quarante',
    'cinquante',
];

const CONVERT_SMALLER_NUMBERS = joinWith('-', [
    specialCase(71, 'soixante-et-onze'),
    specialCase(61, 'soixante-et-un'),
    specialCase(51, 'cinquante-et-un'),
    specialCase(41, 'quarante-et-un'),
    specialCase(31, 'trente-et-un'),
    specialCase(21, 'vingt-et-un'),
    literal(['quatre-vingt'], 80, 99),
    literal(['soixante'], 60, 79),
    literal(TWENTY_TO_FIFTY, 20, 59, 10),
    literal(ELEVEN_TO_SIXTEEN, 11, 16),
    literal(['dix'], 10, 19),
    literal(ONE_TO_NINE, 1, 9),
]);
