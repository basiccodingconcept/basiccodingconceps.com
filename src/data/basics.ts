export interface BasicSection {
  type: "text" | "heading" | "heading3" | "list" | "callout" | "grid" | "playground" | "steps";
  title?: string;
  content?: string;
  items?: string[];
  gridItems?: { title: string; content: string; icon?: string; href?: string }[];
  stepsItems?: { step: number; title: string; content: string }[];
  code?: string;
}

export interface BasicData {
  slug: string;
  title: string;
  desc: string;
  categoryBadge: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  time: string;
  sections: BasicSection[];
  ctaText?: string;
  ctaHref?: string;
  nextSlug: string | null;
  prevSlug: string | null;
}

export const basicsData: Record<string, BasicData> = {
  "basic-coding-concepts": {
    slug: "basic-coding-concepts",
    title: "Basic Coding Concepts",
    desc: "Everything you need to understand how programming works. This comprehensive guide covers the fundamental concepts that apply to every programming language.",
    categoryBadge: "Start Here",
    level: "Beginner",
    time: "20 min read",
    nextSlug: "programming-fundamentals",
    prevSlug: null,
    sections: [
      {
        type: "heading",
        content: "What Are Coding Concepts?"
      },
      {
        type: "text",
        content: "Coding concepts are the <strong>fundamental building blocks</strong> that make up all computer programs. Just like how houses are built from bricks, walls, and roofs, programs are built from concepts like variables, loops, and functions."
      },
      {
        type: "text",
        content: "The amazing thing is that these concepts are nearly universal — once you understand them, you can apply them in almost any programming language. Whether you're learning JavaScript, Python, Java, or any other language, these same fundamental ideas will appear again and again."
      },
      {
        type: "callout",
        title: "Why This Matters",
        content: "Understanding these core concepts is like learning the grammar of programming. Once you \"get\" them, learning any specific programming language becomes much easier because you already understand the underlying logic."
      },
      {
        type: "heading",
        content: "The 13 Core Concepts"
      },
      {
        type: "text",
        content: "We've organized the essential coding concepts into a logical learning path. Each concept builds on the previous ones, so we recommend following them in order:"
      },
      {
        type: "grid",
        gridItems: [
          { title: "1. What is Coding?", content: "Discover what coding is and why millions of people are learning it", href: "/concepts/what-is-coding" },
          { title: "2. Comments", content: "Learn how to document your code with helpful notes", href: "/concepts" }, // Fallback to /concepts if the specific page doesn't exist
          { title: "3. Variables", content: "Learn how to store and manage data in your programs", href: "/concepts/variables" },
          { title: "4. Data Types", content: "Understand the different kinds of data your code can work with", href: "/concepts/data-types" },
          { title: "5. Strings", content: "Master working with text data in your programs", href: "/concepts" },
          { title: "6. Operators", content: "Master mathematical and logical operations in code", href: "/concepts/operators" },
          { title: "7. Conditionals", content: "Make your code smart with decision-making logic", href: "/concepts/conditionals" },
          { title: "8. Loops", content: "Automate repetitive tasks with loops", href: "/concepts/loops" },
          { title: "9. Functions", content: "Create reusable blocks of code", href: "/concepts" },
          { title: "10. Arrays", content: "Work with collections of data", href: "/concepts" },
          { title: "11. Objects", content: "Organize complex data with objects", href: "/concepts" },
          { title: "12. Input & Output", content: "Get user input and display results in your programs", href: "/concepts" },
          { title: "13. Debugging", content: "Find and fix errors in your code", href: "/concepts" }
        ]
      },
      {
        type: "heading",
        content: "Try It Yourself"
      },
      {
        type: "text",
        content: "The best way to learn coding is by doing. Here's an interactive playground where you can experiment with some basic concepts. Try changing the values and see what happens!"
      },
      {
        type: "playground",
        code: `// Welcome to coding!
// This is your first program.

// 1. Variables - storing information
let greeting = "Hello, World!";
console.log(greeting);

// 2. Doing math
let apples = 5;
let oranges = 3;
let totalFruit = apples + oranges;
console.log("Total fruit:", totalFruit);

// 3. Making decisions
if (totalFruit > 5) {
  console.log("That's a lot of fruit!");
} else {
  console.log("You need more fruit!");
}`
      },
      {
        type: "heading",
        content: "Understanding the Basics"
      },
      {
        type: "grid",
        gridItems: [
          { title: "1. Variables: Storing Information", content: "Think of variables as labeled boxes where you can store information. You give the box a name (like age or username) and put a value inside it. Later, you can retrieve or change that value by using the variable's name.", href: "/concepts/variables" },
          { title: "2. Data Types: Different Kinds of Information", content: "Not all data is the same. Numbers, text, and yes/no values are all different types of data. Understanding data types helps you work with information correctly and avoid errors.", href: "/concepts/data-types" },
          { title: "3. Operators: Doing Things with Data", content: "Operators are symbols that tell the computer to perform specific operations — like adding numbers, comparing values, or combining text. They're the verbs of programming.", href: "/concepts/operators" },
          { title: "4. Conditionals: Making Decisions", content: "Programs need to make decisions based on different conditions. \"If the user is logged in, show their dashboard. Otherwise, show the login page.\" This is what conditionals do.", href: "/concepts/conditionals" },
          { title: "5. Loops: Repeating Actions", content: "Instead of writing the same code 100 times, loops let you repeat actions automatically. They're essential for processing lists of data and automating repetitive tasks.", href: "/concepts/loops" },
          { title: "6. Functions: Reusable Code Blocks", content: "Functions are like mini-programs within your program. You write them once, give them a name, and then \"call\" them whenever you need that functionality. This keeps your code organized and avoids repetition.", href: "/concepts" },
          { title: "7. Arrays: Lists of Data", content: "Arrays let you store multiple values in a single variable. Instead of creating fruit1, fruit2, fruit3, you can have one fruits array that holds all of them.", href: "/concepts" },
          { title: "8. Objects: Structured Data", content: "Objects let you group related information together. A \"user\" object might contain their name, email, and age all in one place, making your data more organized and easier to work with.", href: "/concepts" },
          { title: "9. Debugging: Finding and Fixing Errors", content: "Every programmer makes mistakes — even experts. Debugging is the skill of finding and fixing those mistakes. It's one of the most important skills you'll develop.", href: "/concepts" }
        ]
      },
      {
        type: "heading",
        content: "Key Takeaways"
      },
      {
        type: "list",
        items: [
          "Coding concepts are the universal building blocks of all programs",
          "Learning concepts first makes learning any language easier",
          "The core concepts include: variables, data types, operators, conditionals, loops, functions, arrays, and objects",
          "Practice is essential — experiment with code to truly understand it",
          "Debugging is a normal part of programming, not a sign of failure"
        ]
      },
      {
        type: "heading",
        content: "Next Steps"
      },
      {
        type: "text",
        content: "Ready to dive deeper? Start your learning journey with our first concept:"
      }
    ],
    ctaText: "What is Coding?",
    ctaHref: "/concepts/what-is-coding"
  },
  "programming-fundamentals": {
    slug: "programming-fundamentals",
    title: "Programming Fundamentals",
    desc: "Core principles that form the foundation of all software development. These fundamentals apply to every programming language and will serve you throughout your career.",
    categoryBadge: "Essential",
    level: "Intermediate",
    time: "15 min read",
    nextSlug: "coding-basics",
    prevSlug: "basic-coding-concepts",
    sections: [
      {
        type: "heading",
        content: "What Are Programming Fundamentals?"
      },
      {
        type: "text",
        content: "Programming fundamentals are the <strong>timeless principles</strong> that underpin all software development. While specific languages and technologies come and go, these core concepts remain constant."
      },
      {
        type: "text",
        content: "Think of them as the \"physics\" of programming — the foundational laws that everything else builds upon."
      },
      {
        type: "callout",
        title: "Building Your Foundation",
        content: "A strong understanding of fundamentals is what separates good programmers from great ones. It allows you to learn new technologies quickly and solve problems creatively."
      },
      {
        type: "heading",
        content: "The Core Principles"
      },
      {
        type: "heading3",
        content: "1. Problem Decomposition"
      },
      {
        type: "text",
        content: "Breaking complex problems into smaller, manageable pieces is the most important skill in programming. Large problems become simple when you tackle them one small step at a time."
      },
      {
        type: "heading3",
        content: "2. Abstraction"
      },
      {
        type: "text",
        content: "Abstraction means hiding complexity behind simple interfaces. When you drive a car, you don't need to understand how the engine works — you just use the steering wheel and pedals. Good code works the same way."
      },
      {
        type: "heading3",
        content: "3. Pattern Recognition"
      },
      {
        type: "text",
        content: "Experienced programmers recognize patterns everywhere. Once you've seen a problem before, you can apply solutions you already know. This is why learning concepts (not just syntax) is so valuable."
      },
      {
        type: "heading3",
        content: "4. Algorithmic Thinking"
      },
      {
        type: "text",
        content: "An algorithm is just a step-by-step procedure for solving a problem. Learning to think algorithmically means you can break any task into clear, logical steps that a computer can follow."
      },
      {
        type: "heading3",
        content: "5. Data Organization"
      },
      {
        type: "text",
        content: "How you organize and structure your data profoundly affects how easy your code is to write and maintain. Choosing the right data structures is a fundamental skill."
      },
      {
        type: "heading3",
        content: "6. Code Reusability"
      },
      {
        type: "text",
        content: "Good programmers never write the same code twice. Functions, classes, and modules let you write code once and use it everywhere, saving time and reducing bugs."
      },
      {
        type: "heading",
        content: "Why Fundamentals Matter"
      },
      {
        type: "grid",
        gridItems: [
          { title: "Learn Faster", content: "Strong fundamentals make learning new languages and frameworks much easier." },
          { title: "Solve Better", content: "Understanding principles helps you find elegant solutions to complex problems." },
          { title: "Debug Faster", content: "When you understand how things work, you can quickly identify what's going wrong." },
          { title: "Career Growth", content: "Technical interviews focus heavily on fundamentals because they predict job success." }
        ]
      },
      {
        type: "heading",
        content: "Key Takeaways"
      },
      {
        type: "list",
        items: [
          "Fundamentals are the timeless principles of programming",
          "They apply to every language and technology",
          "Strong fundamentals accelerate learning and problem-solving",
          "Focus on understanding concepts, not just memorizing syntax"
        ]
      },
      {
        type: "heading",
        content: "Next Steps"
      },
      {
        type: "text",
        content: "Start building your foundation with our interactive concept tutorials. Each one focuses on a fundamental skill you'll use throughout your programming journey."
      }
    ],
    ctaText: "Explore All Concepts",
    ctaHref: "/concepts"
  },
  "coding-basics": {
    slug: "coding-basics",
    title: "Coding Basics",
    desc: "New to coding? Perfect! This gentle introduction will help you understand what coding is and how to get started. No prior experience needed.",
    categoryBadge: "Beginner Friendly",
    level: "Beginner",
    time: "12 min read",
    nextSlug: "programming-basics",
    prevSlug: "programming-fundamentals",
    sections: [
      {
        type: "callout",
        title: "Everyone Starts Here",
        content: "Every expert programmer once sat where you are now. Coding might seem mysterious, but it's really just giving instructions to a computer. You've got this!"
      },
      {
        type: "heading",
        content: "What is Coding?"
      },
      {
        type: "text",
        content: "Coding is simply <strong>writing instructions for computers</strong>. Computers are powerful but not smart — they need very specific, step-by-step instructions to do anything."
      },
      {
        type: "text",
        content: "Those instructions are written in <strong>programming languages</strong>. Just like how English or Spanish let humans communicate, programming languages let us communicate with computers."
      },
      {
        type: "heading",
        content: "Why Learn to Code?"
      },
      {
        type: "grid",
        gridItems: [
          { title: "Career Opportunities", content: "Software developers are in high demand with excellent salaries worldwide." },
          { title: "Creative Expression", content: "Build apps, games, websites, and tools limited only by your imagination." },
          { title: "Problem Solving", content: "Coding teaches logical thinking skills useful in every area of life." },
          { title: "Automation", content: "Automate boring tasks and let computers do the repetitive work." }
        ]
      },
      {
        type: "heading",
        content: "Your First Steps"
      },
      {
        type: "heading3",
        content: "Step 1: Understand the Basics"
      },
      {
        type: "text",
        content: "Before writing code, learn the fundamental concepts. Our <a href=\"/concepts/\">interactive tutorials</a> teach you variables, loops, functions, and more with visual explanations."
      },
      {
        type: "heading3",
        content: "Step 2: Practice, Practice, Practice"
      },
      {
        type: "text",
        content: "Reading about coding isn't enough — you need to write code. Our code playgrounds let you experiment right in your browser."
      },
      {
        type: "heading3",
        content: "Step 3: Build Something"
      },
      {
        type: "text",
        content: "The best way to learn is by building. Start with simple projects and gradually take on more complex challenges."
      },
      {
        type: "heading3",
        content: "Step 4: Join a Community"
      },
      {
        type: "text",
        content: "Connect with other learners. Ask questions, share your progress, and learn from others who are on the same journey."
      },
      {
        type: "heading",
        content: "Common Beginner Questions"
      },
      {
        type: "heading3",
        content: "\"Am I too old to learn?\""
      },
      {
        type: "text",
        content: "Absolutely not! People learn to code at every age. What matters is curiosity and persistence, not your birth year."
      },
      {
        type: "heading3",
        content: "\"Do I need to be good at math?\""
      },
      {
        type: "text",
        content: "Most coding doesn't require advanced math. Basic arithmetic is usually enough. If you can add, subtract, and think logically, you can code."
      },
      {
        type: "heading3",
        content: "\"Which language should I learn first?\""
      },
      {
        type: "text",
        content: "We recommend starting with concepts first (language-agnostic), then moving to JavaScript or Python. Both are beginner-friendly and widely used."
      },
      {
        type: "heading",
        content: "Key Takeaways"
      },
      {
        type: "list",
        items: [
          "Coding is writing instructions for computers",
          "Everyone can learn to code regardless of background",
          "Start with concepts, then practice with real code",
          "Building projects is the best way to learn",
          "Progress matters more than perfection"
        ]
      },
      {
        type: "heading",
        content: "Ready to Start?"
      },
      {
        type: "text",
        content: "Begin your journey with What is Coding? — our beginner-friendly introduction that will give you a solid foundation."
      }
    ],
    ctaText: "What is Coding?",
    ctaHref: "/concepts/what-is-coding"
  },
  "programming-basics": {
    slug: "programming-basics",
    title: "Programming Basics",
    desc: "Learn the language-agnostic skills every programmer needs. Think like a developer and build a mental model for how programs work.",
    categoryBadge: "Core Knowledge",
    level: "Beginner",
    time: "15 min read",
    nextSlug: null,
    prevSlug: "coding-basics",
    sections: [
      {
        type: "heading",
        content: "How Programs Work"
      },
      {
        type: "text",
        content: "At its core, every program follows the same pattern: <strong>input → process → output</strong>. Programs take in data (input), do something with it (process), and produce results (output)."
      },
      {
        type: "text",
        content: "Understanding this simple model helps you reason about any program, no matter how complex it appears."
      },
      {
        type: "callout",
        title: "The Programmer's Mindset",
        content: "Programming is less about memorizing syntax and more about developing a way of thinking. It's about breaking problems down, recognizing patterns, and building solutions step by step."
      },
      {
        type: "heading",
        content: "Core Programming Skills"
      },
      {
        type: "heading3",
        content: "1. Sequential Thinking"
      },
      {
        type: "text",
        content: "Computers execute instructions one at a time, in order. Learning to think sequentially — breaking tasks into ordered steps — is fundamental to programming."
      },
      {
        type: "heading3",
        content: "2. Conditional Logic"
      },
      {
        type: "text",
        content: "Programs make decisions based on conditions. \"If this, then do that. Otherwise, do something else.\" This simple idea powers everything from games to banking systems."
      },
      {
        type: "heading3",
        content: "3. Iteration"
      },
      {
        type: "text",
        content: "Many tasks involve doing the same thing repeatedly with different data. Understanding how to use loops and iterate through collections is essential."
      },
      {
        type: "heading3",
        content: "4. State Management"
      },
      {
        type: "text",
        content: "Programs track information as they run — this is called \"state.\" Understanding how data changes over time helps you write correct, predictable code."
      },
      {
        type: "heading3",
        content: "5. Modularity"
      },
      {
        type: "text",
        content: "Good programs are built from small, focused pieces that work together. Learning to break code into reusable modules makes programs easier to write, read, and maintain."
      },
      {
        type: "heading",
        content: "The Problem-Solving Process"
      },
      {
        type: "steps",
        stepsItems: [
          { step: 1, title: "Understand the Problem", content: "What exactly are you trying to solve? What are the inputs and expected outputs?" },
          { step: 2, title: "Plan Your Approach", content: "Break it into smaller steps. Sketch out the logic before writing code." },
          { step: 3, title: "Implement the Solution", content: "Write the code, starting with the simplest pieces first." },
          { step: 4, title: "Test & Refine", content: "Does it work? Try different inputs. Fix bugs and improve the solution." }
        ]
      },
      {
        type: "heading",
        content: "Building Mental Models"
      },
      {
        type: "text",
        content: "Experienced programmers have strong mental models — they can visualize how code executes in their minds. Our <a href=\"/concepts/\">visual concept explainers</a> help you build these mental models for core programming concepts."
      },
      {
        type: "heading",
        content: "Key Takeaways"
      },
      {
        type: "list",
        items: [
          "Programs follow the input → process → output pattern",
          "Programming is more about thinking than memorizing",
          "Break problems into smaller, manageable pieces",
          "Test early and often to catch mistakes",
          "Build mental models by visualizing how code executes"
        ]
      },
      {
        type: "heading",
        content: "Continue Learning"
      },
      {
        type: "text",
        content: "Put these ideas into practice with our <a href=\"/concepts/\">interactive concept tutorials</a>. Each one includes visualizations that help you see exactly how code works."
      }
    ],
    ctaText: "Interactive Concepts",
    ctaHref: "/concepts"
  }
};
