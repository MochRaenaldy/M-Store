import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./route/routes";
import Headers from "./components/navbar";

function App() {
  return (
    <div>
      <Headers />
      <RouterProvider router={createBrowserRouter(routes)} />
    </div>
  );
}
export default App;
