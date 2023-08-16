import "flowbite";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import { RouterProvider } from "react-router-dom";
import AuthenticationContext from "./context/AuthenticationContex";

import { Ways } from "./routes/Ways";

function App() {
    return (
        <AuthenticationContext>
            <RouterProvider router={Ways} fallbackElement={<p>Loading...</p>} />
        </AuthenticationContext>
    );
}

export default App;
