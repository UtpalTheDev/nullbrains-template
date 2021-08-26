import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main">
      <div className="min-h-screen flex flex-col">
      <div className="flex justify-between py-4 px-2 sm:px-14 items-center">
        <div className="font-bold">nullbrains</div>
        <div className="flex justify-center">
          <a className="px-1 sm:px-4">Home</a>
          <a className="px-1 sm:px-4">Features</a>
          <a className="px-1 sm:px-4">Blog</a>
          <a className="px-1 sm:px-4">Contact</a>
          <a className="px-1 sm:px-4">Contact</a>
          <a className="px-1 sm:px-4">search</a>

        </div>
        <div className="flex justify-center items-center">
          <a className="px-1 sm:px-4">Sign In</a>
          <button className="px-2 sm:px-5 bg-blue-700 text-white rounded-3xl py-1 sm:py-2 text-sm">Sign Up</button>

        </div>
      </div>
      <div className="h-px  bg-gray-300 mx-2 sm:mx-14"> </div>
      <div className="flex-grow flex flex-col justify-center items-center text-center">
        <div className="font-bold text-4xl sm:text-6xl "> 
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
          <div className="relative py-1.5 px-4">
          <button className="relative px-4 py-3 bg-blue-600 rounded-3xl text-white text-sm sm:px-5">Purchase Now
          </button>
          <button className="absolute top-0 right-0 text-xs bg-green-500 px-1.5 py-px rounded-2xl text-white">only $15/mo</button>
          <div className="text-gray-400 text-xs text-blue-500 py-2">Learn More</div>
          </div>
          

        </div>
      </div>
      </div>

    </div>
  );
}

export default App;
