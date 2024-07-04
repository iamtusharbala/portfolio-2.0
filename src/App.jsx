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
      <section><Home /></section>
      <section><About /></section>
      <section><Skills /></section>
      <section><Projects /></section>
      <section><Publishing /></section>
      <section><Contact /></section>
    </>
  )
}

export default App
