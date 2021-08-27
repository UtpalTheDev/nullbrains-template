import glass from "./assets/glass.png"
import game from "./assets/game.png"
import orange from "./assets/orange.png"
import inspiration from "./assets/inspiration.png"
import food from "./assets/food.png"
import resources from "./assets/resources.png"

export default function Section5(){

    return(
        <div className="min-h-152 flex flex-col px-2 sm:px-12 lg:px-40 py-4 sm:py-6">
            <div className="font-bold text-2xl sm:text-4xl pb-2">
                The Project Blog
            </div>
            <div className="text-gray-500">
                Design and layouts to help you with your app.
            </div>
            <div className="flex flex-wrap justify-center pt-6 sm:pt-8 items-end">
                <div className="w-68 bg-gray-300 rounded-b-md m-2 bg-purple-500 sm:m-5" style={{minHeight:'26rem'}}>
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
                
                <div className="w-68 bg-gray-300 rounded-md m-2 bg-blue-400 sm:m-5" style={{minHeight:'28rem'}}>
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
                <div className="w-68 bg-gray-300 rounded-b-md m-2 bg-yellow-400 sm:m-5" style={{minHeight:'26rem'}}>
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
                <div className="w-70 min-h-64 bg-white rounded-xl border border-gray-200 m-2 sm:m-3">
                    <div>
                        <div className="relative">
                           <img src={inspiration} className="rounded-t-xl w-full" style={{height:"157px"}}/>
                           <div className=" absolute bg-indigo-400 px-3 py-1.5 text-xs -bottom-3.5 left-4 rounded-2xl text-white ">
                              INSPIRATION
                            </div>
                        </div>
                        <div className="pt-5 px-4">
                            <div className="font-bold sm:text-md">
                                Best Workstations of the Year
                            </div>
                            <div className="text-xs text-gray-400 pb-3 pt-1">
                                Check out these inspiring workstations to get ideas on how to level-up your workstation.
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-70 min-h-64 bg-white rounded-xl border border-gray-200 m-2 sm:m-3">
                    <div>
                        <div className="relative">
                           <img src={food} className="rounded-t-xl w-full" style={{height:"157px"}}/>
                           <div className=" absolute bg-red-400 px-3 py-1.5 text-xs -bottom-3.5 left-4 rounded-2xl text-white ">
                              FOOD
                            </div>
                        </div>
                        <div className="pt-5 px-4">
                            <div className="font-bold sm:text-md">
                                Eating for Productivity
                            </div>
                            <div className="text-xs text-gray-400 pb-3 pt-1">
                                Learn how to be more disciplined in your diet and how you can eat to maximize productivity.
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-70 min-h-64 bg-white rounded-xl border border-gray-200 m-2 sm:m-3">
                    <div>
                        <div className="relative">
                           <img src={resources} className="rounded-t-xl w-full" style={{height:"157px"}}/>
                           <div className=" absolute bg-purple-500 px-3 py-1.5 text-xs -bottom-3.5 left-4 rounded-2xl text-white ">
                              RESOURCES
                            </div>
                        </div>
                        <div className="pt-5 px-4">
                            <div className="font-bold sm:text-md">
                                A Design Mind-set
                            </div>
                            <div className="text-xs text-gray-400 pb-3 pt-1">
                                What does it mean to have a design mind-set? Learn how to improve your eye for design.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}