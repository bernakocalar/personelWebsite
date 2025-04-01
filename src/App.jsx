import { useEffect, useState } from 'react';
import FirstLook from './components/firstLook'
import Profile from './components/profile'
import Projects from './components/projects'
import Skills from './components/skills'
import Contact from './components/contact';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const mediumImg = "/assets/animationImg.png";
  const githubIcon = "/assets/github.png"
  const linkedinIcon = "/assets/linkedin.png"
  const myImage = "/assets/IMG_E3560.JPG"
  const pizzaImg = "/assets/pizza.png"
  const nestForYouImg = "/assets/nestForYou.png"
  return (
    <>
     <FirstLook myImage={myImage} mediumImg={mediumImg} githubIcon={githubIcon} linkedinIcon={linkedinIcon} darkMode={darkMode} setDarkMode={setDarkMode}/>
     <Skills/>
     <Profile mediumImg={mediumImg}/>
     <Projects pizzaImg={pizzaImg} nestForYouImg={nestForYouImg} mediumImg={mediumImg}/>
     <Contact/>
    </>
  )
}

export default App
