import {FaFacebook, FaInstagram, FaTwitter, FaGithub, FaBasketballBall} from "react-icons/fa"

export function Footer(){

    return(
        <div className="flex flex-col px-2 sm:px-14 py-4 sm:py-6 items-center">
            <div className="flex flex-wrap text-gray-400">
                <a className=" m-2 sm:mx-3">About</a>
                <a className=" m-2 sm:mx-3">Blog</a>
                <a className=" m-2 sm:mx-3">Team</a>
                <a className=" m-2 sm:mx-3">Pricing</a>
                <a className=" m-2 sm:mx-3">Contact</a>
                <a className=" m-2 sm:mx-3">Terms</a>

            </div>
            <div className="flex text-lg text-gray-400">
                <FaFacebook className=" m-3 sm:m-4"/>
                <FaInstagram className=" m-3 sm:m-4"/>
                <FaTwitter className=" m-3 sm:m-4"/>
                <FaGithub className=" m-3 sm:m-4"/>
                <FaBasketballBall className=" m-3 sm:m-4"/>

            </div>
            <div className="text-gray-400 text-xs pt-2">
            © 2021 SomeCompany, Inc. All rights reserved.
            </div>
        </div>
    )
}