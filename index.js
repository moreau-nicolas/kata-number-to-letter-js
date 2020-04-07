const converters = require('./converter-registry')

function convertNumberToLetter(language, number) {
    const converter = converters.findByLanguage(language);
    return converter(number);
}

module.exports = {
    convertNumberToLetter,
};
