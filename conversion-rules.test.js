const {
    resultOf,
    joinWith,
    lastToFirst,
    suffixPowerOfTen,
    literal,
    specialCase,
} = require('./conversion-rules');

describe('resultOf()', () => {
    it('should apply a conversion rule and return its result', () => {
        const dummy = _ => ['some result', 0];

        const ruleUnderTest = resultOf(dummy);

        expect(ruleUnderTest(42)).toBe('some result');
    });
});

describe('specialCase()', () => {
    const theAnswer = 'Answer to the Ultimate Question of Life, the Universe, and Everything';
    const ruleUnderTest = specialCase(42, theAnswer);

    it('should return an array containing ' +
        'the special case literal and 0 ' +
        'when given the exact number', () => {

        expect(ruleUnderTest(42)).toStrictEqual([theAnswer, 0]);
    });
    it('should return an array containing ' +
        'the empty string and the number ' +
        'when given any other number', () => {

        expect(ruleUnderTest(51)).toStrictEqual(['', 51]);
    });
});

describe('joinWith()', () => {

    describe('first to last', () => {

        it('should return an array ' +
            'containing an empty string and the number ' +
            'when there are no rules', () => {
            const inputNumber = 42;
            const rules = [];
            const ruleUnderTest = joinWith(';', rules);

            expect(ruleUnderTest(inputNumber)).toStrictEqual(['', inputNumber]);
        });
        it('should return the rule result ' +
            'when there is only one rule', () => {
            const inputNumber = 999;
            const rules = [
                _ => ['evil result', 666],
            ];
            const ruleUnderTest = joinWith('*', rules);

            expect(ruleUnderTest(inputNumber)).toStrictEqual(['evil result', 666]);
        });
        it('should return an array containing ' +
            'the rule results joined by the separator and the result of the last rule' +
            'when there are several rules', () => {
            const inputNumber = 1956;
            const rules = [
                _ => ['a', 956],
                _ => ['b', 56],
                _ => ['c', 0],
            ];
            const ruleUnderTest = joinWith(';', rules);

            expect(ruleUnderTest(inputNumber)).toStrictEqual(['a;b;c', 0]);
        });
        it('should forward the second element of the previous result ' +
            'to the next rule ' +
            'when there are several rules', () => {
            const inputNumber = 1984;
            const rules = [
                jest.fn(_ => ['a', 984]),
                jest.fn(_ => ['b', 84]),
                jest.fn(_ => ['c', 4]),
                jest.fn(_ => ['d', 0]),
            ];
            const ruleUnderTest = joinWith(':', rules);

            ruleUnderTest(inputNumber);
            expect(rules[0]).toHaveBeenCalledWith(1984);
            expect(rules[1]).toHaveBeenCalledWith(984);
            expect(rules[2]).toHaveBeenCalledWith(84);
            expect(rules[3]).toHaveBeenCalledWith(4);
        });
        it('should produce a sequence of no more than one separator ' +
            'when some rules return a result containing an empty string', () => {
            const inputNumber = 1993;
            const rules = [
                _ => ['a', 993],
                _ => ['', 93],
                _ => ['', 3],
                _ => ['d', 0],
            ];
            const ruleUnderTest = joinWith('.', rules);

            expect(ruleUnderTest(inputNumber)).toStrictEqual(['a.d', 0]);
        });
        it('should return immediately ' +
            'when the next input is 0', () => {
            const inputNumber = 1959;
            const rules = [
                jest.fn(_ => ['b', 959]),
                jest.fn(_ => ['m', 0]),
                jest.fn(_ => ['x', 0xCAFE]),
                jest.fn(_ => ['y', 0xC0DE]),
            ];
            const ruleUnderTest = joinWith(' ', rules);

            expect(ruleUnderTest(inputNumber)).toStrictEqual(['b m', 0]);
            expect(rules[0]).toHaveBeenCalledWith(1959);
            expect(rules[1]).toHaveBeenCalledWith(959);
            expect(rules[2]).not.toHaveBeenCalled();
            expect(rules[3]).not.toHaveBeenCalled();
        });
    });

    describe('last to first', () => {
        it('should return an array ' +
            'containing an empty string and its parameter ' +
            'when there are no rules', () => {
            const inputNumber = 42;
            const rules = [];
            const ruleUnderTest = joinWith(';', rules, lastToFirst);

            expect(ruleUnderTest(inputNumber)).toStrictEqual(['', inputNumber]);
        });
        it('should return the rule result ' +
            'when there is only one rule', () => {
            const inputNumber = 999;
            const rules = [
                _ => ['evil result', 666],
            ];
            const ruleUnderTest = joinWith('*', rules, lastToFirst);

            expect(ruleUnderTest(inputNumber)).toStrictEqual(['evil result', 666]);
        });
        it('should return an array containing ' +
            'the rule results joined by the separator and the result of the last rule' +
            'when there are several rules', () => {
            const inputNumber = 1956;
            const rules = [
                _ => ['a', 0],
                _ => ['b', 56],
                _ => ['c', 956],
            ];
            const ruleUnderTest = joinWith(';', rules, lastToFirst);

            expect(ruleUnderTest(inputNumber)).toStrictEqual(['a;b;c', 0]);
        });
        it('should forward the second element of the previous result ' +
            'to the next rule ' +
            'when there are several rules', () => {
            const inputNumber = 1984;
            const rules = [
                jest.fn(_ => ['a', 0]),
                jest.fn(_ => ['b', 4]),
                jest.fn(_ => ['c', 84]),
                jest.fn(_ => ['d', 984]),
            ];
            const ruleUnderTest = joinWith(':', rules, lastToFirst);
            ruleUnderTest(inputNumber);

            expect(rules[3]).toHaveBeenCalledWith(1984);
            expect(rules[2]).toHaveBeenCalledWith(984);
            expect(rules[1]).toHaveBeenCalledWith(84);
            expect(rules[0]).toHaveBeenCalledWith(4);
        });
        it('should produce a sequence of no more than one separator ' +
            'when some rules return a result containing an empty string', () => {
            const inputNumber = 1993;
            const rules = [
                _ => ['a', 0],
                _ => ['', 3],
                _ => ['', 93],
                _ => ['d', 993],
            ];
            const ruleUnderTest = joinWith('.', rules, lastToFirst);

            expect(ruleUnderTest(inputNumber)).toStrictEqual(['a.d', 0]);
        });
        it('should return immediately ' +
            'when the next input is 0', () => {
            const inputNumber = 1959;
            const rules = [
                jest.fn(_ => ['y', 0xC0DE]),
                jest.fn(_ => ['x', 0xCAFE]),
                jest.fn(_ => ['b', 0]),
                jest.fn(_ => ['m', 959]),
            ];
            const ruleUnderTest = joinWith(' ', rules, lastToFirst);

            expect(ruleUnderTest(inputNumber)).toStrictEqual(['b m', 0]);
            expect(rules[3]).toHaveBeenCalledWith(1959);
            expect(rules[2]).toHaveBeenCalledWith(959);
            expect(rules[1]).not.toHaveBeenCalled();
            expect(rules[0]).not.toHaveBeenCalled();
        });
    });
});

describe('literal()', () => {
    describe('simple one-to-one mapping', () => {
        const A_TO_F = ['A', 'B', 'C', 'D', 'E', 'F'];
        const ruleUnderTest = literal(A_TO_F, 10, 15);

        it('should return an array containing ' +
            'the corresponding literal and 0 ' +
            'when given a number in its range of values', () => {
            expect(ruleUnderTest(10)).toStrictEqual(['A', 0]);
            expect(ruleUnderTest(11)).toStrictEqual(['B', 0]);
            expect(ruleUnderTest(12)).toStrictEqual(['C', 0]);
            expect(ruleUnderTest(13)).toStrictEqual(['D', 0]);
            expect(ruleUnderTest(14)).toStrictEqual(['E', 0]);
            expect(ruleUnderTest(15)).toStrictEqual(['F', 0]);
        });
        it('should return an array containing ' +
            'the empty string and the number ' +
            'when given a number outside of its range of values', () => {
            expect(ruleUnderTest(8)).toStrictEqual(['', 8]);
            expect(ruleUnderTest(9)).toStrictEqual(['', 9]);
            expect(ruleUnderTest(16)).toStrictEqual(['', 16]);
            expect(ruleUnderTest(17)).toStrictEqual(['', 17]);
        });
    });
    describe('one-to-one mapping with an interval', () => {
        const TEN_TO_NINETY = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
        const ruleUnderTest = literal(TEN_TO_NINETY, 10, 99, 10);

        it('should return an array containing ' +
            'the corresponding literal and the remainder ' +
            'when given a number in its range of values', () => {
            expect(ruleUnderTest(10)).toStrictEqual(['X', 0]);
            expect(ruleUnderTest(11)).toStrictEqual(['X', 1]);
            expect(ruleUnderTest(19)).toStrictEqual(['X', 9]);
            expect(ruleUnderTest(24)).toStrictEqual(['XX', 4]);
            expect(ruleUnderTest(37)).toStrictEqual(['XXX', 7]);
            expect(ruleUnderTest(99)).toStrictEqual(['XC', 9]);
        });
        it('should return an array containing ' +
            'the empty string and the number ' +
            'when given a number outside of its range of values', () => {
            expect(ruleUnderTest(8)).toStrictEqual(['', 8]);
            expect(ruleUnderTest(9)).toStrictEqual(['', 9]);
            expect(ruleUnderTest(100)).toStrictEqual(['', 100]);
            expect(ruleUnderTest(101)).toStrictEqual(['', 101]);
        });
    });
    describe('many-to-one mapping', () => {
        const ruleUnderTest = literal(['soixante'], 60, 79);

        it('should return an array containing ' +
            'the literal and 0 ' +
            'when given a number in its range of values', () => {
            expect(ruleUnderTest(60)).toStrictEqual(['soixante', 0]);
            expect(ruleUnderTest(61)).toStrictEqual(['soixante', 1]);
            expect(ruleUnderTest(69)).toStrictEqual(['soixante', 9]);
            expect(ruleUnderTest(70)).toStrictEqual(['soixante', 10]);
            expect(ruleUnderTest(74)).toStrictEqual(['soixante', 14]);
            expect(ruleUnderTest(79)).toStrictEqual(['soixante', 19]);
        });
        it('should return an array containing ' +
            'the empty string and the number ' +
            'when given a number outside of its range of values', () => {
            expect(ruleUnderTest(58)).toStrictEqual(['', 58]);
            expect(ruleUnderTest(59)).toStrictEqual(['', 59]);
            expect(ruleUnderTest(80)).toStrictEqual(['', 80]);
            expect(ruleUnderTest(81)).toStrictEqual(['', 81]);
        });
    });
});

describe('suffixPowerOfTen()', () => {
    describe('with an invariant suffix', () => {
        const ROMAN = x => [undefined, 'I', 'II', 'III', 'IV'][x];
        const ruleUnderTest = suffixPowerOfTen(2, ROMAN, '*C');

        it('should return an array containing ' +
            'the converted multiple with the suffix and ' +
            'the remainder in the division of the power of ten' +
            'when given any multiple of the power of ten', () => {
            expect(ruleUnderTest(104)).toStrictEqual(['I*C', 4]);
            expect(ruleUnderTest(200)).toStrictEqual(['II*C', 0]);
            expect(ruleUnderTest(207)).toStrictEqual(['II*C', 7]);
            expect(ruleUnderTest(300)).toStrictEqual(['III*C', 0]);
            expect(ruleUnderTest(402)).toStrictEqual(['IV*C', 2]);
        });
        it('should return an array containing ' +
            'the empty string and the number ' +
            'when given a number smaller than the power of ten', () => {
            expect(ruleUnderTest(90)).toStrictEqual(['', 90]);
            expect(ruleUnderTest(97)).toStrictEqual(['', 97]);
        });
    });
    describe('with a pluralized suffix', () => {
        const FRENCH = x => [undefined, undefined, 'deux', 'trois', 'quatre'][x];
        const ruleUnderTest = suffixPowerOfTen(3, FRENCH, '-mille', 'mille');

        it('should return an array containing ' +
            'the singular and ' +
            'the remainder in the division of the power of ten ' +
            'when given a multiple of the power of ten equal to 1', () => {
            expect(ruleUnderTest(1001)).toStrictEqual(['mille', 1]);
            expect(ruleUnderTest(1004)).toStrictEqual(['mille', 4]);
        });
        it('should return an array containing ' +
            'the converted multiple with the suffix and ' +
            'the remainder in the division of the power of ten ' +
            'when given a multiple of the power of ten greater than 1', () => {
            expect(ruleUnderTest(2000)).toStrictEqual(['deux-mille', 0]);
            expect(ruleUnderTest(2007)).toStrictEqual(['deux-mille', 7]);
            expect(ruleUnderTest(3000)).toStrictEqual(['trois-mille', 0]);
            expect(ruleUnderTest(4002)).toStrictEqual(['quatre-mille', 2]);
        });
        it('should return an array containing ' +
            'the empty string and the number ' +
            'when given a number smaller than the power of ten', () => {
            expect(ruleUnderTest(900)).toStrictEqual(['', 900]);
            expect(ruleUnderTest(907)).toStrictEqual(['', 907]);
        });
    });
});
