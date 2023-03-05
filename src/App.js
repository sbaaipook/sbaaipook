import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery'
import Navbar from './commons/Narbar'
import DotGroup from './commons/DotGroup'
import Landing from './commons/Landing'
import LineGradient from "./components/LineGradient"
import Skills from "./commons/Skills"
import Projects from "./commons/Projects"
import Contact from './commons/Contact'
import Footer from './commons/Footer'

const App=()=> {
  const [selectedPage, setSelectedPage] = useState('home')
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  useEffect(()=>{
    const handleScroll =()=>{
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll',handleScroll);
    return ()=>window.removeEventListener('scroll',handleScroll)
  },[])
  return (
    <div className="app bg-deep-blue">
      <Navbar 
        selectedPage = {selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />

      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreens && (
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing selectedPage={selectedPage} />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
          <Skills />
      </div>
         
      
      <div className='w-5/6 mx-auto'>
          <Projects />
      </div>

      <LineGradient />
      <div className='w-5/6 mx-auto'>
          <Contact />
      </div>

      <div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
