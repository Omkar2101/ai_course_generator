// "use client";
// import { Button } from "@/components/ui/button";
// import React, { useEffect, useState } from "react";
// import { HiRectangleStack } from "react-icons/hi2";
// import { MdLibraryBooks } from "react-icons/md";
// import { TbTableOptions } from "react-icons/tb";
// import SelectCategory from "./_compoents/SelectCategory";
// import TopicDescription from "./_compoents/TopicDescription";
// import SelectOption from "./_compoents/SelectOption";
// import { UserInputContext } from "../_context/UserInputContext";
// import { useContext } from "react";
// import run  from "../configs/AiModel";
// import Loading from "./_compoents/Loading";


// function CreateCourse() {
//   const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
//   useEffect(() => {
//    console.log(userCourseInput);
   
//   }, [userCourseInput])
  
//   // Only one state should be active at a time, so we can use a single state to track the step.
//   const [activeStep, setActiveStep] = useState("Category");
//   const [loading,setLoading] =useState(false)
//   function handleCategory() {
//     setActiveStep("Category");
//     console.log("handleCategory");
//   }

//   function handleTopic() {
//     setActiveStep("Topic & Desc");
//     console.log("handleTopic");
//   }

//   function handleOptions() {
//     setActiveStep("Options");
//     console.log("handleOptions");
//   }

//   // Stepper information
//   const steeper = [
//     {
//       id: 1,
//       name: "Category",
//       icon: <HiRectangleStack />,
//     },
//     {
//       id: 2,
//       name: "Topic & Desc",
//       icon: <MdLibraryBooks />,
//     },
//     {
//       id: 3,
//       name: "Options",
//       icon: <TbTableOptions />,
//     },
//   ];

//   //using that gemini power here
//   const GenerateCourseLayout =async()=>{
//     setLoading(true)
//     const BASIC_PROMT='Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration'
    
//     const USER_INPUT = `Category: ${userCourseInput.category}, Topic: ${userCourseInput.topic}, Level: ${userCourseInput.level}, Duration: ${userCourseInput.duration}, NoOf Chapters: ${userCourseInput.chapters}, in JSON format`;
//     const FINAL_PROMPT=BASIC_PROMT+USER_INPUT
//     console.log(FINAL_PROMPT);
//     const result =await run(FINAL_PROMPT)
//     console.log(JSON.parse(result.response ?.text()));
//     setLoading(false)
//     console.log(loading);
    
//   }


//   return (
//     <>
//       {/* Stepper */}
//       <div className="flex flex-col items-center justify-center">
//         <h2 className="text-3xl text-green-500 ">Create Course</h2>
//         <div className="flex">
//           {steeper.map((item) => (
//             <div
//               key={item.id}
//               className="flex w-[160px] flex-col items-center justify-between py-4"
//             >
//               <div className="flex flex-col gap-2 items-center">
//                 <div
//                   onClick={
//                     item.name === "Category"
//                       ? handleCategory
//                       : item.name === "Topic & Desc"
//                       ? handleTopic
//                       : handleOptions
//                   }
//                   className="p-3 bg-gray-200 rounded-xl cursor-pointer"
//                 >
//                   {item.icon}
//                 </div>
//                 <h2>{item.name}</h2>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Components */}
//       <div className="flex items-center justify-between mt-6">
//         <Button>Previous</Button>

//         {/* Conditional rendering based on the active step */}
//         {activeStep === "Category" && <SelectCategory />}
//         {activeStep === "Topic & Desc" && <TopicDescription />}
//         {activeStep === "Options" && <SelectOption />}

//         <Button>Next</Button>
        
//       </div>
//       <div className="flex items-center justify-center mt-6">
//       <Button  onClick={()=>(GenerateCourseLayout())}>Generate Course</Button>
//       <Loading loading={loading}></Loading>
//       </div>
      
//     </>
//   );
// }

// export default CreateCourse;
"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { HiRectangleStack } from "react-icons/hi2";
import { MdLibraryBooks } from "react-icons/md";
import { TbTableOptions } from "react-icons/tb";
import SelectCategory from "./_compoents/SelectCategory";
import TopicDescription from "./_compoents/TopicDescription";
import SelectOption from "./_compoents/SelectOption";
import { UserInputContext } from "../_context/UserInputContext";
import { useContext } from "react";
import run from "../configs/AiModel";
import Loading from "./_compoents/Loading";

function CreateCourse() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  useEffect(() => {
    console.log(userCourseInput);
  }, [userCourseInput]);

  // State management
  const [activeStep, setActiveStep] = useState("Category");
  const [loading, setLoading] = useState(false); // Make sure loading is a boolean

  function handleCategory() {
    setActiveStep("Category");
    console.log("handleCategory");
  }

  function handleTopic() {
    setActiveStep("Topic & Desc");
    console.log("handleTopic");
  }

  function handleOptions() {
    setActiveStep("Options");
    console.log("handleOptions");
  }

  // Stepper information
  const steeper = [
    {
      id: 1,
      name: "Category",
      icon: <HiRectangleStack />,
    },
    {
      id: 2,
      name: "Topic & Desc",
      icon: <MdLibraryBooks />,
    },
    {
      id: 3,
      name: "Options",
      icon: <TbTableOptions />,
    },
  ];

  // Using that gemini power here
  const GenerateCourseLayout = async () => {
    setLoading(true);
    const BASIC_PROMT =
      "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration";

    const USER_INPUT = `Category: ${userCourseInput.category}, Topic: ${userCourseInput.topic}, Level: ${userCourseInput.level}, Duration: ${userCourseInput.duration}, NoOf Chapters: ${userCourseInput.chapters}, in JSON format`;
    const FINAL_PROMPT = BASIC_PROMT + USER_INPUT;
    console.log(FINAL_PROMPT);

    try {
      const result = await run(FINAL_PROMPT);
      console.log(JSON.parse(result?.response?.text()));
    } catch (error) {
      console.error("Error generating course layout:", error);
    } finally {
      setLoading(false); // Ensure loading is set to false after the async operation completes
    }
  };

  return (
    <>
      {/* Stepper */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl text-green-500 ">Create Course</h2>
        <div className="flex">
          {steeper.map((item) => (
            <div
              key={item.id}
              className="flex w-[160px] flex-col items-center justify-between py-4"
            >
              <div className="flex flex-col gap-2 items-center">
                <div
                  onClick={
                    item.name === "Category"
                      ? handleCategory
                      : item.name === "Topic & Desc"
                      ? handleTopic
                      : handleOptions
                  }
                  className="p-3 bg-gray-200 rounded-xl cursor-pointer"
                >
                  {item.icon}
                </div>
                <h2>{item.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Components */}
      <div className="flex items-center justify-between mt-6">
        <Button>Previous</Button>

        {/* Conditional rendering based on the active step */}
        {activeStep === "Category" && <SelectCategory />}
        {activeStep === "Topic & Desc" && <TopicDescription />}
        {activeStep === "Options" && <SelectOption />}

        <Button>Next</Button>
      </div>
      <div className="flex items-center justify-center mt-6">
        <Button onClick={GenerateCourseLayout}>Generate Course</Button>
        <Loading loading={loading} />
      </div>
    </>
  );
}

export default CreateCourse;
