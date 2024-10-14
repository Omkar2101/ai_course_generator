import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UserInputContext } from "@/app/_context/UserInputContext";

function SelectOption() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  
  const handleoption = (key, level) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [key]: level,
    }));
  };
  const handleChapter=(key,val)=>{
    setUserCourseInput(prev=>({
      ...prev,
      [key]: val,

    }))
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Difficulty Level */}
        <div className="flex flex-col space-y-2">
          <label className="text-base md:text-lg font-medium">Difficulty Level</label>
          <Select defaultValue={userCourseInput.level} onValueChange={(value) => handleoption('level', value)}>
            <SelectTrigger className="w-full md:w-auto">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Course Duration */}
        <div className="flex flex-col space-y-2">
          <label className="text-base md:text-lg font-medium">Course Duration</label>
          <Select defaultValue={userCourseInput.duration} onValueChange={(value) => handleoption('duration', value)}>
            <SelectTrigger className="w-full md:w-auto">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 hour">1 hr</SelectItem>
              <SelectItem value="2 hours">2 hr</SelectItem>
              <SelectItem value="3 hours">3 hr</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Add Video */}
        <div className="flex flex-col space-y-2">
          <label className="text-base md:text-lg font-medium">Add Video</label>
          <Select defaultValue={userCourseInput.includevdo} onValueChange={(value) => handleoption('includevdo', value)}>
            <SelectTrigger className="w-full md:w-auto">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Number of Chapters */}
        <div className="flex flex-col space-y-2">
          <label className="text-base md:text-lg font-medium">Number of Chapters</label>
          <Input
            onChange={(e)=>handleChapter('chapters',e.target.value)}
            defaultValue={userCourseInput.chapters}
            className="w-full md:w-auto"
            placeholder="Enter number"
          />
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
