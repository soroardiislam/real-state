const Explore = () => {
  return (
    <div className="py-20">
      <div className="flex justify-between items-center mb-16">
        <div>
          <h2 className="text-4xl text-[#1F4B43] font-medium leading-tight">
            Explore The Closest <br /> Habitation to Your Location
          </h2>
        </div>
        <button className="flex items-center gap-2 border border-[#1F4B43] rounded-full px-6 py-3 text-[#1F4B43] hover:bg-[#1F4B43] hover:text-white transition-colors duration-300">
          <div className="w-5 h-5 bg-[#1F4B43] rounded-full flex items-center justify-center text-white text-xs">
            ↗
          </div>
          Browse All House
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6 h-[400px]">
        <div className="group relative rounded-[20px] overflow-hidden col-span-1 h-full">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="House 1"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-[15px] shadow-lg">
            <h4 className="text-[#1F4B43] font-bold text-lg mb-1">
              Rutherbook
            </h4>
            <div className="flex items-center gap-1 text-gray-500 text-xs mb-3">
              <span>📍</span>
              <span>Ngurag Rai Street Denpasar, 80165</span>
            </div>
            <div className="flex justify-between items-center border-t border-gray-100 pt-3">
              <span className="text-[#1F4B43] font-semibold">$1,050,00</span>
              <button className="text-blue-400 text-sm flex items-center gap-1">
                View Details <span>→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-[20px] overflow-hidden col-span-1 h-full">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="House 2"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="rounded-[20px] overflow-hidden col-span-1 h-full">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="House 3"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="rounded-[20px] overflow-hidden col-span-1 h-full">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="House 4"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
