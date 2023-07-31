import { Routes, Route } from "react-router-dom";
import { PageLogin } from "../pages/Login";

export const Ways = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Layout />}> */}
            <Route index element={<PageLogin />} />
            {/* </Route> */}
        </Routes>
    );
};
