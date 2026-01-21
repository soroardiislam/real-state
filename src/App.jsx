import Hero from "./components/hero"
import Nav from "./components/Nav"
import Trusted from "./components/Trusted"
import Explore from "./components/Explore"

function App() {
  return (
   <div className="px-[150px]">
     <Nav></Nav>
     <Hero></Hero>
     <Trusted />
     <Explore />
   </div>
  )
}

export default App
