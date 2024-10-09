import { useState } from 'react'
import './App.css'
import Navbar from './components/navigation/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
          <Navbar />
          <main>
            <div className="">

            </div>
          </main>
      </div>
    </>
  )
}

export default App
