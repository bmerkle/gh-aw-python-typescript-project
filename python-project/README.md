# Hello-lib Python

A simple hello world library for Python.

## Installation

```bash
pip install -e .
```

## Development Installation

```bash
pip install -e ".[dev]"
```

## Usage

### As a library

```python
from hello_lib import greet, HelloWorld

# Use the function
print(greet())  # Output: Hello, World!
print(greet("Alice"))  # Output: Hello, Alice!

# Use the class
hw = HelloWorld("Python")
print(hw.greet())  # Output: Hello, Python!
print(hw.greet("Bob"))  # Output: Hello, Bob!
```

### As a command-line tool

```bash
hello
# Output: Hello, World!

hello Alice
# Output: Hello, Alice!
```

## Running Tests

```bash
pytest
```

## Project Structure

```
python-project/
├── hello_lib/
│   ├── __init__.py
│   ├── __main__.py
│   └── hello.py
├── tests/
│   ├── __init__.py
│   └── test_hello.py
├── pyproject.toml
└── README.md
```
