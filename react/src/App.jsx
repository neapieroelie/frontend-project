import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
          <aside className="navbar">
            <div className="searchbar">
              <form>
                <input type="search" placeholder="search" />
                <button type="button">Go</button>
              </form>
            </div>
            <div className="categories">
              <nav>
                <button>Home</button>
                <button>Trade</button>
                <button></button>
                <button>Wishlist</button>
              </nav>
            </div>
          </aside>
          <main>

          </main>
      </div>
    </>
  )
}

export default App
