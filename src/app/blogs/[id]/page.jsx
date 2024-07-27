const page = ({params}) => {
    console.log(params.id)
    const { blogTitle , description} = blogs.find(blog => blog.id == params.id)
    return (
        <div className=" h-screen">
            <h1>{blogTitle}</h1>
            <p>{description}</p>
        </div>
    );
};

export default page;
const blogs = [
    {
      "id": 1,
      "blogTitle": "Understanding JavaScript Closures",
      "description": "A comprehensive guide to understanding closures in JavaScript, their use cases, and practical examples. This blog explains how closures work, why they are important, and how to use them effectively in your JavaScript code. With clear explanations and examples, you'll gain a solid understanding of closures, enabling you to write more efficient and modular code."
    },
    {
      "id": 2,
      "blogTitle": "A Beginner's Guide to React Hooks",
      "description": "An introduction to React Hooks, focusing on useState, useEffect, and how to create custom hooks. This guide covers the basics of hooks, why they were introduced, and how they simplify state management and side effects in functional components. You'll learn how to replace class components with functional components using hooks, enhancing your React development skills."
    },
    {
      "id": 3,
      "blogTitle": "Mastering CSS Grid Layout",
      "description": "Learn to use CSS Grid Layout for creating complex and responsive web designs effortlessly. This blog covers the fundamental concepts of CSS Grid, including grid containers, grid items, and various grid properties. Through practical examples, you'll understand how to create flexible and adaptive layouts that work seamlessly across different screen sizes and devices."
    },
    {
      "id": 4,
      "blogTitle": "Building RESTful APIs with Express.js",
      "description": "Step-by-step tutorial on building RESTful APIs with Express.js, including routing and middleware. This guide covers the essential aspects of creating a RESTful API, such as setting up an Express server, defining routes, handling requests and responses, and using middleware for tasks like authentication and error handling. By the end, you'll be able to build robust APIs."
    },
    {
      "id": 5,
      "blogTitle": "Introduction to Firebase Authentication",
      "description": "A beginner-friendly guide to implementing Firebase Authentication for securing your web applications. This blog covers the basics of Firebase Authentication, including setting up Firebase in your project, enabling authentication methods like email/password and social logins, and managing user authentication states. You'll learn how to protect your app's data and provide a secure user experience."
    },
    {
      "id": 6,
      "blogTitle": "Getting Started with MongoDB",
      "description": "A guide to getting started with MongoDB, covering installation, basic CRUD operations, and best practices. This blog introduces you to MongoDB, a NoSQL database, and walks you through setting up your MongoDB environment. You'll learn how to perform Create, Read, Update, and Delete operations using the MongoDB shell and best practices for designing efficient and scalable databases."
    },
    {
      "id": 7,
      "blogTitle": "Effective State Management with Redux",
      "description": "Learn how to efficiently manage the state of your React applications using Redux. This blog covers the core concepts of Redux, including actions, reducers, and the store. Through practical examples, you'll understand how to integrate Redux into your React app, manage complex state logic, and improve the maintainability and scalability of your codebase by following best practices."
    },
    {
      "id": 8,
      "blogTitle": "Exploring the JavaScript Event Loop",
      "description": "An in-depth look at the JavaScript event loop and its impact on asynchronous programming. This blog explains how the event loop works, including the call stack, event queue, and how asynchronous operations like setTimeout and Promises are handled. By understanding the event loop, you'll be able to write more efficient asynchronous code and avoid common pitfalls in JavaScript programming."
    },
    {
      "id": 9,
      "blogTitle": "Advanced Tailwind CSS Techniques",
      "description": "Take your Tailwind CSS skills to the next level with advanced techniques and best practices. This blog explores advanced concepts in Tailwind CSS, such as customizing your design system, using plugins, and optimizing your CSS for performance. Through detailed examples, you'll learn how to leverage Tailwind's utility-first approach to build complex, responsive, and highly maintainable web designs."
    },
    {
      "id": 10,
      "blogTitle": "Securing Your Web Applications with JWT",
      "description": "Learn to secure your web applications using JSON Web Tokens (JWT) for authentication and authorization. This blog covers the basics of JWT, including how they work, their structure, and how to implement JWT-based authentication in your applications. You'll understand how to create and verify tokens, manage user sessions, and protect your APIs from unauthorized access."
    }
  ]
  