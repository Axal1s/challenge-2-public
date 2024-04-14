import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import ProductsPage from "../src/views/ProductsPage";
import ProductDetailPage from "../src/views/ProductDetailPage";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/details/:productId",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

export default router;
