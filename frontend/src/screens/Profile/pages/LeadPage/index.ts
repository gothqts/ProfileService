// const directionHeaders = {
//   directions: 'Направление',
//   event: 'Мероприятие',
//   projects: 'Проекты',
//   teams: 'Команды',
// }
//
// const projectsHeaders = {
//   event: 'Мероприятие',
//   directions: 'Направление',
//   theme: 'Тема',
//   teams: 'Команды',
// }
//
// const [ctrlPanelState, setCtrlPanelStat] = useState(DepartmentLeadEntities.directions)
//
// const handleToggle = () => {
//   setCtrlPanelStat(prev =>
//     prev === DepartmentLeadEntities.directions
//       ? DepartmentLeadEntities.projects
//       : DepartmentLeadEntities.directions,
//   )
// }


// const CuratorSection = () => (
//   <>
//     <CtrlPanel
//       style={{ padding: '16px 0px', marginTop: '92px' }}
//       firstTitle={DepartmentLeadEntities.directions}
//       secondTitle={DepartmentLeadEntities.projects}
//       handleClick={handleToggle}
//       entityState={ctrlPanelState}
//     />
//     {ctrlPanelState === DepartmentLeadEntities.directions && (
//       <Table
//         className="table-orange-border"
//         headers={directionHeaders}
//         data={[
//           {
//             id: 1,
//             directions: 'Веб',
//             event: 'ПП весна 2024',
//             projects: 'Проект 1',
//             teams: 'Команда 1',
//           },
//           {
//             id: 2,
//             directions: 'Веб',
//             event: 'ПП весна 2024',
//             projects: 'Проект 1',
//             teams: 'Команда 2',
//           },
//         ]}
//       />
//     )}
//     {ctrlPanelState === DepartmentLeadEntities.projects && (
//       <Table
//         className="table-orange-border"
//         headers={projectsHeaders}
//         data={[
//           {
//             id: 1,
//             event: 'ПП весна 2025',
//             directions: 'Веб',
//             theme: 'Проект 1',
//             teams: 'Команда 1',
//           },
//           {
//             id: 2,
//             event: 'ПП осень 2025',
//             directions: 'Веб',
//             theme: 'Проект 1',
//             teams: 'Команда 1',
//           },
//         ]}
//       />
//     )}
//   </>
// )