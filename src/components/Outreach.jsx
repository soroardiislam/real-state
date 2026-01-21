import React from "react";

const Outreach = () => {
  return (
    <div className="py-20 flex gap-8 h-[600px]">
      <div className="w-1/2 bg-[#E7F6F1] rounded-[30px] p-12 flex flex-col justify-center relative overflow-hidden">
        <h2 className="text-5xl text-[#1F4B43] font-medium leading-tight mb-8">
          More Personalized <br />
          Outreach With <br />
          Automation
          <span className="inline-block ml-4 text-4xl">✨</span>
        </h2>

        <p className="text-[#1F4B43]/70 mb-12 max-w-md leading-relaxed">
          Explore exceptional properties that redefine luxury. From elegant
          penthouses to serene countryside estates, we curate the finest
          selections to match your distinct lifestyle. Explore exceptional
          properties.
        </p>

        <div className="bg-white rounded-full p-2 flex items-center shadow-sm max-w-md">
          <div className="pl-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="flex-1 px-4 py-2 outline-none text-[#1F4B43] placeholder:text-gray-400 text-sm"
          />
          <button className="bg-[#1F4B43] text-white px-6 py-3 rounded-full text-sm hover:bg-[#15342F] transition-colors">
            Subscribe Now
          </button>
        </div>
      </div>

      <div className="w-1/2 rounded-[30px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Luxury Home"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Outreach;
