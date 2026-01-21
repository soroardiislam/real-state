import React from 'react';

const Control = () => {
  return (
    <div className="py-20 flex items-center gap-20">
      <div className="w-1/2 relative">
        <div className="rounded-[30px] overflow-hidden h-[500px] w-full relative">
            
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Interior" 
            className="w-full h-full object-cover"
          />
        
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-[#DDF1E6]/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#1F4B43] ml-1">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <h2 className="text-4xl text-[#1F4B43] font-medium leading-tight mb-6">
          Take Control of Your Property <br />
          Easy & Hassel Free
        </h2>
        <p className="text-gray-500 mb-8 max-w-md">
          Need a best favorite place with family right now? Here's the best selection for you! Amazing properties with the most property.
        </p>
        
        <button className="flex items-center gap-2 border border-[#1F4B43] rounded-full px-6 py-3 text-[#1F4B43] hover:bg-[#1F4B43] hover:text-white transition-colors duration-300">
           <div className="w-5 h-5 bg-[#1F4B43] rounded-full flex items-center justify-center text-white text-xs group-hover:bg-white group-hover:text-[#1F4B43]">
            ↗
          </div>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Control;
