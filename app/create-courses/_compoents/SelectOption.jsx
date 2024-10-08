import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

function SelectOption() {
  return (
    <div className="container  px-[350px] py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Difficulty Level */}
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium">Difficulty Level</label>
          <Select>
            <SelectTrigger className="w-full md:w-[300px]">
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
          <label className="text-lg font-medium">Course Duration</label>
          <Select>
            <SelectTrigger className="w-full md:w-[300px]">
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
          <label className="text-lg font-medium">Add Video</label>
          <Select>
            <SelectTrigger className="w-full md:w-[300px]">
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
          <label className="text-lg font-medium">Number of Chapters</label>
          <Input className="w-full md:w-[300px]" placeholder="Enter number" />
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
