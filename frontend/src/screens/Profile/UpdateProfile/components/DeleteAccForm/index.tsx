import Button from 'shared/Buttons'
import styles from './deleteAccForm.module.css'
interface IProps {
  onSubmit: (e: React.FormEvent) => void,
}
const DeleteAccForm = (props: IProps) => {
  return (
    <form className={styles.form} onSubmit={props.onSubmit}>
      <Button className={styles.delete_btn} type='submit'>
        Удалить
      </Button>
    </form>
  )
}

export default DeleteAccForm