import Admindashboardpage from "pages/Admindashboard";
import ResetPassword from "pages/ResetPassword/Index";
import Addcustomer from "pages/Addcustomer";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// const AutoLayoutHorizontal = React.lazy(() =>
//   import("pages/AutoLayoutHorizontal"),
// );
const Desktopregisterpage = React.lazy(() =>
  import("./pages/Desktopregisterpage/index"),
);
// const ResetPassword =React.lazy(() => import ("./pages/ResetPassword/Index"));
const ForgotPassword =React.lazy(() => import("./pages/ForgotPassword/Index"));
const Desktoploginpage = React.lazy(() => import("./pages/Desktoploginpage/index"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
        
          <Route path="/" element={<Desktoploginpage />} />

          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/Addcustomer" element={<Addcustomer/>} />
          <Route path="/ForgotPassword" element={<ForgotPassword/>} />
          <Route path="/register"element={<Desktopregisterpage />} />
  <Route path="/Admindashboard" element={<Admindashboardpage />} />
               

        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
