const numberToLetterConvertersByLanguage = {};

function register(language, converter) {
    numberToLetterConvertersByLanguage[language] = converter;
}

function find(language) {
    return numberToLetterConvertersByLanguage[language];
}

module.exports = {
    registerConverter: register,
    findByLanguage : find,
};
