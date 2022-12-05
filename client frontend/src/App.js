import './index.css';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Onboarding from './pages/Onboarding'
import{HashRouter,Routes,Route} from 'react-router-dom'
import{useCookies} from "react-cookie"

const App= () => {
  const[cookies,setCookie,removeCookie]=useCookies(['user'])
 
 const authToken=cookies.AuthToken

  return (
    <div>
   <HashRouter>
   <Routes>
    <Route path={"/"} element={<Home/>}></Route>
    <Route path={"/dashboard"} element={<Dashboard/>}></Route>
    <Route path={"/onboarding"} element={<Onboarding/>}></Route>

   </Routes>
   
   </HashRouter>



    </div>
  );
}

export default App;
