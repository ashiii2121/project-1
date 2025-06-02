import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import Adminlayout from '../Layout/Adminlayout'
import Reports from '../pages/Admin/Reports'
import Dashboard from '../pages/Admin/Dashboard'
import AdminLogin from '../pages/Admin/Loginpage'

function Adminroutes() {
  return (
    <div>
        <Routes>
            <Route path='/admin' element={<Adminlayout/>}/>
            <Route path='' element={<Dashboard/>}/>
            <Route path='reports' element={<Reports/>}/>
            <Route path='login' element={<AdminLogin/>}/>


        </Routes>
    </div>
  )
}

export default Adminroutes