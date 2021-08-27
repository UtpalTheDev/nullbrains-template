import automated_tasks from "./assets/automated_tasks.png"
import boost_productivity from "./assets/boost_productivity.png"
export default function Section2(){

    return(
        <div className="min-h-100 sm:min-h-152 flex flex-col px-2 sm:px-14 py-4 sm:py-6">
            <div className="flex items-center justify-center py-4 sm:py-0">
                <div className="flex justify-center items-center max-w-md hidden sm:flex sm:mx-8">
                <img src={boost_productivity} alt="img" className="w-full"/>
                </div>

                <div className="max-w-sm sm:mx-8"> 
                    <div className="text-xl sm:text-2xl font-medium py-2">Boost Productivity</div>
                    <div className="pt-1 pb-4 sm:pb-6 text-gray-600">Build an atmosphere that creates productivity in your organization and your company culture.</div>
                    <div>
                        <div className="flex py-1.5 items-center">
                            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                            <div className="pl-2 text-gray-400">
                              Maximize productivity and growth
                            </div>
                        </div>
                        <div className="flex py-1.5 items-center">
                            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                            <div className="pl-2 text-gray-400">
                              Speed past your competition
                            </div>
                        </div>
                        <div className="flex py-1.5 items-center">
                            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                            <div className="pl-2 text-gray-400">
                              Learn the top technique
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="flex items-center justify-center py-4 sm:py-0">

                <div className="max-w-sm sm:mx-8"> 
                    <div className="text-xl sm:text-2xl font-medium py-2">Automated Tasks</div>
                    <div className="pt-1 pb-4 sm:pb-6 text-gray-600">Save time and money with our revolutionary services. We are the leaders in the industry.</div>
                    <div>
                        <div className="flex py-1.5 items-center">
                            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                            <div className="pl-2 text-gray-400 ">
                              Automated task management workflow
                            </div>
                        </div>
                        <div className="flex py-1.5 items-center">
                            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                            <div className="pl-2 text-gray-400">
                              Detailed analytics for your data
                            </div>
                        </div>
                        <div className="flex py-1.5 items-center">
                            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                            <div className="pl-2 text-gray-400">
                              Some awesome integrations
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center    max-w-sm hidden sm:flex sm:mx-8">
                   <img src={automated_tasks} alt="img" className="w-full"/>
                </div>
            </div> 
        </div>
    )
}