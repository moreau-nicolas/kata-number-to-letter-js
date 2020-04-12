const {registerConverter} = require('../converter-registry');

const {
    resultOf,
    joinWith,
    lastToFirst,
    suffixPowerOfTen,
    literal,
    specialCase,
} = require('../conversion-rules');


registerConverter('German', GERMAN);

function GERMAN(number) {
    return resultOf(
        joinWith('', [
            specialCase(0, 'null'),
            suffixPowerOfTen(GERMAN, 9, ' Milliarden', 'eine Milliarde'),
            suffixPowerOfTen(GERMAN, 6, ' Millionen', 'eine Million'),
            suffixPowerOfTen(GERMAN, 3, 'tausend', 'tausend'),
            suffixPowerOfTen(GERMAN, 2, 'hundert', 'hundert'),
            specialCase(1, 'eins'),
            joinWith('und', [
                literal(ONE_TO_NINE, 1, 9),
                literal(TWENTY_TO_NINETY, 20, 99, 10),
            ], lastToFirst),
            literal(TEN_TO_NINETEEN, 10, 19),
        ]))(number)
}

const ONE_TO_NINE = [
    'ein',
    'zwei',
    'drei',
    'vier',
    'fünf',
    'sechs',
    'sieben',
    'acht',
    'neun'
];
const TEN_TO_NINETEEN = [
    'zehn',
    'elf',
    'zwölf',
    'dreizehn',
    'vierzehn',
    'fünfzehn',
    'sechzehn',
    'siebzehn',
    'achtzehn',
    'neunzehn'
];
const TWENTY_TO_NINETY = [
    'zwanzig',
    'dreißig',
    'vierzig',
    'fünfzig',
    'sechzig',
    'siebzig',
    'achtzig',
    'neunzig'
];
