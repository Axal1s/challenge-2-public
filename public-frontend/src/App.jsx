import router from "../routers";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import "toastify-js/src/toastify.css";

function App() {
  return (
    <div className="min-h-dvh">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
