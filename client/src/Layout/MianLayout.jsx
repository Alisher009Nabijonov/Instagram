import { Outlet } from 'react-router-dom'

const MianLaayout = () => {
  return (
    <div className='flex'>
      <div>Sidebar</div>
      <div><Outlet /></div>
    </div>
  )
}

export default MianLaayout