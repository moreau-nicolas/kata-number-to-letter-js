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
            suffixPowerOfTen(9, ESTONIAN, ' miljardit', 'miljard'),
            suffixPowerOfTen(6, ESTONIAN, ' miljonit', 'miljon'),
            suffixPowerOfTen(3, ESTONIAN, ' tuhat', 'tuhat'),
            suffixPowerOfTen(2, ESTONIAN, 'sada', 'sada'),
            literal(ELEVEN_TO_NINETEEN, 11, 19),
            suffixPowerOfTen(1, ESTONIAN, 'kümmend', 'kümme'),
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
