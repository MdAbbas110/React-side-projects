import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('your number')

  function changeInfo() {
    return setTitle('You number ' + Math.floor(Math.random() * 10 + 1) )
  }

  return (
    <>
      <button onClick={changeInfo}>Click to change</button>
      <Header props={title}></Header>
      <Header props='abidi'></Header>
    </>
  )
}

function Header({props}) {

  return <h1>Hi {props}</h1>
}

export default App
