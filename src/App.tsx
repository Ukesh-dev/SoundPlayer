import './App.css'
import { Footer } from './components/Footer'
import { Logo } from './components/Logo'
import { Main } from './components/Main'

function App() {
  return (
    <>
      <Logo />
      <div className="min-h-offsetHeight flex flex-col justify-between">
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
