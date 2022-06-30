import Home from "./pages/home";
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from "./pages/login";
import Aadhar from "./pages/aadhar";

function App() {
  return (
    <>
    <BrowserRouter>
<Routes>
 <Route exact path='/' element={<Home/>}/>
 
 <Route exact path='/login' element={<Login/>}/>
 <Route exact path='/:uid' element={<Aadhar/>}/>

</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
