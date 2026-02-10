

const { toCelsius, toFahrenheit, movingAverage } = require('./clima');

describe('Pruebas de Clima & Conversión', () => {
    test('Conversiones de temperatura', () => {
        expect(toCelsius(32)).toBe(0.0);
        expect(toFahrenheit(0)).toBe(32.0);
        expect(toFahrenheit(100)).toBe(212.0);
        expect(toCelsius(-40)).toBe(-40.0);
    });

    test('Validación de errores en temperaturas', () => {
        expect(() => toCelsius('32')).toThrow(TypeError);
        expect(() => toFahrenheit(Infinity)).toThrow(TypeError);
    });

    test('Media móvil simple (Casos referencia)', () => {
        expect(movingAverage([10, 20, 30, 40], 2)).toEqual([15.00, 25.00, 35.00]);
        expect(movingAverage([1, 2, 3], 3)).toEqual([2.00]);
    });

});
