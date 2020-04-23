const {registerConverter} = require('../converter-registry');

const {
    resultOf,
    joinWith,
    lastToFirst,
    suffixPowerOfTen,
    literal,
    specialCase,
    conditionalElement,
} = require('../conversion-rules');


registerConverter('Italian', ITALIAN);

const afterThreeSignificantThousandDigits =
    (number) => {
        const thousands = Math.trunc(number / 1000);
        return thousands > 100 && !String(thousands).endsWith('00');
    };

function ITALIAN(number) {
    return resultOf(
        joinWith(' ', [
            specialCase(0, 'zero'),
            suffixPowerOfTen(9, ITALIAN, ' miliardi', 'un miliarde'),
            suffixPowerOfTen(6, ITALIAN, ' milioni', 'un milione'),
            joinWith('', [
                joinWith('', [
                    suffixPowerOfTen(3, ITALIAN, 'mila', 'mille'),
                    conditionalElement(' ', afterThreeSignificantThousandDigits),
                ], lastToFirst),
                suffixPowerOfTen(2, ITALIAN, 'cento', 'cento'),
                specialCase(3, 'tre'),
                literal(TWENTY_TO_NINETY, 20, 99, 10),
                literal(TEN_TO_NINETEEN, 10, 19),
                literal(ONE_TO_NINE, 1, 9),
            ]),
        ]))(number)
        .replace(/t[ai]([ou])/, 't$1')
}

const ONE_TO_NINE = [
    'uno',
    'due',
    'tré',
    'quattro',
    'cinque',
    'sei',
    'sette',
    'otto',
    'nove'
];
const TEN_TO_NINETEEN = [
    'dieci',
    'undici',
    'dodici',
    'tredici',
    'quattordici',
    'quindici',
    'sedici',
    'diciasette',
    'diciotto',
    'diciannove'
];
const TWENTY_TO_NINETY = [
    'venti',
    'trenta',
    'quaranta',
    'cinquanta',
    'sessanta',
    'settanta',
    'ottanta',
    'novanta'
]
