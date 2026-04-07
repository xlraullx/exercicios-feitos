import type { FormularioProps } from '../../types/types'

export const Formulario = ({ handleChange, handleSubmit ,textInput }: FormularioProps) => {
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button>Exibir texto</button>
      <p>{textInput}</p>
    </form>
  )
}