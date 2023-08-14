import "flowbite";
import "primereact/resources/themes/lara-light-indigo/theme.css";         
import "primereact/resources/primereact.min.css";        

import { Ways } from "./routes/Ways";

import AuthenticationContext from "./context/AuthenticationContex";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <AuthenticationContext>
      <RouterProvider router={Ways} fallbackElement={<p>Loading...</p>} />
    </AuthenticationContext>
  );
}

export default App;
