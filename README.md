# Online Calculator - API Guide

## Backend Calculator API (Node.js/Express)

### Installation

```bash
npm install
```

### Running the Server

```bash
npm start
```

The server will run at `http://localhost:3000`

### API Endpoints

#### GET `/calc`
Performs calculations using query string parameters.

**Query Parameters:**
- `num1` (required): First number
- `num2` (required): Second number  
- `op` (required): Operation (add, subtract, multiply, divide, modulo)
- `format` (optional): Response format - `json` (default) or `text`

### Examples

#### 1. Addition (JSON Response)
```
http://localhost:3000/calc?num1=10&num2=5&op=add
```

**Response:**
```json
{
  "num1": 10,
  "num2": 5,
  "operator": "add",
  "result": 15,
  "expression": "10 add 5 = 15"
}
```

#### 2. Subtraction (JSON Response)
```
http://localhost:3000/calc?num1=10&num2=5&op=subtract
```

**Response:**
```json
{
  "num1": 10,
  "num2": 5,
  "operator": "subtract",
  "result": 5,
  "expression": "10 subtract 5 = 5"
}
```

#### 3. Multiplication (JSON Response)
```
http://localhost:3000/calc?num1=10&num2=5&op=multiply
```

**Response:**
```json
{
  "num1": 10,
  "num2": 5,
  "operator": "multiply",
  "result": 50,
  "expression": "10 multiply 5 = 50"
}
```

#### 4. Division (JSON Response)
```
http://localhost:3000/calc?num1=10&num2=5&op=divide
```

**Response:**
```json
{
  "num1": 10,
  "num2": 5,
  "operator": "divide",
  "result": 2,
  "expression": "10 divide 5 = 2"
}
```

#### 5. Modulo (Text Response)
```
http://localhost:3000/calc?num1=10&num2=3&op=modulo&format=text
```

**Response:**
```
10 modulo 3 = 1
```

### Supported Operations

| Operation | Code | Example |
|-----------|------|---------|
| Addition | `add` | `?op=add` |
| Subtraction | `subtract` | `?op=subtract` |
| Multiplication | `multiply` | `?op=multiply` |
| Division | `divide` | `?op=divide` |
| Modulo | `modulo` | `?op=modulo` |

### Error Handling

**Invalid Input:**
```json
{
  "error": "Invalid input. num1 and num2 must be numbers."
}
```

**Division by Zero:**
```json
{
  "error": "Cannot divide by zero."
}
```

**Invalid Operation:**
```json
{
  "error": "Invalid operation. Use add, subtract, multiply, divide, or modulo."
}
```

## Key Concepts

1. **Query Strings**: Parameters passed in the URL after `?`
2. **Parsing**: Using `req.query` to extract parameters from the URL
3. **Conditionals**: IF/ELSE statements to determine which operation to perform
4. **Response**: Returning data in JSON or plain text format

## Frontend

Open `index.html` in your browser for the interactive calculator UI.

## Project Structure

```
├── index.html          # Frontend calculator UI
├── styles.css          # Calculator styling
├── script.js           # Frontend calculator logic
├── server.js           # Express backend API
└── package.json        # Node.js dependencies
```
