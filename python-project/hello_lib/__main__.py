"""Command-line interface for hello-lib."""

import sys
from .hello import greet


def main():
    """Main entry point for the hello command."""
    if len(sys.argv) > 1:
        name = " ".join(sys.argv[1:])
        print(greet(name))
    else:
        print(greet())


if __name__ == "__main__":
    main()
