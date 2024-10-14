
// // // // import fs from "fs";
// // // // import path from "path";
// // // "use client"
// // // let fs;
// // // if (typeof window === "undefined") {
// // //   fs = require("fs");
// // // }

// // // import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
// // // import { GoogleAIFileManager } from "@google/generative-ai/server";

  
// // //   const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
// // //   const genAI = new GoogleGenerativeAI(apiKey);
// // // //   const fileManager = new GoogleAIFileManager(apiKey);
  
  
 
  
// // //   const model = genAI.getGenerativeModel({
// // //     model: "gemini-1.0-pro",
// // //   });
  
// // //   const generationConfig = {
// // //     temperature: 0.9,
// // //     topP: 1,
// // //     maxOutputTokens: 2048,
// // //     responseMimeType: "application/json",
// // //   };

  
// // //     //we are exporting this so that we can add the 
// // //    export const GenerateCourseLayout = model.startChat({
// // //       generationConfig,
// // //    // safetySettings: Adjust safety settings
// // //    // See https://ai.google.dev/gemini-api/docs/safety-settings
// // //       history: [
// // //         {
// // //           role: "user",
// // //           parts: [
// // //             {text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level: Basic, Duration: 1 hours, NoOf Chapters: 5, in JSON format\n"},
// // //           ],
// // //         },
// // //         {
// // //           role: "model",
// // //           parts: [
// // //             {text: "```JSON\n[\n  {\n    \"CourseName\": \"Python 101\",\n    \"Description\": \"This course will introduce you to Python, the world's most popular programming language.\",\n    \"Chapters\": [\n      {\n        \"ChapterName\": \"Getting Started with Python\",\n        \"About\": \"In this chapter, you will learn how to install Python and write your first Python program.\",\n        \"Duration\": \"30 minutes\"\n      },\n      {\n        \"ChapterName\": \"Python Data Types\",\n        \"About\": \"In this chapter, you will learn about the different data types in Python and how to use them.\",\n        \"Duration\": \"30 minutes\"\n      },\n      {\n        \"ChapterName\": \"Python Control Flow\",\n        \"About\": \"In this chapter, you will learn about control flow in Python and how to use it to control the execution of your programs.\",\n        \"Duration\": \"30 minutes\"\n      },\n      {\n        \"ChapterName\": \"Python Functions\",\n        \"About\": \"In this chapter, you will learn about functions in Python and how to use them to organize your code.\",\n        \"Duration\": \"30 minutes\"\n      },\n      {\n        \"ChapterName\": \"Python Classes and Objects\",\n        \"About\": \"In this chapter, you will learn about classes and objects in Python and how to use them to create your own custom data types.\",\n        \"Duration\": \"30 minutes\"\n      }\n    ]\n  }\n]\n```"},
// // //           ],
// // //         },
// // //         {
// // //           role: "user",
// // //           parts: [
// // //             {text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level: Basic, Duration: 1 hours, NoOf Chapters: 5, in JSON format"},
// // //           ],
// // //         },
// // //         {
// // //           role: "model",
// // //           parts: [
// // //             {text: "```json\n[\n  {\n    \"CourseName\": \"Python Fundamentals\",\n    \"Description\": \"A basic introduction to Python programming, covering essential concepts for beginners.\",\n    \"Chapters\": [\n      {\n        \"ChapterName\": \"Introduction to Python\",\n        \"About\": \"Installing Python, running your first 'Hello, world!' program, and understanding basic syntax.\",\n        \"Duration\": \"10 minutes\"\n      },\n      {\n        \"ChapterName\": \"Variables and Data Types\",\n        \"About\": \"Defining variables, different data types (integers, strings, floats, booleans), and performing basic operations.\",\n        \"Duration\": \"15 minutes\"\n      },\n      {\n        \"ChapterName\": \"Control Flow (if-else)\",\n        \"About\": \"Conditional statements, using 'if', 'elif', and 'else' to control program execution based on conditions.\",\n        \"Duration\": \"20 minutes\"\n      },\n      {\n        \"ChapterName\": \"Loops (for and while)\",\n        \"About\": \"Iterating through sequences with 'for' loops and repeating blocks of code with 'while' loops.\",\n        \"Duration\": \"20 minutes\"\n      },\n      {\n        \"ChapterName\": \"Working with Lists and Tuples\",\n        \"About\": \"Creating, manipulating, and accessing elements in lists and tuples, fundamental data structures in Python.\",\n        \"Duration\": \"15 minutes\"\n      }\n    ]\n  }\n]\n```\n"},
// // //           ],
// // //         },
// // //         {
// // //           role: "user",
// // //           parts: [
// // //             {text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level: Basic, Duration: 1 hours, No Of Chapters: 5, in JSON format\n"},
// // //           ],
// // //         },
       
// // //       ],
// // //     });
  
   


// // let fs;
// // if (typeof window === "undefined") {
// //   fs = require("fs");
// // }
// 'use server'
// const fs = require('fs-extra')
// import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
// import { GoogleAIFileManager } from "@google/generative-ai/server";

// const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.0-pro",
// });

// const generationConfig = {
//   temperature: 0.9,
//   topP: 1,
//   maxOutputTokens: 2048,
//   responseMimeType: "application/json",
// };

// export const GenerateCourseLayout_AI = async () => {
//   // The call to startChat should only happen server-side, not client-side.
//   if (typeof window === "undefined") {
//     return await model.startChat({
//       generationConfig,
//       history: [
//         {
//           role: "user",
//           parts: [
//             { text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level: Basic, Duration: 1 hours, NoOf Chapters: 5, in JSON format\n" },
//           ],
//         },
//         {
//           role: "model",
//           parts: [
//             { text: "```JSON\n[\n  {\n    \"CourseName\": \"Python 101\",\n    \"Description\": \"This course will introduce you to Python, the world's most popular programming language.\",\n    \"Chapters\": [\n      {\n        \"ChapterName\": \"Getting Started with Python\",\n        \"About\": \"In this chapter, you will learn how to install Python and write your first Python program.\",\n        \"Duration\": \"30 minutes\"\n      },\n      {\n        \"ChapterName\": \"Python Data Types\",\n        \"About\": \"In this chapter, you will learn about the different data types in Python and how to use them.\",\n        \"Duration\": \"30 minutes\"\n      },\n      {\n        \"ChapterName\": \"Python Control Flow\",\n        \"About\": \"In this chapter, you will learn about control flow in Python and how to use it to control the execution of your programs.\",\n        \"Duration\": \"30 minutes\"\n      },\n      {\n        \"ChapterName\": \"Python Functions\",\n        \"About\": \"In this chapter, you will learn about functions in Python and how to use them to organize your code.\",\n        \"Duration\": \"30 minutes\"\n      },\n      {\n        \"ChapterName\": \"Python Classes and Objects\",\n        \"About\": \"In this chapter, you will learn about classes and objects in Python and how to use them to create your own custom data types.\",\n        \"Duration\": \"30 minutes\"\n      }\n    ]\n  }\n]\n```" },
//           ],
//         },
//         {
//           role: "user",
//           parts: [
//             { text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level: Basic, Duration: 1 hours, NoOf Chapters: 5, in JSON format" },
//           ],
//         },
//         {
//           role: "model",
//           parts: [
//             { text: "```json\n[\n  {\n    \"CourseName\": \"Python Fundamentals\",\n    \"Description\": \"A basic introduction to Python programming, covering essential concepts for beginners.\",\n    \"Chapters\": [\n      {\n        \"ChapterName\": \"Introduction to Python\",\n        \"About\": \"Installing Python, running your first 'Hello, world!' program, and understanding basic syntax.\",\n        \"Duration\": \"10 minutes\"\n      },\n      {\n        \"ChapterName\": \"Variables and Data Types\",\n        \"About\": \"Defining variables, different data types (integers, strings, floats, booleans), and performing basic operations.\",\n        \"Duration\": \"15 minutes\"\n      },\n      {\n        \"ChapterName\": \"Control Flow (if-else)\",\n        \"About\": \"Conditional statements, using 'if', 'elif', and 'else' to control program execution based on conditions.\",\n        \"Duration\": \"20 minutes\"\n      },\n      {\n        \"ChapterName\": \"Loops (for and while)\",\n        \"About\": \"Iterating through sequences with 'for' loops and repeating blocks of code with 'while' loops.\",\n        \"Duration\": \"20 minutes\"\n      },\n      {\n        \"ChapterName\": \"Working with Lists and Tuples\",\n        \"About\": \"Creating, manipulating, and accessing elements in lists and tuples, fundamental data structures in Python.\",\n        \"Duration\": \"15 minutes\"\n      }\n    ]\n  }\n]\n```\n" },
//           ],
//         },
//       ],
//     });
//     // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//     // console.log(result.response.text());
//   } else {
//     console.error("This function should be called on the server side only.");
//     return null;
//   }
// };
// //

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */
'use client'
require('dotenv').config()
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  }  from "@google/generative-ai";
  
  const apiKey = "AIzaSyCRE8tFxm2wK9u-6Qwc3Y08Xhgh7JeFXqk";
  console.log(apiKey);
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  async function run(promt) {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(promt);
    console.log(JSON.parse(result.response.text()));
    return JSON.parse(result.response.text())
  }
  
  export default run;
  

  
