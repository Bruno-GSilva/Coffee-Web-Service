import { Routes, Route, Navigate } from "react-router-dom";
import { LayoutAuth } from "../pages/Authentication/_layout";

// screens
import { PageLogin } from "../pages/Authentication/pageLogin";
import { PageRecover } from "../pages/Authentication/pageRecover";
import { PageRedefine } from "../pages/Authentication/pageRedefine";
import { PageNotFound } from "../pages/pageNotFound";

export const Ways = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} />
      <Route
        path="/auth/*"
        element={
          <LayoutAuth>
            <Routes>
              <Route index element={<PageLogin />} />
              <Route path="/recovery" element={<PageRecover />} />
              <Route path="/redefine" element={<PageRedefine />} />
            </Routes>
          </LayoutAuth>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
