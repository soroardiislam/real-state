import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Property Valuation",
      description: "Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#1F4B43]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
      active: true,
    },
    {
      title: "Property Management",
      description: "Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#1F4B43]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
        </svg>
      ),
      active: false,
    },
    {
      title: "Financial Reporting",
      description: "Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#1F4B43]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      active: false,
    },
    {
      title: "24hr Consultation",
      description: "Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#1F4B43]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      active: false,
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl text-[#1F4B43] font-medium leading-tight mb-4">
          Tailored Solutions for Your <br /> Real Estate Needs
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Our range of services includes expert property valuations, seamless buying and selling assistance, and personalized rental solutions. Experience hassle-free real estate transactions.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`p-8 rounded-[20px] transition-colors duration-300 ${
              service.active ? 'bg-[#1F4B43] text-white' : 'bg-white text-[#1F4B43] hover:bg-gray-50'
            }`}
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${
              service.active ? 'bg-white/10' : 'bg-[#E7F6F1]'
            }`}>
              {/* Clone icon to apply specific classes based on active state if needed, 
                  though current SVG has currentColor/hardcoded text color. 
                  Let's adjust SVG color handling for the active state by overriding text color context */}
              <div className={service.active ? 'text-white' : 'text-[#1F4B43]'}>
                {React.cloneElement(service.icon, { className: "w-8 h-8" })}
              </div>
            </div>
            <h3 className={`text-xl font-medium mb-4 ${service.active ? 'text-white' : 'text-[#1F4B43]'}`}>
              {service.title}
            </h3>
            <p className={`text-sm leading-relaxed ${service.active ? 'text-white/80' : 'text-gray-500'}`}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
