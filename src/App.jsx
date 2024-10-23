import { useState } from 'react'
import './App.css'
import Navbar from './components/navigation/Navigation'
import BookCard from './components/book/BookCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
          <Navbar />
          <main>
            <div className="books">
              <BookCard
                src="/images/front-cover.jpg"
                alt="The Goldfinch"
                width="200"
                height="100%"
                bookTitle="The Goldfinch"
                bookAuthor="Donna Tart"
                ownerName="Shaelyn Rose"
                ownerLocation="Mount Pleasant, V5V 3M7"
                status="Available"
              />
            </div>
          </main>
      </div>
    </>
  )
}

export default App
