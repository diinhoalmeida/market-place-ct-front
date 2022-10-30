import { BrowserRouter, Routes as Routed, Route } from "react-router-dom";
import { MarketPage, ProductPage, CheckoutPage, HomePage } from '../screens/index';

const Routes = () => {
   return(  
       <BrowserRouter>
            <Routed>
                <Route element={<HomePage />} path="/" />
                <Route element={<MarketPage />}  path="/marketpage" />
                <Route element={<ProductPage />}  path="/productpage" />
                <Route element={<CheckoutPage />}  path="/checkoutpage" />
            </Routed>
       </BrowserRouter>
   )
}

export default Routes;