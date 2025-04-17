import { ModuleData } from "../components/ModuleContent";

export const modulesData: ModuleData[] = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    content: `Welcome to Web Development! In this foundational module, you'll learn:

• The structure of HTML documents and semantic markup
• CSS styling fundamentals including flexbox and grid layouts
• JavaScript basics: variables, functions, and DOM manipulation
• How browsers interpret and render web pages
• Best practices for writing clean, maintainable code

By the end of this module, you'll be able to create interactive web pages from scratch!`,
    checkpoints: [
      {
        id: 101,
        title: "HTML Fundamentals",
        completed: true,
        xpReward: 10,
      },
      {
        id: 102,
        title: "CSS Basics",
        completed: true,
        xpReward: 15,
      },
      {
        id: 103,
        title: "Introduction to JavaScript",
        completed: false,
        xpReward: 20,
      },
      {
        id: 104,
        title: "Building Your First Web Page",
        completed: false,
        xpReward: 25,
      },
    ],
    progress: 50,
    xpReward: 100,
    hasQuiz: true,
  },
  {
    id: 2,
    title: "React JS Fundamentals",
    description: "Master the basics of React JS library",
    content: `Dive into modern frontend development with React! This module covers:

• Component-based architecture and JSX syntax
• State management and props drilling
• Hooks system: useState, useEffect, and custom hooks
• Virtual DOM and React's rendering lifecycle
• Form handling and event management in React

Get ready to build dynamic, interactive user interfaces with React!`,
    checkpoints: [
      {
        id: 201,
        title: "React Components",
        completed: true,
        xpReward: 15,
      },
      {
        id: 202,
        title: "State and Props",
        completed: false,
        xpReward: 20,
      },
      {
        id: 203,
        title: "Lifecycle Methods",
        completed: false,
        xpReward: 25,
      },
      {
        id: 204,
        title: "Hooks and Context API",
        completed: false,
        xpReward: 30,
      },
    ],
    progress: 25,
    xpReward: 150,
    hasQuiz: true,
  },
  {
    id: 3,
    title: "Responsive Design Principles",
    description: "Learn how to create responsive web designs",
    content: `Master the art of responsive web design! Key topics include:

• Mobile-first design philosophy
• CSS media queries and breakpoints
• Flexible grid systems and fluid layouts
• Responsive images and media
• Testing and debugging across devices

Learn to create websites that look great on any screen size!`,
    checkpoints: [
      {
        id: 301,
        title: "Media Queries",
        completed: false,
        xpReward: 15,
      },
      {
        id: 302,
        title: "Flexbox Layout",
        completed: false,
        xpReward: 20,
      },
      {
        id: 303,
        title: "CSS Grid Layout",
        completed: false,
        xpReward: 25,
      },
      {
        id: 304,
        title: "Mobile-First Design",
        completed: false,
        xpReward: 20,
      },
    ],
    progress: 0,
    xpReward: 120,
    hasQuiz: true,
  },
  {
    id: 4,
    title: "Backend Development with Node.js",
    description: "Introduction to server-side programming with Node.js",
    content: `Explore server-side development with Node.js! You'll learn:

• Setting up a Node.js environment
• Building RESTful APIs with Express
• Database operations with MongoDB
• Authentication and authorization
• Error handling and logging

Become proficient in full-stack JavaScript development!`,
    checkpoints: [
      {
        id: 401,
        title: "Node.js Basics",
        completed: false,
        xpReward: 20,
      },
      {
        id: 402,
        title: "Express Framework",
        completed: false,
        xpReward: 25,
      },
      {
        id: 403,
        title: "RESTful API Design",
        completed: false,
        xpReward: 30,
      },
      {
        id: 404,
        title: "Database Integration",
        completed: false,
        xpReward: 35,
      },
    ],
    progress: 0,
    xpReward: 180,
    hasQuiz: true,
  },
  {
    id: 5,
    title: "Advanced JavaScript Concepts",
    description: "Deep dive into advanced JavaScript features",
    content: `Take your JavaScript skills to the next level! Topics covered:

• Closures and scope chain
• Prototypal inheritance and classes
• Async programming with Promises
• Event loop and concurrency
• Modern ES6+ features and patterns

Master the advanced concepts that power modern JavaScript applications!`,
    checkpoints: [
      {
        id: 501,
        title: "Closures and Scope",
        completed: false,
        xpReward: 25,
      },
      {
        id: 502,
        title: "Prototypal Inheritance",
        completed: false,
        xpReward: 30,
      },
      {
        id: 503,
        title: "Promises and Async/Await",
        completed: false,
        xpReward: 35,
      },
      {
        id: 504,
        title: "Functional Programming",
        completed: false,
        xpReward: 40,
      },
    ],
    progress: 0,
    xpReward: 200,
    hasQuiz: true,
  },
];

export const getUserData = () => {
  return {
    level: 2,
    xp: 125,
    maxXp: 300,
    streak: 3,
    modulesInProgress: 2,
  };
};
