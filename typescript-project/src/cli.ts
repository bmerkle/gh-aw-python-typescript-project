#!/usr/bin/env node

import { greet } from './hello';

/**
 * Main entry point for the hello command.
 */
function main(): void {
  const args = process.argv.slice(2);
  
  if (args.length > 0) {
    const name = args.join(' ');
    console.log(greet(name));
  } else {
    console.log(greet());
  }
}

main();
