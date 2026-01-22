"""Hello world functionality."""


def greet(name: str = "World") -> str:
    """
    Generate a greeting message.
    
    Args:
        name: The name to greet. Defaults to "World".
        
    Returns:
        A greeting message string.
    """
    return f"Hello, {name}!"


class HelloWorld:
    """A class that manages greetings."""
    
    def __init__(self, default_name: str = "World"):
        """
        Initialize HelloWorld with a default name.
        
        Args:
            default_name: The default name to use for greetings.
        """
        self.default_name = default_name
    
    def greet(self, name: str | None = None) -> str:
        """
        Generate a greeting message.
        
        Args:
            name: Optional name to greet. If None, uses default_name.
            
        Returns:
            A greeting message string.
        """
        target = name if name is not None else self.default_name
        return greet(target)
