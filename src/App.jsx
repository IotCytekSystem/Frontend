import { ProSidebarProvider, Sidebar } from "react-pro-sidebar";
import React from "react";
import Routes from "./Routes";

function App() {
  return (
    <ProSidebarProvider>
      <Routes />
      <Sidebar/>
    </ProSidebarProvider>
  );
}

export default App;
