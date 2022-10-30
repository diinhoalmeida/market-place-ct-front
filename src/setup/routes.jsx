import { BrowserRouter, Routes as Routed, Route } from "react-router-dom";
import { Login, Loja, MarketPage, ProductPage } from '../screens/index';

const Routes = () => {
   return(  
       <BrowserRouter>
            <Routed>
                <Route element={<Login />} path="/" />
                <Route element={<Loja />}  path="/loja" />
                <Route element={<MarketPage />}  path="/marketpage" />
                <Route element={<ProductPage />}  path="/productpage" />
            </Routed>
       </BrowserRouter>
   )
}

export default Routes;