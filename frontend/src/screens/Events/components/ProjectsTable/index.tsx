import { IProject } from 'screens/Events/event.types.ts'
import styles from './projectTable.module.css'
interface IProps {
  projects: IProject[]
}

const ProjectsTable = (props: IProps) => {
  return (
    <table className={styles.table}>
      <tbody>
      <tr>
        <th>Тема</th>
        <th>Мероприятие</th>
        <th>Направление</th>
        <th>Куратор</th>
      </tr>
      {props.projects.map((project: IProject) => (
        <tr key={project.id}>
          <td>{project.theme}</td>
          <td>{project.event}</td>
          <td>{project.direction}</td>
          <td>{project.curator}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default ProjectsTable