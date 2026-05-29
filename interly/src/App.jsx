import Landing from "./Landing"
import Login from "./Login"
import Dashboard from "./Dashboard"
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Dash from "./Dash"
import FillforInterview from "./FillforInterview"
import Interview from "./Interview"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/:loginname/dashboard" element={<Dashboard/>}>
          <Route index element={<Dash/>}/>
          <Route path="interview" element={<FillforInterview/>}/>
          <Route path= "interview/:id" element={<Interview/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
