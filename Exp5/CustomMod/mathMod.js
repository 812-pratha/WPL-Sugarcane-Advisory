exports.add = function(a, b) { return a + b; };
exports.subtract = function(a, b) { return a - b; };
exports.multiply = function(a, b) { return a * b; };
exports.divide = function(a, b) { return b !== 0 ? a / b : 'Cannot divide by zero'; };
