import { useState } from 'react'
import { Pages } from './pages/Pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello</h1>
      <Pages />
    </div>
  )
}

export default App
