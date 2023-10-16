

import { Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import React, { useState, useEffect } from 'react';
import { Button, Img, Line, List, SelectBox, Text,} from "components";
import logo from "../../assets/image/logo.png";
import LineGraph from "../../components/Graph/LineGraph"
import profile from "../../assets/image/profile.png"
import energies from "../../assets/image/yield.png"
import consumption from "../../assets/image/Consumption.png";
import balance from "../../assets/image/balance.png";
import peak from "../../assets/image/peak.png"
// import power from "../../assets/image/power.png";
import energy from "../../assets/image/energy.png";
import Current from "../../assets/image/circuit.png";
import Table from "components/Table";
import axios from '../../axiosConfig';
import '../../styles/index.css'; // Import your CSS file.


import Sidebar from "components/Sidebar";
import { Link } from "react-router-dom";






const Admindashboard = () => {

  const [name, setName] = useState('');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleViewSettings = () => {
    // Handle the "View Settings" action here
  };

  const handleLogout = () => {
    // Handle the "Log Out" action here
  };

  const { collapseSidebar, collapsed } = useProSidebar();


  const [power, setPower] = useState([]);
  const [current, setCurrent] = useState([]);
  const [loading,setLoading] = useState(true);



  useEffect(() => {
    // Simulating a client login
    setName('James');
  }, []);
  useEffect(() => {
    // Define a function to fetch user data from the server
    const fetchUserData = async () => {
      try {
        // Send a GET request to your server's endpoint
        const power = await axios.get("/power/peak");
        const current = await axios.get("/current/peak");

   console.log(power)
        // Update the state with the received data
        setPower(power.data);

        setCurrent(current.data)
        setLoading(false); // Set loading to false once data is received
        console.log(power)
      } 
      catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Call the fetchUserData function when the component mounts
    fetchUserData();
  }, []); 

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleButtonClick() {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  }

  const tableData = [
{}
    // Add more data as needed
  ];

  const timestamp = ' 2023-09-21 12:00 PM';

  return (
    <>
    <div>
    <div className='flex px-3 bg-green-50 justify-between '>
    
      <div className=' p-2   flex align-middle'> 
      <div className="login-container  h-12 w-12 ">
<img src={logo} alt="Logo" className="logo  h-12 w-12"  />

</div>
      </div>
      <div className="ml-auto mt-2 relative">
      <img
        className="h-12 w-12 ml-auto cursor-pointer"
        src={profile}
        alt=""
        onClick={toggleDropdown}
      />
      {isDropdownOpen && (
        <div className="absolute top-12 right-0 bg-white border rounded shadow-md   ">
          <ul className=" flex flex-col  items-center bg-white-A700 p-1 w-[8vw] h-[12vh] justify-between">
            <li>
              <button onClick={handleViewSettings}>Profile</button>
            </li>
            <li>
              <button onClick={handleViewSettings}>Change password</button>
            </li>
            <li>
              <button onClick={handleLogout}>Log Out</button>
            </li>
          </ul>
        </div>
      )}
    </div>
      </div>
      <div className="md:flex bg-lime-50 min-h-screen flex-col font-averiaseriflibre items-center justify-start mx-auto w-full">
      <div className="flex md:flex-col flex-row md:gap-[43px] items-start justify-between mx-auto md:px-5 w-full">
      {/* <div className="!sticky ml-[-16px] bg-indigo-950 flex flex-col justify-start flex-col h-screen overflow-auto   "> */}
      
<div className="w-[18%] sm:hidden md:flex"> 
       <Sidebar 
        // onClick={() => collapseSidebar(!collapsed)}

       />
       </div>
         {/* MOBILE MENU */}
         <div className="sm:flex hidden">

         <button onClick={handleButtonClick}>
       
         </button>
            
             {isMenuOpen ? (
  <div className="menu">
  <ul>
                <li onClick={handleButtonClick}>
                <Link to="/admin_dashboard">Dashboard</Link>
              
                </li>
                <li onClick={handleButtonClick}>
                <Link to="add_customer">Customer</Link>
                </li>
                <li onClick={handleButtonClick}>
                <Link to="/add_meter">Meters</Link>
                </li>
                <li onClick={handleButtonClick}>
                <Link to="/edit_profile">Profile</Link>
                </li> 
                <li onClick={handleButtonClick}>Settings</li>
                </ul>
  </div>
) : (
  <button onClick={handleButtonClick} className="closed-menu">
  <div className="hamburger-icon">&#9776;</div>
  </button>
)}
         </div>

       {/* </div> */}
      
          
       <div className="flex  flex-col items-center justify-start md:mt-0 mt-[15px] w-full">
            <div className="flex flex-row  items-center justify-between w-full">
              <div className="flex flex-col gap-[7px] items-start justify-start">
                <Text
                  className="sm:text-[16px] md:text-[16px] text-[20px] text-gray-900 tracking-[-0.56px]"
                  size="txtAveriaSerifLibreBold2816"
                >
                 Hi <span class="text-blue-600">{name} </span>, Welcome Back.
                </Text>
            
                 <p className="font-weight-10">Information about your clients power consumption and usages.</p> 
              </div>

            </div>
            <div className="vertical-container flex flex-col pt-[-20px] w-full">

              <div className="flex md:flex-1  flex-col gap-[25px] items-center justify-start bg-yellow-900w-[63%]  md:w-full">
                <div className="bg-transparent flex sm:flex-col flex-row gap-7 items-center justify-start p-[23px] sm:px-5  w-full">
                  <List
                    className=" flex   flex-row w-full"
                    orientation="horizontal"
                  >
                      <div className="flex  flex-row items-center justify-between w-full">
                
                        <div className="h-30 w-[80%] border border-blue-300 bg-white-A700 rounded-[14px] shadow-bs flex flex-col gap-3 items-center justify-center">
                        <img className="h-6 w-6 mt-1" src={energies} alt=""/>
                          <Text
                            className="bg-clip-text bg-gradient  text-[11.26px] text-blue-300  text-opacity-40"
                            size="txtAveriaSerifLibreBold1126"
                          >
                         Yield
                          </Text>
                          <Text
                            className="text-[14.08px] text-gray-900"
                            size="txtAveriaSansLibreBold1408Gray900"
                          >
                            97%
                          </Text>
                        </div>
                      </div>
                  
                       
                        <div className="flex flex-row gap-2 items-center justify-between w-full">
                       
                          <div className=" h-30 w-[80%] border border-blue-300 bg-white-A700 rounded-[14px] shadow-bs flex flex-col gap-3 items-center justify-center">
                          <img className="h-6 w-6 mt-1 " src={consumption} alt=""/>
                            <Text
                              className="bg-clip-text bg-gradient  text-[11.26px] text-blue-300  text-opacity-40"
                              size="txtAveriaSerifLibreBold1126"
                            >
                              Consumption
                            </Text>
                            <Text
                              className="text-[14.08px] text-gray-900"
                              size="txtAveriaSansLibreBold1408Gray900"
                            >
                              30%
                            </Text>
                          </div>
                        </div>
                      {/* <Line className="bg-gray-200 h-[57px] w-px" /> */}
                    

                    <div className=" h-30 w-[80%] border border-blue-300 bg-white-A700 rounded-[14px] shadow-bs flex flex-col gap-3 items-center justify-center">
                    <img className="h-6 w-6 mt-1 " src={balance} alt=""/>
                          <Text
                            className="bg-clip-text bg-gradient  text-[11.26px] text-blue-300  text-opacity-40"
                            size="txtAveriaSerifLibreBold1126"
                          >
                          Energy Balance
                          </Text>
                          <Text
                            className="text-[14.08px] text-gray-900"
                            size="txtAveriaSansLibreBold1408Gray900"
                          >
                        67%
                          </Text>
                        </div>
                  </List>
                      
                     
                    
                </div>

        

{/* energy consumption */}
<div className="bg-white-A700 border border-blue-300 Text-center w-full ml-2 rounded-[16px] mt-[-8.5px] flex flex-col">
      
      <div className="pt-[-6] ml-4">
      

<p className="text-blue-300 " >Energy Consumption
</p>
<span className="text-[10px]">Information on how energy is used</span>


      </div>
      <div className=" ml-4 flex flex-row gap-6 pt-5 item-center ">
    <img className="h-10 w-12 " src={energy} alt=""/>
                        <Text className="text-[15px] flex flex-col ">Total Energy  
                        <span className="text-[15px] text-red-300 item-center">386kWh</span> 
                        </Text>
                       

      </div>
     <div className="ml-4 pt-6 flex flex-row justify-between items-center">
    <Text className="text-[12px] flex flex-col">Today’s Energy</Text>
    <div className="w-[70%] h-[8px] bg-gray-300 rounded-full">
      <div
        className="h-[8px] bg-green-500 rounded-full"
        style={{ width: '30%' }} // Adjust the width based on the progress (e.g., 30%)
      ></div>
    </div>
    <Text className="text-[15px] text-red-500 pr-3 items-center">386kWh</Text>
  </div>
<div className="ml-4 pt-6 flex flex-row justify-between items-center">
    <Text className="text-[12px] flex flex-col">Monthly Energy</Text>
    <div className="w-[70%] h-[8px] bg-gray-300 rounded-full">
      <div
        className="h-[8px] bg-yellow-500 rounded-full"
        style={{ width: '60%' }} // Adjust the width based on the progress (e.g., 60%)
      ></div>
    </div>
    <Text className="text-[15px] text-red-500 pr-3 items-center">1089kWh</Text>
  </div>

 <div className="ml-4 pt-6 flex flex-row justify-between items-center">
    <Text className="text-[12px] flex flex-col">Yearly Energy</Text>
    <div className="w-[70%] h-[8px] bg-gray-300 rounded-full">
      <div
        className="h-[8px] bg-red-300 rounded-full"
        style={{ width: '80%' }} // Adjust the width based on the progress (e.g., 80%)
      ></div>
    </div>
    <Text className="text-[14px] text-red-500 pr-3 items-center">11899kWh</Text>
  </div>

    </div>


    {/* Graph */}    
    
    <div className="bg-white-A700 border border-blue-300 flex flex-col ml-2 items-center pl-6 sm:px-5 rounded-[16px] w-full">
                    <div className="  flex flex-row  sm:gap-10 items-center justify-between  w-full">
                     
                      <LineGraph></LineGraph>
                    </div>
           
                </div> 
                
              </div>
                            </div>
                        </div>
                        
          
            <div className="vertical-container  flex flex-col p-[10px] w-[100%]">
            
    
            
            {/* Analysis card */}
              <div className="flex flex-col pt-[75px] bg-transparent rounded-lg">
                {/* Peak power */}
             <List 
             className=" flex   flex-row w-full"
                    orientation="horizontal" 
             >
              <div className="flex bg-transparent space-x-3  mx-[-1] w-full   px-[4px]">
                <div className=" bg-white-A700 h-30 w-[80%]  mt-[-4] rounded-xl border border-blue-300 shadow-lg gap-3 ring-red-600 p-1" >
                  <div className="flex  flex-col items-center ">
                  <img className="h-6 w-6 mt-1" src={peak} alt=""/>
                  <span className=" bg-clip-text bg-gradient  text-[11.26px] text-blue-300  text-opacity-40 text-center  p-1 ">Peak Powers</span>
                  </div>
                  <div className="text-center text-green-500">{power[0]}<span className="text-green-400  pl-1">W</span></div>

                </div>
                {/* Peak current */}
                <div className=" bg-white-A700 h-30 w-[80%]  mt-[-4]  gap-3 rounded-xl border border-blue-300 rounded-xl shadow-lg ring-red-600 p-1 ">
                  <div className="flex flex-col items-center ">
                  <img className="h-6 w-6 mt-1 " src={Current} alt=""/>
                  <span className="bg-clip-text bg-gradient  text-[11.26px] text-blue-300  text-opacity-40 text-center p-1">Peak Current</span>
                  </div>
                  <div className="text-center text-green-500">{current[0]}<span className="text-green-400 mb-2  pl-1 ">A</span></div>
                </div>
                {/* Energy consuption */}
                <div className=" bg-white-A700 h-30 w-[80%]  mt-[-4] gap-3 rounded-xl border border-blue-300 rounded-xl shadow-lg ring-red-600 p-1">
                  <div className="flex flex-col items-center ">
                  <img className="h-6 w-6 mt-1 " src={energy} alt=""/>
                  <span className=" bg-clip-text bg-gradient  text-[11.26px] text-blue-300  text-opacity-40 text-center p-1">Energy Consumption</span>
                  </div>
                  <div className="text-center text-green-500">{current[0]}<span className="text-green-400 pl-2">kWh</span></div>

                </div>
               
                </div>
                </List>

      <div className="  bg-white-A700 rounded-lg  mt-12 w-[100%] border border-blue-300">
      <h1 > </h1>
      <Table className="text-sm " data={tableData} timestamp={timestamp} />
    </div>
              </div>
  {/* End of Analysis card */}
             
            
            </div>
            </div>
            

          </div>
          </div>
          
      </>
  );
};

export default Admindashboard;