import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Calculator API endpoint
// Example: /calc?num1=10&num2=5&op=add
app.get('/calc', (req, res) => {
    // Parse query parameters
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const op = req.query.op;
    const format = req.query.format || 'json'; // Default to JSON

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            error: 'Invalid input. num1 and num2 must be numbers.'
        });
    }

    if (!op) {
        return res.status(400).json({
            error: 'Operation not specified. Use op=add, subtract, multiply, divide, or modulo.'
        });
    }

    let result;
    let expression = `${num1} ${op} ${num2}`;

    // Conditionals to perform operations
    if (op === 'add') {
        result = num1 + num2;
    } else if (op === 'subtract') {
        result = num1 - num2;
    } else if (op === 'multiply') {
        result = num1 * num2;
    } else if (op === 'divide') {
        if (num2 === 0) {
            return res.status(400).json({ error: 'Cannot divide by zero.' });
        }
        result = num1 / num2;
    } else if (op === 'modulo') {
        if (num2 === 0) {
            return res.status(400).json({ error: 'Cannot perform modulo with zero.' });
        }
        result = num1 % num2;
    } else {
        return res.status(400).json({
            error: 'Invalid operation. Use add, subtract, multiply, divide, or modulo.'
        });
    }

    // Return response based on format parameter
    if (format === 'text') {
        res.type('text/plain').send(`${expression} = ${result}`);
    } else {
        res.json({
            num1: num1,
            num2: num2,
            operator: op,
            result: result,
            expression: `${num1} ${op} ${num2} = ${result}`
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'Calculator API is running' });
});

// Start server
app.listen(port, () => {
    console.log(`Calculator API running at http://localhost:${port}`);
    console.log(`\nExample queries:`);
    console.log(`  - http://localhost:${port}/calc?num1=10&num2=5&op=add`);
    console.log(`  - http://localhost:${port}/calc?num1=10&num2=5&op=subtract`);
    console.log(`  - http://localhost:${port}/calc?num1=10&num2=5&op=multiply`);
    console.log(`  - http://localhost:${port}/calc?num1=10&num2=5&op=divide`);
    console.log(`  - http://localhost:${port}/calc?num1=10&num2=3&op=modulo&format=text`);
});
