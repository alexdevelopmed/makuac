import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"

function App() {

  const bg = {
    /*backgroundImage: `url(${Fondo})`,*/
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    position: "relative"
  }

  return (
    <div style={bg} className="overflow-hidden min-h-screen">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App
