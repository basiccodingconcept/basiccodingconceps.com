// src/data/glossary.ts

export interface GlossaryTerm {
  term: string;
  definition: string;
  example: string;
  relatedTerms: string[];
  category: "core" | "data" | "control-flow" | "functions" | "errors" | "general";
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Variable",
    definition: "A named container that stores a value in memory. Variables can hold different types of data and their values can be changed during program execution.",
    example: "let age = 25;",
    relatedTerms: ["Data Type", "Assignment", "Constant"],
    category: "core"
  },
  {
    term: "Constant",
    definition: "A variable whose value cannot be changed after it is set. Used for values that should remain fixed throughout the program.",
    example: "const PI = 3.14159;",
    relatedTerms: ["Variable", "Assignment"],
    category: "core"
  },
  {
    term: "Function",
    definition: "A reusable block of code that performs a specific task. Functions can accept inputs (parameters) and return outputs (return values).",
    example: "function greet(name) {\n  return \"Hello, \" + name;\n}",
    relatedTerms: ["Parameter", "Argument", "Return", "Scope"],
    category: "core"
  },
  {
    term: "Loop",
    definition: "A control structure that repeats a block of code multiple times. Common types include for loops, while loops, and do-while loops.",
    example: "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    relatedTerms: ["For Loop", "While Loop", "Iteration", "Break", "Continue"],
    category: "core"
  },
  {
    term: "Array",
    definition: "An ordered collection of values stored in a single variable. Each item has an index (position number) starting from 0.",
    example: "let colors = [\"red\", \"green\", \"blue\"];",
    relatedTerms: ["Index", "Element", "Length"],
    category: "core"
  },
  {
    term: "Object",
    definition: "A data structure that stores related data as key-value pairs. Objects can contain properties (data) and methods (functions).",
    example: "let person = {\n  name: \"Alice\",\n  age: 30\n};",
    relatedTerms: ["Property", "Method", "Key-Value Pair"],
    category: "core"
  },
  {
    term: "String",
    definition: "A sequence of characters (text) enclosed in quotes. Strings can include letters, numbers, symbols, and spaces.",
    example: "let greeting = \"Hello, World!\";",
    relatedTerms: ["Data Type", "Concatenation", "Template Literal"],
    category: "core"
  },
  {
    term: "Boolean",
    definition: "A data type with only two possible values: true or false. Used for logical operations and conditions.",
    example: "let isLoggedIn = true;",
    relatedTerms: ["Data Type", "Conditional", "Comparison Operator"],
    category: "core"
  },
  {
    term: "Data Type",
    definition: "A classification that specifies what kind of value a variable can hold, such as numbers, strings, booleans, or objects.",
    example: "typeof 42; // Returns \"number\"",
    relatedTerms: ["String", "Number", "Boolean", "Array", "Object"],
    category: "data"
  },
  {
    term: "Number",
    definition: "A data type representing numeric values. In JavaScript, this includes both integers and decimals.",
    example: "let price = 19.99;",
    relatedTerms: ["Data Type", "Integer", "Float"],
    category: "data"
  },
  {
    term: "Integer",
    definition: "A whole number without a decimal point. Examples include -5, 0, 42.",
    example: "let count = 42;",
    relatedTerms: ["Number", "Float", "Data Type"],
    category: "data"
  },
  {
    term: "Float",
    definition: "A number with a decimal point. Also called a floating-point number.",
    example: "let pi = 3.14159;",
    relatedTerms: ["Number", "Integer", "Data Type"],
    category: "data"
  },
  {
    term: "Null",
    definition: "A special value representing the intentional absence of any value. Different from undefined.",
    example: "let empty = null;",
    relatedTerms: ["Undefined", "Data Type"],
    category: "data"
  },
  {
    term: "Undefined",
    definition: "A value automatically assigned to variables that have been declared but not yet assigned a value.",
    example: "let x; // x is undefined",
    relatedTerms: ["Null", "Variable", "Data Type"],
    category: "data"
  },
  {
    term: "Index",
    definition: "The position of an element in an array or string. Indexes start at 0 (zero-indexed).",
    example: "colors[0]; // Returns the first item in the array",
    relatedTerms: ["Array", "Element", "String"],
    category: "data"
  },
  {
    term: "Element",
    definition: "A single item within an array. Each element has an index position.",
    example: "let nums = [1, 2, 3]; // 2 is an element at index 1",
    relatedTerms: ["Array", "Index"],
    category: "data"
  },
  {
    term: "Key-Value Pair",
    definition: "A fundamental data structure where a unique key is associated with a value. Objects are made of key-value pairs.",
    example: "{ name: \"Alice\" } // \"name\" is key, \"Alice\" is value",
    relatedTerms: ["Object", "Property", "Dictionary"],
    category: "data"
  },
  {
    term: "Property",
    definition: "A key-value pair that belongs to an object. It describes a characteristic of the object.",
    example: "person.name; // Accesses the name property",
    relatedTerms: ["Object", "Key-Value Pair", "Method"],
    category: "data"
  },
  {
    term: "Conditional",
    definition: "A statement that executes different code based on whether a condition is true or false. Includes if, else if, and else.",
    example: "if (age >= 18) {\n  grantAccess();\n} else {\n  denyAccess();\n}",
    relatedTerms: ["If Statement", "Boolean", "Comparison Operator"],
    category: "control-flow"
  },
  {
    term: "If Statement",
    definition: "A conditional that executes code only if a specified condition is true.",
    example: "if (score > 90) {\n  grade = \"A\";\n}",
    relatedTerms: ["Conditional", "Else", "Boolean"],
    category: "control-flow"
  },
  {
    term: "Else",
    definition: "A clause that executes when the condition in an if statement is false.",
    example: "if (x > 0) {\n  console.log(\"Positive\");\n} else {\n  console.log(\"Non-positive\");\n}",
    relatedTerms: ["If Statement", "Conditional"],
    category: "control-flow"
  },
  {
    term: "For Loop",
    definition: "A loop that repeats a specified number of times, controlled by an initialization, condition, and increment.",
    example: "for (let i = 0; i < 10; i++) {\n  console.log(i);\n}",
    relatedTerms: ["Loop", "While Loop", "Iteration"],
    category: "control-flow"
  },
  {
    term: "While Loop",
    definition: "A loop that continues executing as long as its condition remains true.",
    example: "while (count > 0) {\n  count--;\n}",
    relatedTerms: ["Loop", "For Loop", "Iteration"],
    category: "control-flow"
  },
  {
    term: "Iteration",
    definition: "One complete execution of a loop. Also refers to the process of repeating steps.",
    example: "let loopCount = 0;\n// Each cycle is an iteration",
    relatedTerms: ["Loop", "For Loop", "While Loop"],
    category: "control-flow"
  },
  {
    term: "Break",
    definition: "A statement that immediately exits a loop, stopping all remaining iterations.",
    example: "if (found) {\n  break;\n}",
    relatedTerms: ["Loop", "Continue"],
    category: "control-flow"
  },
  {
    term: "Continue",
    definition: "A statement that skips the rest of the current iteration and moves to the next one.",
    example: "if (i === 5) {\n  continue;\n}",
    relatedTerms: ["Loop", "Break", "Iteration"],
    category: "control-flow"
  },
  {
    term: "Switch",
    definition: "A control structure that selects one of many code blocks to execute based on a value.",
    example: "switch (day) {\n  case 1:\n    console.log(\"Mon\");\n    break;\n}",
    relatedTerms: ["Conditional", "If Statement", "Case"],
    category: "control-flow"
  },
  {
    term: "Parameter",
    definition: "A variable declared in a function definition that acts as a placeholder for values passed to the function.",
    example: "function greet(name) // \"name\" is a parameter",
    relatedTerms: ["Argument", "Function"],
    category: "functions"
  },
  {
    term: "Argument",
    definition: "The actual value passed to a function when it is called. Arguments fill in the parameters.",
    example: "greet(\"Alice\"); // \"Alice\" is an argument",
    relatedTerms: ["Parameter", "Function"],
    category: "functions"
  },
  {
    term: "Return",
    definition: "A statement that exits a function and optionally sends a value back to where the function was called.",
    example: "return sum;",
    relatedTerms: ["Function", "Return Value"],
    category: "functions"
  },
  {
    term: "Return Value",
    definition: "The value that a function sends back after it finishes executing.",
    example: "Math.sqrt(16); // Returns 4",
    relatedTerms: ["Return", "Function"],
    category: "functions"
  },
  {
    term: "Scope",
    definition: "The area of code where a variable can be accessed. Variables can have local (function) or global scope.",
    example: "let x = 5; // Global scope\nfunction f() { let y = 10; } // y is Local",
    relatedTerms: ["Variable", "Local Variable", "Global Variable"],
    category: "functions"
  },
  {
    term: "Local Variable",
    definition: "A variable that exists only within a specific function or block and cannot be accessed outside it.",
    example: "function test() {\n  let x = 5; // Local\n}",
    relatedTerms: ["Scope", "Global Variable", "Variable"],
    category: "functions"
  },
  {
    term: "Global Variable",
    definition: "A variable declared outside any function that can be accessed from anywhere in the program.",
    example: "let total = 0; // Global variable",
    relatedTerms: ["Scope", "Local Variable", "Variable"],
    category: "functions"
  },
  {
    term: "Method",
    definition: "A function that belongs to an object. Methods define behaviors that the object can perform.",
    example: "\"hello\".toUpperCase(); // toUpperCase is a method",
    relatedTerms: ["Function", "Object", "Property"],
    category: "functions"
  },
  {
    term: "Callback",
    definition: "A function passed as an argument to another function, to be executed later.",
    example: "button.addEventListener(\"click\", () => {\n  console.log(\"Clicked!\");\n});",
    relatedTerms: ["Function", "Argument", "Asynchronous"],
    category: "functions"
  },
  {
    term: "Arrow Function",
    definition: "A shorter syntax for writing functions in JavaScript using the => notation.",
    example: "const double = (x) => x * 2;",
    relatedTerms: ["Function", "Parameter", "Return"],
    category: "functions"
  },
  {
    term: "Bug",
    definition: "An error or flaw in a program that causes it to behave unexpectedly or incorrectly.",
    example: "An infinite loop that crashes the page is a bug",
    relatedTerms: ["Debug", "Error", "Exception"],
    category: "errors"
  },
  {
    term: "Debug",
    definition: "The process of finding and fixing bugs in code. Essential programming skill.",
    example: "console.log(variableName); // debugging tool",
    relatedTerms: ["Bug", "Error", "Debugger"],
    category: "errors"
  },
  {
    term: "Syntax Error",
    definition: "An error that occurs when code violates the rules of the programming language, preventing it from running.",
    example: "let x = ; // Syntax error",
    relatedTerms: ["Error", "Runtime Error", "Bug"],
    category: "errors"
  },
  {
    term: "Runtime Error",
    definition: "An error that occurs while the program is running, often due to invalid operations.",
    example: "calling y.toUpperCase() where y is undefined",
    relatedTerms: ["Error", "Syntax Error", "Exception"],
    category: "errors"
  },
  {
    term: "Exception",
    definition: "An error condition that disrupts the normal flow of program execution.",
    example: "A division by zero exception or reference exception",
    relatedTerms: ["Error", "Try-Catch", "Runtime Error"],
    category: "errors"
  },
  {
    term: "Try-Catch",
    definition: "A structure for handling exceptions. Code in \"try\" is attempted, and if it fails, \"catch\" handles the error.",
    example: "try {\n  riskyCode();\n} catch (error) {\n  console.error(error);\n}",
    relatedTerms: ["Exception", "Error", "Throw"],
    category: "errors"
  },
  {
    term: "Console",
    definition: "A development tool that displays output messages, errors, and allows debugging. Accessed via browser developer tools.",
    example: "console.log(\"Debug message\");",
    relatedTerms: ["Debug", "Log"],
    category: "errors"
  },
  {
    term: "Algorithm",
    definition: "A step-by-step procedure or formula for solving a problem. The logic behind how a program works.",
    example: "A binary search algorithm to find an item quickly",
    relatedTerms: ["Logic", "Pseudocode"],
    category: "general"
  },
  {
    term: "Code",
    definition: "Instructions written in a programming language that tell a computer what to do.",
    example: "print(\"Hello, World!\")",
    relatedTerms: ["Programming", "Syntax"],
    category: "general"
  },
  {
    term: "Syntax",
    definition: "The rules and structure of a programming language. Like grammar for code.",
    example: "JavaScript requires parentheses around if conditions",
    relatedTerms: ["Code", "Syntax Error"],
    category: "general"
  },
  {
    term: "Compile",
    definition: "The process of converting source code into machine code that a computer can execute.",
    example: "Translating C++ code into binary executable (.exe)",
    relatedTerms: ["Execute", "Interpreter"],
    category: "general"
  },
  {
    term: "Execute",
    definition: "To run a program or piece of code, causing the computer to perform the specified instructions.",
    example: "Clicking 'Run' compiles and executes the program",
    relatedTerms: ["Compile", "Run"],
    category: "general"
  },
  {
    term: "IDE",
    definition: "Integrated Development Environment - a software application that provides tools for writing, testing, and debugging code.",
    example: "VS Code, PyCharm, or Eclipse",
    relatedTerms: ["Code Editor", "Debug"],
    category: "general"
  },
  {
    term: "Comment",
    definition: "Text in code that is ignored by the computer. Used to explain code for human readers.",
    example: "// This explains the following logic",
    relatedTerms: ["Code", "Documentation"],
    category: "general"
  },
  {
    term: "Operator",
    definition: "A symbol that performs an operation on values. Includes arithmetic (+, -), comparison (>, ==), and logical (&&, ||) operators.",
    example: "let sum = 5 + 3;",
    relatedTerms: ["Expression", "Assignment"],
    category: "general"
  },
  {
    term: "Assignment",
    definition: "The act of giving a value to a variable using the = operator.",
    example: "let score = 100;",
    relatedTerms: ["Variable", "Operator"],
    category: "general"
  },
  {
    term: "Expression",
    definition: "A combination of values, variables, and operators that evaluates to a single value.",
    example: "let val = 10 + 20; // 10 + 20 is an expression",
    relatedTerms: ["Operator", "Value"],
    category: "general"
  },
  {
    term: "Statement",
    definition: "A complete instruction that performs an action. Programs are made up of statements.",
    example: "let x = 5; // A variable declaration statement",
    relatedTerms: ["Expression", "Code"],
    category: "general"
  },
  {
    term: "Concatenation",
    definition: "Joining two or more strings together to create a new string.",
    example: "\"Hello \" + \"there\"; // produces \"Hello there\"",
    relatedTerms: ["String", "Operator"],
    category: "general"
  },
  {
    term: "Template Literal",
    definition: "A string syntax using backticks that allows embedding expressions and multiline strings.",
    example: "`Hello, ${name}!`",
    relatedTerms: ["String", "Concatenation"],
    category: "general"
  },
  {
    term: "Comparison Operator",
    definition: "An operator that compares two values and returns true or false. Includes ==, ===, !=, <, >, <=, >=.",
    example: "let res = 10 > 5; // res is true",
    relatedTerms: ["Operator", "Boolean", "Conditional"],
    category: "general"
  },
  {
    term: "Logical Operator",
    definition: "An operator that combines boolean values. AND (&&), OR (||), and NOT (!) are logical operators.",
    example: "let ok = true && false; // ok is false",
    relatedTerms: ["Operator", "Boolean", "Conditional"],
    category: "general"
  },
  {
    term: "API",
    definition: "Application Programming Interface - a set of functions and protocols that allows programs to communicate with each other.",
    example: "fetch(\"https://api.github.com/users/octocat\")",
    relatedTerms: ["Function", "Library"],
    category: "general"
  },
  {
    term: "Library",
    definition: "A collection of pre-written code that can be reused in programs to add functionality.",
    example: "lodash or React library",
    relatedTerms: ["API", "Framework", "Module"],
    category: "general"
  },
  {
    term: "Framework",
    definition: "A comprehensive platform that provides structure and tools for building applications.",
    example: "Angular, Next.js, or Django",
    relatedTerms: ["Library", "API"],
    category: "general"
  }
];
