
import Navbar from './components/Navbar'
import ParticlesBackground from './components/ParticleBackground'
import Hero from './sections/Hero'
import  Footer  from './components/Footer'
import Pricing from './sections/Pricing'

const App = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
     <div className="App relative w-full flex flex-col items-center justify-center">
         <Navbar/>
         <Hero/>
         <ParticlesBackground />
     </div>
        <Pricing/>

     <Footer/>
    </div>
  )
}

export default App