import { BrowserRouter , Router , Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Referees from '../pages/referees/Referees'
import Matches from '../pages/matches/Matches'
import Courses from '../pages/courses/Courses'
import Rankings from '../pages/rankings/Rankings'

function AppRoute() {
  return (
    <BrowserRouter>

    <Routes>

      <Route path='/' element={<Home />} 
      />
    
      <Route path='/referees' element={<Referees />}
      />

      <Route path='/matches' element={<Matches />}
      />

      <Route path='/courses' element={<Courses />}
      />

      <Route path='/rankings' element={<Rankings />}
      />

    </Routes>

    </BrowserRouter>
  )
}

export default AppRoute