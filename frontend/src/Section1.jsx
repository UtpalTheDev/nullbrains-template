import {BsSearch} from "react-icons/bs"
export default function Section1(){
    const images=[
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.53i27HRznOQwZDKbh3DB6QHaHa%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.n6NgxakoBD2QrrJAD8bOGAHaHa%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.n6ZqiOPIIM7y-BAilPMmnwHaHa%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.CyAESZcQt7IiZE7apg93EQHaHa%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.yn9RP2ddol3hq9X_NSSwcgHaHa%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.SAKUC2wnqTsqzTzKqtajXQHaHa%26pid%3DApi&f=1"
    
    ]
    return(
        <>
        <div className="min-h-100 sm:min-h-152 flex flex-col px-2 sm:px-14">
        <div className="flex justify-between py-4 sm:py-6 items-center flex-wrap">
          <div className="font-bold text-lg sm:text-xl">nullbrains</div>
          <div className="flex justify-center items-center">
            <a className="px-1 sm:px-4">Home</a>
            <a className="px-1 sm:px-4">Features</a>
            <a className="px-1 sm:px-4">Blog</a>
            <a className="px-1 sm:px-4">Contact</a>
            <a className="px-1 sm:px-4"><BsSearch/></a>

          </div>
          <div className="flex justify-center items-center">
            <a className="pr-1 sm:pr-4">Sign In</a>
            <button className="px-2 sm:px-5 bg-blue-700 text-white rounded-3xl py-1 sm:py-2 text-sm">Sign Up</button>

          </div>
        </div>
        <div className="h-px  bg-gray-300"> </div>
        <div className="flex-grow flex flex-col justify-center items-center text-center">
          <div className="font-bold text-4xl sm:text-6xl py-2"> 
            <div className="">Start Crafting Your</div>
            <div className="text-blue-600">Next Great Idea</div>
          </div>
          <div className="py-3 sm:py-8 text-xs sm:text-base text-gray-400">
            <div>Simplifying the creation of landing pages, blog pages,
            </div>
            <div>application pages and so much more!
            </div>
          </div>

          <div className="flex justify-center py-2 sm:py-3">
            <div className="relative py-2.5 px-4">
            <button className="relative px-4 py-3 bg-blue-600 rounded-3xl text-white text-sm sm:px-5 font-medium">Purchase Now
            </button>
            <button className="absolute top-0 right-0 text-xs bg-green-500 px-1.5 py-px rounded-2xl text-white">only $15/mo</button>
            <div className="text-gray-400 text-xs text-blue-500 py-2">Learn More</div>
            </div>

        </div>

      </div>
      
      </div>
      <div className="px-2 sm:px-14">
        <div className="text-xs sm:text-base font-medium text-center">Trusted By Top-Leading Companies
        </div>
        
        <div className="flex justify-center py-2 ">
          <div className="flex overflow-x-auto sm:w-15">
            {
              images.map(item=>{
                return(
                  <img src={item} key={item} alt="logo" className="h-16 px-2 sm:h-28"/>
                )
              })
            }
          </div>
         
        </div>
      </div>
      </>
    )
}