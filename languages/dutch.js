const {registerConverter} = require('../converter-registry');

const {
    resultOf,
    joinWith,
    lastToFirst,
    suffixPowerOfTen,
    literal,
    specialCase,
} = require('../conversion-rules');


registerConverter('Dutch', DUTCH);

function DUTCH(number) {
    return resultOf(
        joinWith(' ', [
            specialCase(0, 'nul'),
            suffixPowerOfTen(DUTCH, 9, ' miljard'),
            suffixPowerOfTen(DUTCH, 6, ' miljoen'),
            suffixPowerOfTen(DUTCH, 3, 'duizend', 'duizend'),
            suffixPowerOfTen(DUTCH, 2, 'honderd', 'honderd'),
            joinWith('en', [
                literal(ONE_TO_NINE, 1, 9),
                literal(TWENTY_TO_NINETY, 20, 99, 10),
            ], lastToFirst),
            literal(TEN_TO_NINETEEN, 10, 19),
        ]))(number)
        .replace('tweeen', 'tweeën')
        .replace('drieen', 'drieën')
}

const ONE_TO_NINE = [
    'een',
    'twee',
    'drie',
    'vier',
    'vijf',
    'zes',
    'zeven',
    'acht',
    'negen'
];
const TEN_TO_NINETEEN = [
    'tien',
    'elf',
    'twaalf',
    'dertien',
    'veertien',
    'vijftien',
    'zestien',
    'zeventien',
    'achttien',
    'negentien'
];
const TWENTY_TO_NINETY = [
    'twintig',
    'dertig',
    'veertig',
    'vijftig',
    'zestig',
    'zeventig',
    'tachtig',
    'negentig'
];
