import styles from './table.module.css'
import cn from 'utils/cn.ts'
import { CSSProperties } from 'react'

type OmitKeys<T, K extends keyof T> = Omit<Record<keyof T, string>, K>

interface ITableProps<T extends Record<string, any>> {
  headers: OmitKeys<T, 'id'>;
  data: T[];
  className?: string;
  style?: CSSProperties;
}

const Table = <T extends Record<string, any>>(props: ITableProps<T>) => {
  const headerKeys = Object.keys(props.headers) as Array<Exclude<keyof T, 'id'>>

  return (
    <table
      className={cn(styles.table, props.className)}
      style={props.style}
    >
      <thead>
      <tr>
        {headerKeys.map(key => (
          <th key={String(key)}>{props.headers[key]}</th>
        ))}
      </tr>
      </thead>

      <tbody>
      {props.data.map((item, index) => (
        <tr key={index}>
          {headerKeys.map(key => (
            <td key={`${index}-${String(key)}`}>{item[key]}</td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default Table