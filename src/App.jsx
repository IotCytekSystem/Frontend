import { ProSidebarProvider, Sidebar } from "react-pro-sidebar";
import React from "react";
import Routes from "./Routes";
import DesktoploginpagePage from "pages/Desktoploginpage";


function App() {
  return (
    <ProSidebarProvider >
      <Routes />
      <Sidebar/>
    </ProSidebarProvider>
  );
}

export default App;
