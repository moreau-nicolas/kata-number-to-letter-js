const {
    registerConverter,
    findByLanguage,
} = require('./converter-registry');


describe('Converter registry', () => {

    it('should let us retrieve a previously registered converter', () => {
        registerConverter('English', (number) => number === 42 ? 'forty-two' : undefined);
        const converter = findByLanguage('English');

        expect(converter(42)).toStrictEqual('forty-two');
    });
});
