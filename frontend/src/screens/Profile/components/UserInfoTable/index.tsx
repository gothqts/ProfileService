import styles from './userInfoTable.module.css'

interface IProps {
  header: string;
  cells: {
    label: string;
    value: string | string[] | number;
  }[]
}

const UserInfoTable = (props: IProps) => {
  return (
    <table className={styles.userTable}>
      <tbody>
      <tr>
        <th colSpan={2}>
          <div className={styles.headerWrapper}>
            {props.header}
          </div>
        </th>
      </tr>
      {props.cells.map(cell => (
        <tr key={cell.label}>
          <td className={styles.label}>
            {cell.label}
          </td>
          <td className={styles.value}>{cell.value ?? '–'}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default UserInfoTable