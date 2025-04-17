
import { ModuleData } from "../components/ModuleContent";

export const modulesData: ModuleData[] = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    content: "Web development is the work involved in developing a website for the Internet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. This module introduces you to the fundamental concepts of HTML, CSS, and JavaScript that form the building blocks of web development.",
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
    content: "React is a JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer in web and mobile apps. React allows you to design simple views for each state in your application, and will efficiently update and render the right components when your data changes.",
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
    content: "Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. Content, design, and performance are necessary across all devices to ensure usability and satisfaction.",
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
    content: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.",
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
    content: "This module explores advanced JavaScript concepts that are essential for modern web development. You'll learn about closures, prototypes, promises, async/await, and other advanced features of the language.",
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
