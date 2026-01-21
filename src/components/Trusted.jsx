
const Trusted = () => {
  return (
    <div className="py-20">
      <div className="flex justify-between items-center mb-16">
        <div>
          <h2 className="text-4xl text-[#1F4B43] font-medium leading-tight">
            We are The Best & Most Trusted <br /> Real Estate Agent
          </h2>
        </div>
        <button className="flex items-center gap-2 border border-[#1F4B43] rounded-full px-6 py-3 text-[#1F4B43] hover:bg-[#1F4B43] hover:text-white transition-colors duration-300">
          <div className="w-5 h-5 bg-[#1F4B43] rounded-full flex items-center justify-center text-white text-xs group-hover:bg-white group-hover:text-[#1F4B43]">
            ↗
          </div>
          Browse House Now
        </button>
      </div>

      <div className="flex gap-8 justify-between">
        {/* Card 1 */}
        <div className="bg-[#E5E5E5] rounded-[50px] py-16 px-10 flex-1 text-center">
          <h3 className="text-5xl text-[#1F4B43] mb-4 font-normal">2.3 K+</h3>
          <p className="text-[#1F4B43]/80 text-lg">Local Premium property</p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1F4B43] rounded-[50px] py-16 px-10 flex-1 text-center text-white">
          <h3 className="text-5xl mb-4 font-normal">75+</h3>
          <p className="text-white/80 text-lg">Awards wining</p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#DDF1E6] rounded-[50px] py-16 px-10 flex-1 text-center">
          <h3 className="text-5xl text-[#1F4B43] mb-4 font-normal">2.3 K+</h3>
          <p className="text-[#1F4B43]/80 text-lg">Local Premium property</p>
        </div>
      </div>
    </div>
  )
}

export default Trusted
