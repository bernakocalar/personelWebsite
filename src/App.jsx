import './App.css'
import FirstLook from './components/firstLook'
import Profile from './components/profile'
import Projects from './components/projects'
import Skills from './components/skills'

function App() {
  const mediumImg = "/assets/animationImg.png";
  return (
    <>
     <FirstLook mediumImg={mediumImg}/>
     <Skills/>
     <Profile mediumImg={mediumImg}/>
     <Projects mediumImg={mediumImg}/>
    </>
  )
}

export default App
