import "flowbite";

import { Ways } from "./routes/Ways";
import { RouterProvider } from "react-router-dom";

import AuthenticationContext from "./context/AuthenticationContex";

function App() {
  return (
    <AuthenticationContext>
      <RouterProvider router={Ways} fallbackElement={<p>Loading...</p>} />
    </AuthenticationContext>
  );
}

export default App;
