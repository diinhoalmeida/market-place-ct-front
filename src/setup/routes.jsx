import { BrowserRouter, Routes as Routed, Route } from "react-router-dom";
import { Login, Loja } from '../screens/index';

const Routes = () => {
   return(  
       <BrowserRouter>
            <Routed>
                <Route element={<Login />} path="/" />
                <Route element={<Loja />}  path="/loja" />
            </Routed>
       </BrowserRouter>
   )
}

export default Routes;