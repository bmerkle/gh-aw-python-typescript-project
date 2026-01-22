import { greet, HelloWorld } from '../src/hello';

describe('greet function', () => {
  it('should greet with default parameter', () => {
    const result = greet();
    expect(result).toBe('Hello, World!');
  });

  it('should greet with a custom name', () => {
    const result = greet('Alice');
    expect(result).toBe('Hello, Alice!');
  });

  it('should greet with an empty string', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });
});

describe('HelloWorld class', () => {
  it('should greet with default name when initialized without arguments', () => {
    const hw = new HelloWorld();
    const result = hw.greet();
    expect(result).toBe('Hello, World!');
  });

  it('should greet with custom default name when initialized with a name', () => {
    const hw = new HelloWorld('TypeScript');
    const result = hw.greet();
    expect(result).toBe('Hello, TypeScript!');
  });

  it('should greet with provided name when called with an argument', () => {
    const hw = new HelloWorld();
    const result = hw.greet('Alice');
    expect(result).toBe('Hello, Alice!');
  });

  it('should allow overriding the default name in greet call', () => {
    const hw = new HelloWorld('TypeScript');
    const result = hw.greet('Bob');
    expect(result).toBe('Hello, Bob!');
  });

  it('should greet with empty string when provided', () => {
    const hw = new HelloWorld('TypeScript');
    const result = hw.greet('');
    expect(result).toBe('Hello, !');
  });
});
