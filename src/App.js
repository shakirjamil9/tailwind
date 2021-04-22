import React from "react";
import "./App.css";
import dp from "./images/dp.JPG";

function App() {
  return (
    <div className="container mx-auto bg-blue-700 py-5">
      <div className="flex flex-wrap justify-evenly items-start h-96 border border-green-900">
        <div className="m-2 h-48 w-48 bg-green-500"></div>
        <div className="m-2 h-48 w-48 bg-red-500"></div>
        <div className="m-2 h-48 w-48 bg-purple-500"></div>
      </div>
      {/* Custom Card */}
      <div className="max-w-sm flex p-4 animate-bounce bg-white rounded-lg mx-auto shadow-2xl">
        <div className="flex-shrink-0">
          <img src={dp} className="h-12 w-12 rounded-full" />
        </div>
        <div className="ml-6 pt-1">
          <h4 className="text-xl text-gray-900">Shakir</h4>
          <p className="text-base text-gray-600">You've a new message</p>
        </div>
      </div>
      <div className="border border-black max-h-20 overflow-y-scroll">
        <div>
          <div className="sticky top-0 p-5 bg-green-300 tracking-normal">Sticky Heading 1</div>
          <p className="py-4">Hello1</p>
        </div>
        <div>
          <div className="sticky top-0 p-5 bg-green-300">Sticky Heading 2</div>
          <p>Hello1</p>
        </div>
        <div>
          <div className="sticky top-0 ">Sticky Heading 3</div>
          <p>Hello1</p>
        </div>
      </div>
    </div>
  );
}

export default App;
