
import {BsSearch} from "react-icons/bs"
import { useState } from "react"

export function Navbar(){
    const [modal, setModal] = useState(false)

    return(
        <div className="px-2 sm:px-14 sticky top-0 bg-white z-20">
        <div className="flex justify-between py-4 sm:py-6 items-center flex-wrap">
          <div className="font-bold text-lg sm:text-xl cursor-pointer">
            nullbrains
          <span className="text-purple-700">.</span>
          </div>
          <div className="hidden sm:flex justify-center items-center">
            <a className="px-1 sm:px-4 cursor-pointer" href="#">Home</a>
            <a className="px-1 sm:px-4 cursor-pointer" href="#feature">Features</a>
            <a className="px-1 sm:px-4 cursor-pointer" href="#blog">Blog</a>
            <a className="px-1 sm:px-4 cursor-pointer" href="#footer">Contact</a>
            <a className="px-1 sm:px-4 cursor-pointer"><BsSearch/></a>
          </div>
          
          <div className="flex justify-center items-center">
            <a className="pr-1 sm:pr-4 cursor-pointer">Sign In</a>
            <button className="px-2 sm:px-5 bg-indigo-600 text-white rounded-3xl py-1 sm:py-2 text-sm">Sign Up</button>
            { !modal &&
            <div className=" sm:hidden w-5 h-5 mx-2 cursor-pointer" onClick={()=>{setModal(prev=>!prev)}}>
              
                <div className="bg-black w-full h-0.5 my-1"></div>
                <div className="bg-black w-full h-0.5 my-1"></div>
                <div className="bg-black w-full h-0.5 my-1"></div>
              
            </div>
            }
            {
              modal &&
              <div className="sm:hidden ml-2 cursor-pointer bg-gray-200 px-2 w-7 h-7 flex justify-center items-center" onClick={()=>{setModal(prev=>!prev)}}><span>x</span></div>
            }
            <div className="fixed flex flex-col -left-8 top-0 h-screen justify-center bg-blue-50 px-4 z-10"
            style={{width:modal?`max-content`:`0`, left:modal?`0`:`-2rem`, transition:'all 0.5s ease'}}
                >
                <div className="flex-col justify-center items-center font-semibold text-lg "
                  style={{display:modal?`flex`:`none`}}>
                  <a className="px-3 my-2 sm:px-4 cursor-pointer" href="#">Home</a>
                  <a className="px-3 my-2 sm:px-4 cursor-pointer" href="#feature">Features</a>
                  <a className="px-3 my-2 sm:px-4 cursor-pointer" href="#blog">Blog</a>
                  <a className="px-3 my-2 sm:px-4 cursor-pointer" href="#footer">Contact</a>
                  <a className="px-3 my-2 sm:px-4 cursor-pointer"><BsSearch/></a>
                </div>
            </div>
          </div>
        </div>
        <div className="h-px  bg-gray-300"> </div>
        </div>
    )
}