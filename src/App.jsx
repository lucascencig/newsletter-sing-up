import './index.css'

import SuccessActive from './Components/SuccessActive/SuccessActive'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutApp from './Components/Layout/LayoutApp'
function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<LayoutApp />} />
          <Route exact path="/success" element={<SuccessActive />} />

        </Routes>
      </Router>

    </div>

  )
}

export default App
