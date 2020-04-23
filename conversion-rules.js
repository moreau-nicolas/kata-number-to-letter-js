const suffixPowerOfTen = (power, converter, suffix, singular) =>
    (number) => {
        const POWER_OF_TEN = Math.pow(10, power);
        if (number >= POWER_OF_TEN) {
            const HOW_MANY = Math.trunc(number / POWER_OF_TEN);
            const NEXT = number % POWER_OF_TEN;
            if (typeof singular === 'string' && HOW_MANY === 1) {
                return [singular, NEXT];
            }
            return [converter(HOW_MANY) + suffix, number % POWER_OF_TEN]
        }
        return ['', number];
    };

const literal = (fromArray, whenBetween, and, withInterval = 1) =>
    (number) => {
        if (number >= whenBetween && number <= and) {
            const VALUES = fromArray;
            const STEP = withInterval;
            const INDEX = Math.trunc((number - whenBetween) / STEP) % VALUES.length;
            const NEXT = number - whenBetween - INDEX * STEP;
            return [VALUES[INDEX], NEXT];
        }
        return ['', number];
    };

const specialCase = (value, immediatelyConvertsTo) =>
    (number) => {
        if (number === value) {
            return [immediatelyConvertsTo, 0];
        }
        return ['', number];
    };

const firstToLast = (elements) => elements;
const lastToFirst = (elements) => [...elements].reverse();

const joinWith = (separator, rules, direction = firstToLast) =>
    (number) => {
        let parts = [];
        let [part, nextNumber] = ['', number];
        for (const rule of direction(rules)) {
            [part, nextNumber] = rule(nextNumber);
            if (part !== '') parts.push(part);
            if (nextNumber === 0) break;
        }
        return [direction(parts).join(separator), nextNumber];
    };

const conditionalElement = (element, when) =>
    (number) => [when(number) ? element : '', number];

const resultOf = (rule) =>
    (number) => rule(number)[0];

module.exports = {
    resultOf,
    joinWith,
    lastToFirst,
    suffixPowerOfTen,
    literal,
    specialCase,
    conditionalElement,
};
