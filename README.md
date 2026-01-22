# gh-aw-python-typescript-project

A parallel implementation of a hello-world library in both Python and TypeScript.

## Projects

This repository contains two independent projects with similar functionality:

### Python Project

A Python package called `hello-lib` with:
- A simple hello world library
- Command-line interface
- Comprehensive test suite using pytest

**Location**: `python-project/`

**Quick start**:
```bash
cd python-project
pip install -e ".[dev]"
pytest
hello
```

See [python-project/README.md](python-project/README.md) for details.

### TypeScript Project

A TypeScript/Node.js package called `hello-lib` with:
- A simple hello world library
- Command-line interface
- Comprehensive test suite using Jest

**Location**: `typescript-project/`

**Quick start**:
```bash
cd typescript-project
npm install
npm run build
npm test
node dist/cli.js
```

See [typescript-project/README.md](typescript-project/README.md) for details.

## Features

Both projects implement:
- ✅ A `greet()` function that returns greeting messages
- ✅ A `HelloWorld` class for managing greetings
- ✅ Command-line interface for greeting users
- ✅ Comprehensive test coverage (8 tests each)
- ✅ Proper packaging and distribution setup

## Project Structure

```
gh-aw-python-typescript-project/
├── python-project/          # Python implementation
│   ├── hello_lib/          # Package source
│   ├── tests/              # Test suite
│   ├── pyproject.toml      # Package configuration
│   └── README.md
├── typescript-project/      # TypeScript implementation
│   ├── src/                # Source code
│   ├── tests/              # Test suite
│   ├── package.json        # Package configuration
│   ├── tsconfig.json       # TypeScript configuration
│   └── README.md
└── README.md               # This file
```
