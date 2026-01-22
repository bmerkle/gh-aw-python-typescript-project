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
  it('should initialize with default name', () => {
    const hw = new HelloWorld();
    expect((hw as any).defaultName).toBe('World');
  });

  it('should initialize with custom name', () => {
    const hw = new HelloWorld('TypeScript');
    expect((hw as any).defaultName).toBe('TypeScript');
  });

  it('should greet with default name', () => {
    const hw = new HelloWorld();
    const result = hw.greet();
    expect(result).toBe('Hello, World!');
  });

  it('should greet with custom default name', () => {
    const hw = new HelloWorld('TypeScript');
    const result = hw.greet();
    expect(result).toBe('Hello, TypeScript!');
  });

  it('should greet with name override', () => {
    const hw = new HelloWorld('TypeScript');
    const result = hw.greet('Alice');
    expect(result).toBe('Hello, Alice!');
  });
});
