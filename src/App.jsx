import FirstLook from './components/firstLook'
import Profile from './components/profile'
import Projects from './components/projects'
import Skills from './components/skills'

function App() {
  const mediumImg = "/assets/animationImg.png";
  const githubIcon = "/assets/github.png"
  const linkedinIcon = "/assets/linkedin.png"
  return (
    <>
     <FirstLook mediumImg={mediumImg} githubIcon={githubIcon} linkedinIcon={linkedinIcon} />
     <Skills/>
     <Profile mediumImg={mediumImg}/>
     <Projects mediumImg={mediumImg}/>
    </>
  )
}

export default App
