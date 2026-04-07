import { useState, type SubmitEventHandler } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import { type HandleChange } from './types/types'

function App() {
  const [inputText, setInputText] = useState<string>('')
  const [text, setText] = useState<string>('')

  const handleChange: HandleChange = (event) => {
    const inputText = String(event.target.value)
    setInputText(inputText)
  }

    const handleSubmit: SubmitEventHandler = (event) => {
      event.preventDefault()
      setText(inputText)
  }
  
  return (
    <>
      <Formulario handleChange={handleChange} handleSubmit={handleSubmit} textInput={text} />
    </>
  )
}

export default App
