
import Navbar from './components/Navbar'
import ParticlesBackground from './components/ParticleBackground'
import Hero from './sections/Hero'

const App = () => {
  return (
    <div className="App h-full w-full flex flex-col items-center justify-center">
      <Navbar/>
      <Hero/>
      <ParticlesBackground />
    </div>
  )
}

export default App