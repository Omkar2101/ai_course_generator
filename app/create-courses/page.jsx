"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { HiRectangleStack } from "react-icons/hi2";
import { MdLibraryBooks } from "react-icons/md";
import { TbTableOptions } from "react-icons/tb";
import SelectCategory from "./_compoents/SelectCategory";
import TopicDescription from "./_compoents/TopicDescription";
import SelectOption from "./_compoents/SelectOption";

function CreateCourse() {
  // Only one state should be active at a time, so we can use a single state to track the step.
  const [activeStep, setActiveStep] = useState("Category");

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
    </>
  );
}

export default CreateCourse;
