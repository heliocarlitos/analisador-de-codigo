
export type SupportedLanguage = 
  | 'html' 
  | 'css' 
  | 'javascript' 
  | 'java' 
  | 'cpp' 
  | 'csharp' 
  | 'python';

export interface LanguageOption {
  id: SupportedLanguage;
  label: string;
  extension: string;
  mime: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { id: 'html', label: 'HTML', extension: 'html', mime: 'text/html' },
  { id: 'css', label: 'CSS', extension: 'css', mime: 'text/css' },
  { id: 'javascript', label: 'JavaScript', extension: 'js', mime: 'text/javascript' },
  { id: 'java', label: 'Java', extension: 'java', mime: 'text/x-java' },
  { id: 'cpp', label: 'C++', extension: 'cpp', mime: 'text/x-c++src' },
  { id: 'csharp', label: 'C#', extension: 'cs', mime: 'text/x-csharp' },
  { id: 'python', label: 'Python', extension: 'py', mime: 'text/x-python' },
];

export const getLanguageById = (id: SupportedLanguage): LanguageOption => {
  return SUPPORTED_LANGUAGES.find(lang => lang.id === id) || SUPPORTED_LANGUAGES[0];
};

export const getLanguageSample = (lang: SupportedLanguage): string => {
  switch (lang) {
    case 'html':
      return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>This is a sample HTML document.</p>
</body>
</html>`;
    case 'css':
      return `body {
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
  color: #333;
}

h1 {
  color: navy;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}`;
    case 'javascript':
      return `// A simple function to calculate factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Print factorials from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(\`Factorial of \${i} is \${factorial(i)}\`);
}`;
    case 'java':
      return `public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
    
    for (int i = 1; i <= 5; i++) {
      System.out.println("Factorial of " + i + " is " + factorial(i));
    }
  }
  
  public static int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
}`;
    case 'cpp':
      return `#include <iostream>

int factorial(int n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

int main() {
  std::cout << "Hello, World!" << std::endl;
  
  for (int i = 1; i <= 5; i++) {
    std::cout << "Factorial of " << i << " is " << factorial(i) << std::endl;
  }
  
  return 0;
}`;
    case 'csharp':
      return `using System;

class Program {
  static int Factorial(int n) {
    if (n <= 1) return 1;
    return n * Factorial(n - 1);
  }
  
  static void Main(string[] args) {
    Console.WriteLine("Hello, World!");
    
    for (int i = 1; i <= 5; i++) {
      Console.WriteLine($"Factorial of {i} is {Factorial(i)}");
    }
  }
}`;
    case 'python':
      return `def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print("Hello, World!")

for i in range(1, 6):
    print(f"Factorial of {i} is {factorial(i)}")`;
    default:
      return '';
  }
};
