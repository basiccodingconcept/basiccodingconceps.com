/* src/data/kids.ts */

export interface KidsQuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface KidsLessonData {
  num: number;
  slug: string;
  title: string;
  borderClass: string;
  color: string;
  analogyTitle: string;
  analogyDesc: string;
  explanation: string;
  instructions: string;
  quizQuestions: KidsQuizQuestion[];
  nextSlug: string | null;
  prevSlug: string | null;
}

export const kidsLessons: Record<string, KidsLessonData> = {
  "what-is-coding": {
    num: 1,
    slug: "what-is-coding",
    title: "What is Coding?",
    borderClass: "borderViolet",
    color: "#8b5cf6",
    analogyTitle: "Talking to a Friendly Robot Explorer",
    analogyDesc: "Imagine you have a small robot friend named Robby. Robby wants to find the hidden treasure, but he doesn't know the way! You have to write down step-by-step instructions for him (like 'Go Forward', 'Turn Right'). Writing these instructions is exactly what coding is!",
    explanation: "Computers are super fast but not very smart on their own. They need us to tell them exactly what to do using code. Coding is the language we use to speak to computers and create games, websites, and apps!",
    instructions: "Help Robby reach the chest! Click the direction buttons to build your code, then press 'Run Code' to watch Robby walk!",
    quizQuestions: [
      {
        question: "Who runs the code instructions that you write?",
        options: ["Your pet dog", "The computer/robot", "Nobody, it runs itself", "The TV screen"],
        correctAnswer: 1,
        explanation: "Computers and robots read and follow the instructions we write in our code!"
      },
      {
        question: "What language do computers speak natively at the hardware level?",
        options: ["English", "Binary (0s and 1s)", "Spanish", "Robotic Sounds"],
        correctAnswer: 1,
        explanation: "Computers think using electronic switches that are either ON (1) or OFF (0). This is called Binary!"
      },
      {
        question: "Is writing code similar to writing a baking recipe?",
        options: ["Yes, because both are step-by-step instructions", "No, coding has nothing to do with steps", "Only if you are baking cakes on a computer", "Yes, but only in Python"],
        correctAnswer: 0,
        explanation: "Just like a recipe tells you step-by-step how to make cookies, code tells the computer step-by-step how to run a program!"
      }
    ],
    nextSlug: "variables",
    prevSlug: null
  },
  "variables": {
    num: 2,
    slug: "variables",
    title: "Variables are Boxes",
    borderClass: "borderAmber",
    color: "#f59e0b",
    analogyTitle: "Toy Boxes with Labels",
    analogyDesc: "Imagine you have a cardboard box. You write 'myFavoriteToy' on the outside with a marker. Inside, you put a toy car. Later, you take the car out and put a teddy bear inside. The box is still called 'myFavoriteToy', but what's inside has changed! That box is a variable.",
    explanation: "In coding, a variable is a named storage container in the computer's memory. You give it a name (a label) and put information inside it (like numbers or words). You can check it or change it anytime you want!",
    instructions: "Label your box and pick a toy to store inside. See how the box holds your variable value!",
    quizQuestions: [
      {
        question: "What is a variable like in real life?",
        options: ["A labeled storage box", "A flat pancake", "A computer keyboard", "A pair of sunglasses"],
        correctAnswer: 0,
        explanation: "A variable is like a labeled storage box that holds information for us to use later."
      },
      {
        question: "Can you change what is stored inside a variable box?",
        options: ["No, once it is inside, it is locked forever", "Yes, you can swap it with new values anytime", "Only if the variable is named 'change'", "Only in Python"],
        correctAnswer: 1,
        explanation: "Yes! Variables can be reassigned or changed as many times as you need while your program runs."
      },
      {
        question: "If you store 'Teddy Bear' in a variable box labeled 'gift', what value does 'gift' hold?",
        options: ["'box'", "'gift'", "'Teddy Bear'", "undefined"],
        correctAnswer: 2,
        explanation: "The variable box 'gift' holds its contents, which is the value 'Teddy Bear'!"
      }
    ],
    nextSlug: "data-types",
    prevSlug: "what-is-coding"
  },
  "data-types": {
    num: 3,
    slug: "data-types",
    title: "Different Types of Stuff",
    borderClass: "borderBlue",
    color: "#3b82f6",
    analogyTitle: "Sorting Toys, Candies, and Switches",
    analogyDesc: "If you had a bag of toys, a box of crayons, and a light switch, you wouldn't mix them up! A string of text is like writing a letter, a number is like counting your marbles, and a boolean is like a simple light switch that is either ON (true) or OFF (false).",
    explanation: "Computers handle different kinds of information. We call these 'Data Types'. Strings are text wrapped in quotes (like `\"Hello\"`), Numbers are count values (like `10`), and Booleans are true/false switches.",
    instructions: "Drag and drop the items into the correct cargo trains: Numbers, Strings, or Booleans!",
    quizQuestions: [
      {
        question: "Which data type is used for text like \"Superman\"?",
        options: ["Number", "Boolean", "String", "Variable"],
        correctAnswer: 2,
        explanation: "Strings represent text. They are always written inside quotes so the computer knows they are letters and words."
      },
      {
        question: "Which data type represents values like 5, 42, or 100?",
        options: ["String", "Number", "Boolean", "Null"],
        correctAnswer: 1,
        explanation: "Numbers represent mathematical count values and don't need quotes around them."
      },
      {
        question: "What are the only two values a Boolean data type can have?",
        options: ["Yes and No", "True and False", "1 and 2", "Text and Numbers"],
        correctAnswer: 1,
        explanation: "Booleans are like logic switches and can only be set to 'true' or 'false'!"
      }
    ],
    nextSlug: "operators",
    prevSlug: "variables"
  },
  "operators": {
    num: 4,
    slug: "operators",
    title: "Math Superpowers",
    borderClass: "borderTeal",
    color: "#0d9488",
    analogyTitle: "Magic Calculator Wands",
    analogyDesc: "Imagine you have magic wands. The Plus wand (+) joins numbers together. The Multiply wand (*) duplicates things. The Equals wand (===) checks if two piles of candies are exactly the same size. These magic symbols are called operators!",
    explanation: "Operators are symbols that tell the computer to do math or compare values. Plus (+), minus (-), multiply (*), and divide (/) are arithmetic operators, while equals (===) and greater-than (>) compare values.",
    instructions: "Solve the balance scale puzzle! Click the correct math operator wand to make the equation true and balance the scale.",
    quizQuestions: [
      {
        question: "Which operator wand adds numbers together?",
        options: ["-", "*", "+", "/"],
        correctAnswer: 2,
        explanation: "The addition operator (+) adds numbers together, just like in math class!"
      },
      {
        question: "What is the result of the expression: 5 * 3?",
        options: ["8", "15", "2", "53"],
        correctAnswer: 1,
        explanation: "The asterisk (*) represents multiplication. 5 times 3 is 15!"
      },
      {
        question: "Which operator checks if two values are exactly equal in JavaScript?",
        options: ["=", "==", "===", "+="],
        correctAnswer: 2,
        explanation: "In JavaScript, the triple equals (===) operator checks if two values are exactly equal in value and type."
      }
    ],
    nextSlug: "conditionals",
    prevSlug: "data-types"
  },
  "conditionals": {
    num: 5,
    slug: "conditionals",
    title: "If/Else Decisions",
    borderClass: "borderPink",
    color: "#db2777",
    analogyTitle: "Choosing Your Clothes for the Day",
    analogyDesc: "When you wake up, you look outside. IF it is raining, you wear a raincoat. ELSE, you wear sunglasses. You just made a decision using If/Else logic! That's exactly how computers make choices.",
    explanation: "Conditionals are how we make programs smart. We write checks: `if (condition is true) { do Action A } else { do Action B }`. This gives our programs the power to react to different situations.",
    instructions: "Toggle the weather button! See how Robby the explorer runs if/else logic to put on the right clothes for the weather.",
    quizQuestions: [
      {
        question: "What do If/Else statements do in code?",
        options: ["Repeat code forever", "Make decisions based on conditions", "Delete files", "Rename variables"],
        correctAnswer: 1,
        explanation: "If/Else conditionals let our code make decisions and do different actions based on different situations."
      },
      {
        question: "When does the 'Else' block of code run?",
        options: ["Only when the 'If' condition is true", "When the 'If' condition evaluates to false", "Always, along with the 'If' block", "Never, it is ignored"],
        correctAnswer: 1,
        explanation: "The 'Else' block is a fallback code segment that only runs if the preceding 'If' check is false!"
      },
      {
        question: "In the code: 'if (rainy) { holdUmbrella() } else { wearSunglasses() }', what runs if it is sunny?",
        options: ["holdUmbrella()", "wearSunglasses()", "Both actions", "None of them"],
        correctAnswer: 1,
        explanation: "Since it is sunny (not rainy), the 'If' check is false, so the 'Else' block runs: wearSunglasses()!"
      }
    ],
    nextSlug: "loops",
    prevSlug: "operators"
  },
  "loops": {
    num: 6,
    slug: "loops",
    title: "Loops: The Copycat",
    borderClass: "borderIndigo",
    color: "#4f46e5",
    analogyTitle: "Repeating a Cool Dance Move",
    analogyDesc: "If your dance teacher tells you: 'Clap your hands 5 times!', you don't need them to say 'Clap! Clap! Clap! Clap! Clap!' individually. You just count to 5 and repeat the clap. A loop is the computer's way of doing this copycat work!",
    explanation: "Writing the same code over and over is boring. Loops tell the computer to repeat a block of code until a condition is met. A `for` loop repeats a set number of times, making automation super easy!",
    instructions: "Choose a dance move, set the counter, and click 'Dance Loop' to see Robby repeat the move in a loop!",
    quizQuestions: [
      {
        question: "Why do programmers use loops in code?",
        options: ["To slow down the computer", "To repeat code instructions easily without writing them twice", "To format colors", "To add single-line comments"],
        correctAnswer: 1,
        explanation: "Loops automate repetitive tasks by running the same block of code multiple times."
      },
      {
        question: "What is an 'infinite loop'?",
        options: ["A loop that repeats 10 times", "A loop that never stops running because its exit check is never false", "A loop that runs backwards", "A loop that crashes immediately"],
        correctAnswer: 1,
        explanation: "An infinite loop occurs when the exit condition is never met, causing the loop to run forever and potentially freeze the computer."
      },
      {
        question: "Which type of loop is best when you know exactly how many times to repeat?",
        options: ["while loop", "for loop", "infinite loop", "if loop"],
        correctAnswer: 1,
        explanation: "A 'for' loop is perfect when you have a specific repetition count, like looping 5 times."
      }
    ],
    nextSlug: "functions",
    prevSlug: "conditionals"
  },
  "functions": {
    num: 7,
    slug: "functions",
    title: "Functions: Recipes",
    borderClass: "borderEmerald",
    color: "#059669",
    analogyTitle: "Reusable Baking Recipes",
    analogyDesc: "If you want to bake chocolate chip cookies, you follow a recipe: Mix flour, add chocolate chips, bake! Instead of writing down this recipe every time you want cookies, you save it in a cookbook under the name `bakeCookies()`. When you want cookies, you just tell someone: 'Bake cookies using the recipe!'",
    explanation: "A function is a packaged block of code with a name. You write the steps once inside the function, and then you can execute all those steps anytime by calling its name, like `bakeCookies()`!",
    instructions: "Select your cookie ingredients and click the function button `bakeCookie()` to run the recipe code!",
    quizQuestions: [
      {
        question: "What is a function like in the real world?",
        options: ["A labeled cardboard box", "A reusable recipe in a cookbook", "A light switch", "A database stack"],
        correctAnswer: 1,
        explanation: "A function groups a sequence of instructions under a name, just like a cookie recipe groups baking steps."
      },
      {
        question: "How do you run or 'call' a function named 'jump' in JavaScript?",
        options: ["jump;", "jump();", "run jump;", "function jump;"],
        correctAnswer: 1,
        explanation: "You call a function by writing its name followed by parentheses: `jump()`!"
      },
      {
        question: "Can you pass inputs (like chocolate chips or nuts) into a function?",
        options: ["Yes, these inputs are called parameters or arguments", "No, functions cannot accept inputs", "Only if the function is named 'input'", "Only in Python"],
        correctAnswer: 0,
        explanation: "Yes! You can pass values into a function inside the parentheses. These are called parameters or arguments."
      }
    ],
    nextSlug: "arrays",
    prevSlug: "loops"
  },
  "arrays": {
    num: 8,
    slug: "arrays",
    title: "Arrays: Toy Trains",
    borderClass: "borderPurple",
    color: "#7c3aed",
    analogyTitle: "A Train with Toy Compartments",
    analogyDesc: "Imagine a toy train with numbered cargo wagons. Wagon 0 holds a Teddy Bear, Wagon 1 holds a Toy Car, and Wagon 2 holds a Ball. The train is a single list, and you can pull out any toy by calling its wagon number! That train is an array.",
    explanation: "An array is a structured list that holds multiple pieces of data in order. In coding, arrays start counting from 0 (zero-indexed). We access items using bracket notation: `train[0]` gets the first item.",
    instructions: "Load toys into Robby's toy train wagons. Enter an index number (0, 1, 2) to pull a toy out of that wagon compartment!",
    quizQuestions: [
      {
        question: "What index number represents the very first item in an array?",
        options: ["1", "0", "-1", "Any positive number"],
        correctAnswer: 1,
        explanation: "In programming, arrays are zero-indexed, meaning we start counting list items from index position 0!"
      },
      {
        question: "If train = ['dino', 'car', 'doll'], what is train[1]?",
        options: ["'dino'", "'car'", "'doll'", "undefined"],
        correctAnswer: 1,
        explanation: "The item at index 0 is 'dino'. The item at index 1 is 'car', which is the second item!"
      },
      {
        question: "Which array method attaches a new item to the end of the list train?",
        options: ["pop()", "push()", "shift()", "add()"],
        correctAnswer: 1,
        explanation: "The `.push(item)` method inserts a new element at the very end of the array."
      }
    ],
    nextSlug: "objects",
    prevSlug: "functions"
  },
  "objects": {
    num: 9,
    slug: "objects",
    title: "Objects: Pet Profile Cards",
    borderClass: "borderCyan",
    color: "#0891b2",
    analogyTitle: "A Pet ID Badge Card",
    analogyDesc: "If you describe your puppy, you might say: Name is Buddy, Type is Dog, Age is 2, and they can bark! A pet ID card groups all this information together. In coding, this group of details is called an object.",
    explanation: "While variables hold single values, objects hold groups of related properties. Each property has a key (like `name`) and a value (like `\"Buddy\"`). Objects can also have actions, which we call methods.",
    instructions: "Toggle Buddy's properties (type, color, age) to create your pet object card. See the JSON object code generate live!",
    quizQuestions: [
      {
        question: "What do objects do in programming?",
        options: ["Repeat instructions in a loop", "Group related properties and methods of a single thing", "Perform math calculations", "Add single-line comments"],
        correctAnswer: 1,
        explanation: "Objects group properties (descriptions) and methods (actions) of a single entity, like a player or a pet."
      },
      {
        question: "If you have a pet object, how do you read its name property?",
        options: ["pet.name", "pet!name", "pet->name", "pet['name'] only"],
        correctAnswer: 0,
        explanation: "We use dot notation (`pet.name`) to read properties from an object in a clean way."
      },
      {
        question: "What is a function defined inside an object called?",
        options: ["A property", "A method", "A parameter", "An array"],
        correctAnswer: 1,
        explanation: "Functions that describe actions an object can perform are called methods (e.g. `dog.bark()`)."
      }
    ],
    nextSlug: "debugging",
    prevSlug: "arrays"
  },
  "debugging": {
    num: 10,
    slug: "debugging",
    title: "Debugging: Bug Hunt",
    borderClass: "borderRed",
    color: "#dc2626",
    analogyTitle: "Spotting Silly Mistakes",
    analogyDesc: "Imagine writing a story but accidentally forgetting to close a quotation mark, or spelling a word wrong. The story reads funny! Mistakes in programming are called 'bugs', and finding and fixing them is called 'debugging'. You are like a detective solving a code mystery!",
    explanation: "Code doesn't always work on the first try. Syntax errors (typos) and logical errors (formula mistakes) prevent programs from running correctly. Debugging is the process of inspecting code and squashing bugs.",
    instructions: "Oh no! Robby's code has literal bugs crawling on it! Click on the bugs to squash them and fix the code errors.",
    quizQuestions: [
      {
        question: "What is a 'bug' in computer programming?",
        options: ["A literal insect inside the CPU", "An error or mistake in the code", "A high-speed calculation", "A comments warning"],
        correctAnswer: 1,
        explanation: "A bug is an error in software code that causes it to run incorrectly or crash."
      },
      {
        question: "What is the process of finding and fixing mistakes in code called?",
        options: ["Compiling", "Debugging", "Baking", "Looping"],
        correctAnswer: 1,
        explanation: "Debugging is the detective work of finding, isolating, and correcting code errors."
      },
      {
        question: "What does 'Rubber Duck Debugging' mean?",
        options: ["Washing your keyboard with a toy duck", "Explaining your code line-by-line out loud to an object to notice errors", "Letting a robot write your code", "Deleting all variables"],
        correctAnswer: 1,
        explanation: "Explaining your code aloud to a toy duck helps your brain step through the logic and identify mistakes you missed!"
      }
    ],
    nextSlug: null,
    prevSlug: "objects"
  }
};
