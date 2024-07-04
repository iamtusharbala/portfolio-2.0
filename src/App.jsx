import './App.css'
import NavBar from './Components/NavBar/NavBar'
import About from './Sections/About/About'
import Contact from './Sections/Contact/Contact'
import Home from './Sections/Home/Home'
import Projects from './Sections/Projects/Projects'
import Publishing from './Sections/Publishing/Publishing'
import Skills from './Sections/Skills/Skills'

function App() {
  return (
    <>
      <NavBar />
      <section id='home'><Home /></section>
      <section id='about'><About /></section>
      <section id='skills'><Skills /></section>
      <section id='projects'><Projects /></section>
      <section id='publishing'><Publishing /></section>
      <section id='contact'><Contact /></section>
    </>
  )
}

export default App
