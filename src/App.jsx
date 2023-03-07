import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h1>Hello</h1>
        <h2>I'm Andreea </h2>
        <h3>Future frontend developer </h3>
      </div>
      <div className="card">
        <p>
        Strong creative with an eye for detail.
        I love to build responsive user-friendly sites.
        </p>
      </div>
      <p className="read-the-docs">
        Click on my Github link to find more about my projects
      </p>
      <strong>https://github.com/AndreeaSamoila</strong>
    </div>
  )
}

export default App
