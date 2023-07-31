import "flowbite";
import ChangeFormContext from "./context/changeFormContext";

import { Ways } from "./routes";

function App() {
    return (
        <ChangeFormContext>
            <Ways />
        </ChangeFormContext>
    );
}

export default App;
