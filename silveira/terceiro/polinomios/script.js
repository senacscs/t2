// script.js
function parsePolynomial(poly) {
    const terms = poly.match(/[+-]?[^-+]+/g);
    const parsed = terms.map(term => {
        const [coeff, variable] = term.split('x^');
        return {
            coeff: parseFloat(coeff),
            exp: variable ? parseInt(variable) : 0
        };
    });
    return parsed;
}

function addPolynomials() {
    const poly1 = document.getElementById('polynomial1').value;
    const poly2 = document.getElementById('polynomial2').value;

    const parsedPoly1 = parsePolynomial(poly1);
    const parsedPoly2 = parsePolynomial(poly2);

    const result = combinePolynomials(parsedPoly1, parsedPoly2, (a, b) => a + b);

    document.getElementById('result').innerText = formatPolynomial(result);
}

function subtractPolynomials() {
    const poly1 = document.getElementById('polynomial1').value;
    const poly2 = document.getElementById('polynomial2').value;

    const parsedPoly1 = parsePolynomial(poly1);
    const parsedPoly2 = parsePolynomial(poly2);

    const result = combinePolynomials(parsedPoly1, parsedPoly2, (a, b) => a - b);

    document.getElementById('result').innerText = formatPolynomial(result);
}

function multiplyPolynomials() {
    const poly1 = document.getElementById('polynomial1').value;
    const poly2 = document.getElementById('polynomial2').value;

    const parsedPoly1 = parsePolynomial(poly1);
    const parsedPoly2 = parsePolynomial(poly2);

    const result = multiply(parsedPoly1, parsedPoly2);

    document.getElementById('result').innerText = formatPolynomial(result);
}

function combinePolynomials(poly1, poly2, operation) {
    const result = {};
    
    poly1.forEach(term => {
        result[term.exp] = (result[term.exp] || 0) + term.coeff;
    });

    poly2.forEach(term => {
        result[term.exp] = operation(result[term.exp] || 0, term.coeff);
    });

    return Object.entries(result).map(([exp, coeff]) => ({
        coeff: coeff,
        exp: parseInt(exp)
    })).sort((a, b) => b.exp - a.exp);
}

function multiply(poly1, poly2) {
    const result = {};

    poly1.forEach(term1 => {
        poly2.forEach(term2 => {
            const exp = term1.exp + term2.exp;
            const coeff = term1.coeff * term2.coeff;
            result[exp] = (result[exp] || 0) + coeff;
        });
    });

    return Object.entries(result).map(([exp, coeff]) => ({
        coeff: coeff,
        exp: parseInt(exp)
    })).sort((a, b) => b.exp - a.exp);
}

function formatPolynomial(poly) {
    return poly.map(term => {
        let str = '';
        if (term.coeff !== 0) {
            if (term.exp === 0) {
                str = `${term.coeff}`;
            } else if (term.exp === 1) {
                str = `${term.coeff}x`;
            } else {
                str = `${term.coeff}x^${term.exp}`;
            }
        }
        return str;
    }).filter(str => str !== '').join(' + ').replace(/\+ -/g, '- ');
}
