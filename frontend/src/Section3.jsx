import {BiCertification,BiTerminal} from "react-icons/bi"
import {AiOutlineNotification, AiOutlineBlock} from "react-icons/ai"
import {FiBox} from "react-icons/fi"
import {RiCoupon2Line} from "react-icons/ri"
export default function Section3(){

    return(
        <div className="min-h-100 sm:min-h-152 flex flex-col px-2 sm:px-14 py-4 sm:py-20 text-center">
            <div className=" text-2xl font-semibold sm:text-3xl">
                Our Features
            </div>
            <div className="text-gray-600 py-1">
                Check out our list of awesome features below
            </div>
            <div className="flex flex-wrap justify-center py-2 sm:py-4">

                <div className="w-72 sm:w-80 rounded-xl h-52 bg-gray-100 flex flex-col items-center justify-center m-2 sm:m-3 px-2 sm:px-6">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center">
                       <BiCertification className="w-6 h-6 text-white"/> 
                    </div>
                    <div className="py-3 text-gray-700">
                        Certifications
                    </div>
                    <div className="text-sm text-gray-500">
                        Each of our plan provide you and your team with certifications.
                    </div>
                </div>
                <div className="w-72 sm:w-80 rounded-xl h-52 bg-gray-100 flex flex-col items-center justify-center m-2 sm:m-3 px-2 sm:px-6">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center">
                        <AiOutlineNotification className="w-6 h-6 text-white"/>
                    </div>
                    <div className="py-3 text-gray-700">
                        Notifications
                    </div>
                    <div className="text-sm text-gray-500">
                        Send out notifications to all your customers to keep then engaged. 
                    </div>
                </div>
                <div className="w-72 sm:w-80 rounded-xl h-52 bg-gray-100 flex flex-col items-center justify-center m-2 sm:m-3 px-2 sm:px-6">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center">
                        <FiBox className="w-6 h-6 text-white"/>
                    </div>
                    <div className="py-3 text-gray-700">
                        Bundles
                    </div>
                    <div className="text-sm text-gray-500">
                        High-quality bundles of awesome tools to help you out. 
                    </div>
                </div>
                <div className="w-72 sm:w-80 rounded-xl h-52 bg-gray-100 flex flex-col items-center justify-center m-2 sm:m-3 px-2 sm:px-6">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center">
                    <BiTerminal className="w-6 h-6 text-white"/>
                    </div>
                    <div className="py-3 text-gray-700">
                        Developer Tools
                    </div>
                    <div className="text-sm text-gray-500">
                        Developer tools to help grow your application and keep it up-to-date.
                    </div>
                </div>
                <div className="w-72 sm:w-80 rounded-xl h-52 bg-gray-100 flex flex-col items-center justify-center m-2 sm:m-3 px-2 sm:px-6">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center">
                        <AiOutlineBlock className="w-6 h-6 text-white"/>
                    </div>
                    <div className="py-3 text-gray-700">
                        Building Blocks
                    </div>
                    <div className="text-sm text-gray-500">
                        The right kind of building blocks to take your company to the next level.
                    </div>
                </div>
                <div className="w-72 sm:w-80 rounded-xl h-52 bg-gray-100 flex flex-col items-center justify-center m-2 sm:m-3 px-2 sm:px-6">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center">
                        <RiCoupon2Line className="w-6 h-6 text-white"/>
                    </div>
                    <div className="py-3 text-gray-700">
                        Coupons
                    </div>
                    <div className="text-sm text-gray-500">
                        Coupons system to provide special offers and discounts for your app. 
                    </div>
                </div>
            </div>

        </div>
    )
}