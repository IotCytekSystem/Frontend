
import Admindashboardpage from "pages/Admindashboard";
import Addcustomer from "pages/Customer/AddCustomer";
import ResetPassword from "pages/ResetPassword/Index";
import React from "react";
import Layout from "components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerTable from "pages/Customer/CustomerTable";
import AddMeter from "pages/Meters/AddMeter";
import ViewallMeters from "pages/Meters/ViewAllMeters"
// import { client } from "pages/Customer/client";
import ClientProfile from "./components/ClientProfile";
import ClientDashboard from "pages/ClientDashboard";
import LandingPage from "./components/LandingPage";
import EditProfile from "pages/Profile/editProfile";
// import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from 'react-redux'; // Import useSelector

const Desktopregisterpage = React.lazy(() =>import("./pages/Desktopregisterpage/index"),);
const ForgotPassword =React.lazy(() => import("./pages/ForgotPassword/Index"));
const Desktoploginpage = React.lazy(() => import("./pages/Desktoploginpage/index"));
const ProjectRoutes = () => {
  const isAuth = useSelector((state) => state.user.isAuth); 
  return (
    
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
        {/* PUBLIC ROUTES */}
          <Route path="/login" element={<Desktoploginpage />} />
          <Route path ="/" element={<LandingPage/>} />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path="/forgot_password" element={<ForgotPassword/>} />
          <Route path="/register"element={<Desktopregisterpage />} />




          {/* PRIVATE ROUTES */}
         
         
          <Route path="/client-profile"element={  <ClientProfile />}/>

          <Route path="client_dashboard" element = { <ClientDashboard/>} />
          <Route path="/add_customer" element ={<Addcustomer/>} />
          <Route path="/layout" element={<Layout/>} />
          <Route path ="/view_allcustomer" element = {<CustomerTable/>} />
          <Route path="add_meter" element={<AddMeter/>}/>
          <Route path="view_allmeters" element={<ViewallMeters/>} />
          <Route path = "/client_data" element={<client/>} />
          <Route path = "/profile" element={<ClientProfile />}/>
         <Route path="/admin_dashboard" element={<Admindashboardpage />} />
         <Route path ="/edit_profile" element ={<EditProfile/>} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
