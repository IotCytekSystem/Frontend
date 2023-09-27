
import Admindashboardpage from "pages/Admindashboard";
import Addcustomer from "pages/Customer/AddCustomer";
import ResetPassword from "pages/ResetPassword/Index";
import React from "react";
import Layout from "components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerTable from "pages/Customer/CustomerTable";
import AddMeter from "pages/Meters/AddMeter";
import ViewallMeters from "pages/Meters/ViewAllMeters"

const Desktopregisterpage = React.lazy(() =>import("./pages/Desktopregisterpage/index"),);
const ForgotPassword =React.lazy(() => import("./pages/ForgotPassword/Index"));
const Desktoploginpage = React.lazy(() => import("./pages/Desktoploginpage/index"));
const ProjectRoutes = () => {
  return (
    
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
        
          <Route path="/" element={<Desktoploginpage />} />

          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path="/add_customer" element ={<Addcustomer/>} />
          <Route path="/layout" element={<Layout/>} />
          <Route path ="/view_allcustomer" element = {<CustomerTable/>} />
          <Route path="add_meter" element={<AddMeter/>}/>
       <Route path="view_allmeters" element={<ViewallMeters/>} />
          <Route path="/forgot_password" element={<ForgotPassword/>} />
          <Route path="/register"element={<Desktopregisterpage />} />
        
  <Route path="/admin_dashboard" element={<Admindashboardpage />} />
               

        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
