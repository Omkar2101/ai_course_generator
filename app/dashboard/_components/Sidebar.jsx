"use client"

import React from "react";
import Image from "next/image";
import { HiOutlineHome } from "react-icons/hi2";
import { PiStackPlusLight } from "react-icons/pi";
import { GrUpgrade } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Progress } from "@/components/ui/progress"


function Sidebar() {
  const Menulist = [
    {
      id: 1,
      name: "Home",
      icon:<HiOutlineHome/>,
      path:'/dashboard'
    },
    {
      id: 2,
      name: "Explore",
      icon:<PiStackPlusLight></PiStackPlusLight>,
      path:'/dashboard/explore'
    },
    {
      id: 3,
      name: "Upgrade",
      icon:<GrUpgrade></GrUpgrade>,
      path:'/dashboard/upgrade'
    },
    {
      id: 4,
      name: "Logout",
      icon:<IoLogOutOutline></IoLogOutOutline>,
      path:'/dashboard/logout'
    },
  ];
  //this will return the pathname in the url
  const pathname=usePathname()
  return (
    <>
      <div className="fixed h-full   p-3 shadow-md ">
        <Image src={"/geeks.svg"} width={160} height={110}></Image>
        <hr className="my-2" />
        {
            Menulist.map((item,index)=>{
                return (
                    <Link href={item.path}>
                    <div key={index} className= {`flex items-center gap-2 text-grey-600 p-3 rounded-md cursor-pointer hover:bg-gray-500 hover:text-white ${item.path==pathname && 'bg-gray-600 text-white'}`}  
                         >
                         <div className="text-2xl">{item.icon}</div>  {/* Replace with actual icon */}
                         <h2  className="px-8 py-2 text-xl ">{item.name}</h2>
                    </div>
                    </Link>
              )
            })
        }
        <div className="absolute bottom-16 w-[80%]">
            <Progress value={33}></Progress>
            <h2 className="text-sm my-2">3 out of 5 course created</h2>
            <h2 className="text-xs text-gray-500">Upgrade your plan for more courses</h2>
        </div>
      </div>
      
    </>
  );
}

export default Sidebar;
