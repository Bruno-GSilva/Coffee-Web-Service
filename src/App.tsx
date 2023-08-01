import "flowbite";
import ChangeFormContext from "./context/changeFormContext";

import { Ways } from "./routes/Ways";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ChangeFormContext>
      <RouterProvider router={Ways} />
    </ChangeFormContext>
  );
}

export default App;
