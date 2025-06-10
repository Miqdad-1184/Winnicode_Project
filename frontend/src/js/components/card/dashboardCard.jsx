import '../../../css/card.css'

const DashboardCard = ({label, icon, count}) => {
  return (
    <div className='dashboardCard'>
      <div className="labelCard">
        <label>{label}</label>
        <p>{icon}</p>
      </div>
        <h2>{count}</h2>
    </div>
  )
}

export default DashboardCard