const toCelsius = (f) => {
    if (!Number.isFinite(f)) throw new TypeError('F no es un numero finito');
    const result = (f - 32) * 5 / 9;
    return Number.parseFloat(result.toFixed(1));
};

const toFahrenheit = (c) => {
    if (!Number.isFinite(c)) throw new TypeError('C no es un numero finito');
    const result = (c * 9 / 5) + 32;
    return Number.parseFloat(result.toFixed(1));
};

const movingAverage = (series, window) => {
    if (!Array.isArray(series) || !series.every(Number.isFinite)) {
        throw new TypeError('La serie debe ser un arreglo de números');
    }
    if (!Number.isInteger(window) || window < 2 || window > series.length) {
        throw new RangeError('Ventana fuera de rango');
    }
    const result = [];
    for (let i = 0; i <= series.length - window; i++) {
        const subSet = series.slice(i, i + window);
        const sum = subSet.reduce((a, b) => a + b, 0);
        result.push(Number.parseFloat((sum / window).toFixed(2)));
    }
    return result;
};

// Cambia export por module.exports
module.exports = { toCelsius, toFahrenheit, movingAverage };