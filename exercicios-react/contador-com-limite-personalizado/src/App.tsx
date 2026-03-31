import { useState } from 'react'
import './App.css'
import { Count } from './components/Count'

function App() {

  return(<Count/>) // a resolução dos gemeos 


  // a minha resolução 

  // const [count, setCount] = useState(0)
  // const [limiteMaximo, setLimiteMaximo] = useState(0)
  // const [limiteMinimo, setLimiteMinimo] = useState(0)
  // const [pulo, setPulo] = useState(1)
  // const [mensagem, setMensagem] = useState('')
  
  // const exibirMensagemLimite = (mensagem : string) => {
  //   setMensagem(mensagem)
  // }
  
  // const adicionar = () => { 
  //   if (limiteMaximo > count){
  //     setCount(prev => prev + pulo)
  //     exibirMensagemLimite('')
  //   } else{
  //     exibirMensagemLimite('Limite Atingido')
  //   }
  // }

  // const diminuir = () => {
  //   if (limiteMinimo < count){
  //     setCount(prev => prev - pulo)
  //     exibirMensagemLimite('')
  //   } else{
  //     exibirMensagemLimite('Limite Atingido')
  //   }

  // }

  // return (
  //   <>
  //     <div>
  //       <div style={{display: 'flex', gap: '60px'}}>
  //         <p>Qual limite máximo?</p>

  //         <input type="number" style={{width: '50px', textAlign: 'center'}} onChange={(event) => {setLimiteMaximo(Number(event?.target.value))}}  />

  //         <p>Qual o limite minimo?</p>

  //         <input type="number" style={{width: '50px', textAlign: 'center'}} onChange={(event) => {setLimiteMinimo(Number(event?.target.value))}}  />
  //       </div>

  //       <p style={{fontSize: '50px', margin: '10px'}}>{count}</p>
        
  //       <p style={{color: 'red'}}>{mensagem}</p>

  //       <button onClick={() => { adicionar() }}>Adicionar</button>
  //       <button onClick={ () => { diminuir() } }>Diminuir</button>
  //       <br /> 
  //       <p>Pular de quanto em quanto:</p>
  //       <input type="number" style={{width: '50px', textAlign: 'center'}} onChange={(event) => {setPulo(Number(event.target.value))}} />
  //     </div>
  //   </>
  // )

  

}

export default App
