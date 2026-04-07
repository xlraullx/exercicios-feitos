import type { ChangeEvent, SubmitEventHandler } from "react"

type HandleChange = (event: ChangeEvent<HTMLInputElement>) => void

type FormularioProps = {
  handleChange: HandleChange
  handleSubmit: SubmitEventHandler
  textInput: string
}


export type { HandleChange, FormularioProps }