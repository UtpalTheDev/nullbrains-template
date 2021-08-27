import glass from "./assets/glass.png"
import game from "./assets/game.png"
import orange from "./assets/orange.png"
export default function Section5(){

    return(
        <div className="min-h-screen flex flex-col px-2 sm:px-14 py-4 sm:py-6">
            <div className="font-bold text-2xl sm:text-4xl">
                The Project Blog
            </div>
            <div className="text-gray-500">
                Design and layouts to help you with your app.
            </div>
            <div className="flex flex-wrap justify-center pt-6 sm:pt-16 items-end">
                <div className="w-68 bg-gray-300 rounded-b-md m-2 bg-purple-500 sm:m-3" style={{minHeight:'26rem'}}>
                 <div className="relative">
                    <img src={glass}/>
                    <div className=" absolute bg-white px-3 py-1.5 text-xs -bottom-3.5 left-4 rounded-2xl text-purple-500">
                        RESOURCES
                    </div>

                 </div>
                 <div className="pt-4 px-3.5 font-bold text-3xl text-white sm:text-3xl ">
                        Refreshing Designs
                 </div>
                 <div className="px-3.5 text-sm text-white pt-2 pb-4">
                     Quench satisfying designs to help you stir up emotion and tell a story.
                 </div>
                </div>
                
                <div className="w-68 bg-gray-300 rounded-md m-2 bg-blue-400 sm:m-3" style={{minHeight:'28rem'}}>
                 <div className="relative">
                    <img className="rounded-t-md"src={orange}/>
                    <div className=" absolute bg-white px-3 py-1.5 text-xs -bottom-3.5 left-4 rounded-2xl text-blue-400">
                        LIFESTYLE
                    </div>

                 </div>
                 <div className="pt-4 px-3.5 font-bold text-3xl text-white sm:text-3xl ">
                        Healthier Lifestyle
                 </div>
                 <div className="px-3.5 text-sm text-white pt-2 pb-4">
                     Living a healthier lifestyle will help with your productivity and your mind-set.
                 </div>
                </div>
                <div className="w-68 bg-gray-300 rounded-b-md m-2 bg-yellow-400 sm:m-3" style={{minHeight:'26rem'}}>
                 <div className="relative">
                    <img src={game}/>
                    <div className=" absolute bg-white px-3 py-1.5 text-xs -bottom-3.5 left-4 rounded-2xl text-yellow-400">
                        ENTERTAINMENT
                    </div>

                 </div>
                 <div className="pt-4 px-3.5 font-bold text-3xl text-white sm:text-3xl ">
                        Gaming Evolution
                 </div>
                 <div className="px-3.5 text-sm text-white pt-2 pb-4">
                     Learn about the evolution of gaming and how it started a revolution.
                 </div>

                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="w-68 h-56 bg-gray-300">
                    <div>
                        <img src="https://images.unsplash.com/photo-1583058905141-deef2de746bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA2fHxwZW9wbGV8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    </div>
                </div>
            </div>
        </div>
    )
}