import { JSX } from 'react'

export interface IOption<T extends string | number> {
  name: string | JSX.Element
  value: T
}