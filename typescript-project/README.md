# Hello-lib TypeScript

A simple hello world library for TypeScript/Node.js.

## Installation

```bash
npm install
```

## Build

```bash
npm run build
```

## Usage

### As a library

```typescript
import { greet, HelloWorld } from 'hello-lib';

// Use the function
console.log(greet());  // Output: Hello, World!
console.log(greet('Alice'));  // Output: Hello, Alice!

// Use the class
const hw = new HelloWorld('TypeScript');
console.log(hw.greet());  // Output: Hello, TypeScript!
console.log(hw.greet('Bob'));  // Output: Hello, Bob!
```

### As a command-line tool

After building the project:

```bash
node dist/cli.js
# Output: Hello, World!

node dist/cli.js Alice
# Output: Hello, Alice!
```

## Running Tests

```bash
npm test
```

For coverage:

```bash
npm run test:coverage
```

## Project Structure

```
typescript-project/
├── src/
│   ├── index.ts
│   ├── cli.ts
│   └── hello.ts
├── tests/
│   └── hello.test.ts
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```
