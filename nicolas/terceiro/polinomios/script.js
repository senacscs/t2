function parsePolynomial(poly) {
    const terms = poly.match(/([+-]?\d*x\^\d+)|([+-]?\d*x)|([+-]?\d+)/g);
    const polynomial = {};
    terms.forEach(term => {
        let [coeff, power] = term.split('x^');
        power = power || (term.includes('x') ? '1' : '0');
        coeff = coeff.includes('x') ? coeff.replace('x', '') || '1' : coeff;
        coeff = coeff === '+' ? 1 : (coeff === '-' ? -1 : parseInt(coeff, 10));
        power = parseInt(power, 10);
        polynomial[power] = (polynomial[power] || 0) + coeff;
    });
    return polynomial;
}

function addPolynomials() {
    const poly1 = document.getElementById('polynomial1').value;
    const poly2 = document.getElementById('polynomial2').value;
    
    const poly1Parsed = parsePolynomial(poly1);
    const poly2Parsed = parsePolynomial(poly2);
    
    const result = {};
    
    for (let power in poly1Parsed) {
        result[power] = (result[power] || 0) + poly1Parsed[power];
    }
    
    for (let power in poly2Parsed) {
        result[power] = (result[power] || 0) + poly2Parsed[power];
    }
    
    const resultArray = [];
    
    for (let power in result) {
        const coeff = result[power];
        if (coeff !== 0) {
            const term = `${coeff}x^${power}`;
            resultArray.push(term);
        }
    }
    
    resultArray.sort((a, b) => b.split('x^')[1] - a.split('x^')[1]);
    
    const resultString = resultArray.join(' + ').replace(/\+ -/g, '- ');
    
    document.getElementById('result').textContent = `Resultado: ${resultString}`;
}