
const Nav = () => {
  const list = [
    <li>Home</li>,
    <li>Listings</li>,
    <li>Services</li>,
    <li>About Us</li>,
    <li>Rent</li>,
    <li>Sell</li>,
    <li>Buy</li>
  ]
  return (
    <div className="flex justify-between mt-5">
      <div className="flex justify-between gap-50 ">
        <div><h1 className="text-3xl">bd.Real</h1></div>
      <div className="flex justify-between gap-8 mt-2 list-none">
        {list}
      </div>
      </div>
      <div>
        <button className="py-2.5 px-5 text-white bg-[#183835] rounded-[77px] ">
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default Nav