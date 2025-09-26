import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Homepage from "./pages/Home/Index";
import { RootMainLayout } from "./components/RootLayout/RootMainLayout";
import ProductPage from "./pages/Prouduct/Index";
import ProductDetails from "./pages/ProuductDetails/Index";
import WishList from "./components/WishListComponent/Index";
import AddToCart from "./pages/AddtoCart/AddToCart";
import Error from "./pages/Error/Index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootMainLayout />}>
        <Route index element={<Homepage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="*" element={<Error />}></Route>
      </Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
