/**
 * Generate a greeting message.
 * @param name - The name to greet. Defaults to "World".
 * @returns A greeting message string.
 */
export function greet(name: string = "World"): string {
  return `Hello, ${name}!`;
}

/**
 * A class that manages greetings.
 */
export class HelloWorld {
  private defaultName: string;

  /**
   * Initialize HelloWorld with a default name.
   * @param defaultName - The default name to use for greetings.
   */
  constructor(defaultName: string = "World") {
    this.defaultName = defaultName;
  }

  /**
   * Generate a greeting message.
   * @param name - Optional name to greet. If not provided, uses defaultName.
   * @returns A greeting message string.
   */
  greet(name?: string): string {
    const target = name !== undefined ? name : this.defaultName;
    return greet(target);
  }
}
