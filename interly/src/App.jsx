import Landing from "./Landing"
import Login from "./Login"
import Dashboard from "./Dashboard"
import {BrowserRouter , Routes , Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/:loginname/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
