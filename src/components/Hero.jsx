import logo from "../assets/Group 47672.png"
import picture from "../assets/Mask group.png"



const Hero = () => {
  return (
    <div className="flex justify-between pt-10 gap-5 ">
      <div className="bg-[#DDF1E6] rounded-[10px] p-10 w-[50%]">
        <h1 className="text-5xl text-[80px]">Elevate Your</h1>
        <h1 className="text-5xl text-[80px]">Living Experience</h1>

        <p className="text-black/60 text-[20px] py-10">Explore exceptional properties that redefine luxury. From elegant penthouses to serene countryside estates, we curate the finest selections to match your distinct lifestyle. Explore exceptional properties that redefine luxury. From elegant penthouses to serene countryside estates, we curate the finest selections to match your distinct lifestyle.</p>
        <div className="flex ">
          <img src={logo} alt="" />
          <span className="pt-4 ml-2 text-[20px]">Trusted by 14M+ Customer</span>
        </div>

        <div className="bg-white rounded-full py-2 px-2 mt-8 flex justify-between items-center w-full shadow-sm">
          <div className="flex items-center gap-3 pl-4 w-full">
            
            <input 
              type="text" 
              placeholder=" ⌕ Search city, region or address..." 
              className="outline-none w-full text-sm text-gray-700 placeholder-gray-500" 
            />
          </div>
          <button className="bg-[#1F4B43] hover:bg-[#173d36] text-white px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-colors">
            Browse House's
          </button>
        </div>
        
      </div>
      <div className="w-[50%] ">
        <img className="" src={picture} alt="" />
      </div>
    </div>
  )
}

export default Hero