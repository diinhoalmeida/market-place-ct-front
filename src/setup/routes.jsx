import { BrowserRouter, Routes as Routed, Route } from "react-router-dom";
import { MarketPage, ProductPage, BagPage, HomePage } from '../screens/index';

const Routes = () => {
   return(  
       <BrowserRouter>
            <Routed>
                <Route element={<HomePage />} path="/" />
                <Route element={<MarketPage />}  path="/marketpage" />
                <Route element={<ProductPage />}  path="/productpage" />
                <Route element={<BagPage />}  path="/bagpage" />
            </Routed>
       </BrowserRouter>
   )
}

export default Routes;