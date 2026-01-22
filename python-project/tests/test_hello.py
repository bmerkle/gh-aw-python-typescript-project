"""Tests for hello module."""

import pytest
from hello_lib import greet, HelloWorld


class TestGreetFunction:
    """Test cases for the greet function."""
    
    def test_greet_default(self):
        """Test greet with default parameter."""
        result = greet()
        assert result == "Hello, World!"
    
    def test_greet_with_name(self):
        """Test greet with a custom name."""
        result = greet("Alice")
        assert result == "Hello, Alice!"
    
    def test_greet_with_empty_string(self):
        """Test greet with an empty string."""
        result = greet("")
        assert result == "Hello, !"


class TestHelloWorldClass:
    """Test cases for the HelloWorld class."""
    
    def test_init_default(self):
        """Test HelloWorld initialization with default."""
        hw = HelloWorld()
        assert hw.default_name == "World"
    
    def test_init_custom(self):
        """Test HelloWorld initialization with custom name."""
        hw = HelloWorld("Python")
        assert hw.default_name == "Python"
    
    def test_greet_default(self):
        """Test HelloWorld.greet with default name."""
        hw = HelloWorld()
        result = hw.greet()
        assert result == "Hello, World!"
    
    def test_greet_custom_default(self):
        """Test HelloWorld.greet with custom default name."""
        hw = HelloWorld("Python")
        result = hw.greet()
        assert result == "Hello, Python!"
    
    def test_greet_with_override(self):
        """Test HelloWorld.greet with name override."""
        hw = HelloWorld("Python")
        result = hw.greet("Alice")
        assert result == "Hello, Alice!"
