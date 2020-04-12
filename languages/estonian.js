const {registerConverter} = require('../converter-registry');

const {
    resultOf,
    joinWith,
    suffixPowerOfTen,
    literal,
    specialCase,
} = require('../conversion-rules');


registerConverter('Estonian', ESTONIAN);

function ESTONIAN(number) {
    return resultOf(
        joinWith(' ',[
            specialCase(0, 'null'),
            suffixPowerOfTen(ESTONIAN, 9, ' miljardit', 'miljard'),
            suffixPowerOfTen(ESTONIAN, 6, ' miljonit', 'miljon'),
            suffixPowerOfTen(ESTONIAN, 3, ' tuhat', 'tuhat'),
            suffixPowerOfTen(ESTONIAN, 2, 'sada', 'sada'),
            literal(ELEVEN_TO_NINETEEN, 11, 19),
            suffixPowerOfTen(ESTONIAN, 1, 'kümmend', 'kümme'),
            literal(ONE_TO_NINE, 1, 9)
        ]))(number)
}

const ONE_TO_NINE = [
    'üks',
    'kaks',
    'kolm',
    'neli',
    'viis',
    'kuus',
    'seitse',
    'kaheksa',
    'üheksa'
];
const ELEVEN_TO_NINETEEN = ONE_TO_NINE.map(each => each + 'teist');
