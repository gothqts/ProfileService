import { createContext } from 'react'

export interface IFormState {
  stack: string,
  specialization: string,
}

interface ICreateItemContext {
  values: IFormState;
  onChange: (value: string, name: string) => void
}

export const generateEmptyFormState = (): IFormState => ({
  stack: '',
  specialization: '',
})

const CreateItemContext = createContext<ICreateItemContext>({
  values: generateEmptyFormState(),
  onChange: () => {
  },
})

export default CreateItemContext
