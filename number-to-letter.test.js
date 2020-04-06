const convertNumberToLetter = (number) => {
    const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let numberInLetter = '';
    if (number === 0) return "zero";
    if (number >= 1000) {
        let howMany = Math.trunc(number / 1000);
        numberInLetter += convertNumberToLetter(howMany) + " thousand ";
        number %= 1000;
    }
    if (number >= 100) {
        let howMany = Math.trunc(number / 100);
        numberInLetter += convertNumberToLetter(howMany) + " hundred ";
        number %= 100;
    }
    if (number >= 20) {
        let howManyTens = Math.trunc(number / 10);
        let howManyUnits = Math.trunc(number % 10);
        return (numberInLetter + tens[howManyTens] + (howManyUnits > 0 ? '-' + units[howManyUnits] : '')).trim();
    }
    if (number >= 10) {
        let howMany = Math.trunc(number - 10);
        return (numberInLetter + teens[howMany]).trim();
    }
    return (numberInLetter + units[number % 10]).trim();
};

describe("convertNumberToLetter()", () => {
    let examples = [
        [0, "zero"],
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
        [10, "ten"],
        [11, "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [14, "fourteen"],
        [15, "fifteen"],
        [16, "sixteen"],
        [17, "seventeen"],
        [18, "eighteen"],
        [19, "nineteen"],
        [20, "twenty"],
        [21, "twenty-one"],
        [22, "twenty-two"],
        [23, "twenty-three"],
        [27, "twenty-seven"],
        [29, "twenty-nine"],
        [30, "thirty"],
        [42, "forty-two"],
        [51, "fifty-one"],
        [68, "sixty-eight"],
        [74, "seventy-four"],
        [84, "eighty-four"],
        [99, "ninety-nine"],
        [100, "one hundred"],
        [200, "two hundred"],
        [300, "three hundred"],
        [800, "eight hundred"],
        [999, "nine hundred ninety-nine"],
        [1000, "one thousand"],
        [2000, "two thousand"],
    ];
    test.each(examples)('convertNumberToLetter(%i, %s)', (parameter, expectedResult) => {
        expect((convertNumberToLetter(parameter))).toBe(expectedResult);
    });
});