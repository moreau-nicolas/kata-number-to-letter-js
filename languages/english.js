const {registerConverter} = require('../converter-registry');

const {
    resultOf,
    joinWith,
    suffixPowerOfTen,
    literal,
    specialCase,
} = require('../conversion-rules');


registerConverter('English', ENGLISH);

function ENGLISH(number) {
    return resultOf(
        joinWith(' ', [
            specialCase(0, 'zero'),
            suffixPowerOfTen(9, ENGLISH, ' billion'),
            suffixPowerOfTen(6, ENGLISH, ' million'),
            suffixPowerOfTen(3, ENGLISH, ' thousand'),
            suffixPowerOfTen(2, ENGLISH, ' hundred'),
            joinWith('-', [
                literal(TWENTY_TO_NINETY, 20, 99, 10),
                literal(ONE_TO_NINE, 1, 9),
            ]),
            literal(TEN_TO_NINETEEN, 10, 19),
        ]))(number)
}

const ONE_TO_NINE = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
];
const TEN_TO_NINETEEN = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
];
const TWENTY_TO_NINETY = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
];
