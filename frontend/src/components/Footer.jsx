import {FaFacebook, FaInstagram, FaTwitter, FaGithub, FaBasketballBall} from "react-icons/fa"

export function Footer(){

    return(
        <div id="footer" className="flex flex-col px-2 sm:px-14 py-4 sm:py-6 items-center">
            <div className="flex flex-wrap text-gray-400">
                <a className=" m-2 sm:mx-3 cursor-pointer">About</a>
                <a className=" m-2 sm:mx-3 cursor-pointer">Blog</a>
                <a className=" m-2 sm:mx-3 cursor-pointer">Team</a>
                <a className=" m-2 sm:mx-3 cursor-pointer">Pricing</a>
                <a className=" m-2 sm:mx-3 cursor-pointer">Contact</a>
                <a className=" m-2 sm:mx-3 cursor-pointer">Terms</a>

            </div>
            <div className="flex text-lg text-gray-400">
                <FaFacebook className=" m-3 sm:m-4 cursor-pointer"/>
                <FaInstagram className=" m-3 sm:m-4 cursor-pointer"/>
                <FaTwitter className=" m-3 sm:m-4 cursor-pointer"/>
                <FaGithub className=" m-3 sm:m-4 cursor-pointer"/>
                <FaBasketballBall className=" m-3 sm:m-4 cursor-pointer"/>

            </div>
            <div className="text-gray-400 text-xs pt-2">
            © 2021 SomeCompany, Inc. All rights reserved.
            </div>
        </div>
    )
}