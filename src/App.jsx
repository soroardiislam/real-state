import Hero from "./components/hero"
import Nav from "./components/Nav"
import Trusted from "./components/Trusted"
import Explore from "./components/Explore"
import Services from "./components/Services"
import Control from "./components/Control"
import Testimonials from "./components/Testimonials"
import Outreach from "./components/Outreach"
import Footer from "./components/Footer"

function App() {
  return (
   <div className="px-[150px]">
     <Nav></Nav>
     <Hero></Hero>
     <Trusted />
     <Services />
     <Explore />
     <Control />
     <Testimonials />
     <Outreach />
     <Footer />
   </div>
  )
}

export default App
