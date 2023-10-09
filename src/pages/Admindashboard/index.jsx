

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
import axios from 'axios';

import Sidebar from "components/Sidebar";






const Admindashboard = () => {

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
    // Define a function to fetch user data from the server
    const fetchUserData = async () => {
      try {
        // Send a GET request to your server's endpoint
        const power = await axios.get("/power/peak");
        const current = await axios.get("/current/peak");

   
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

  const tableData = [
    {  },
    // Add more data as needed
  ];

  const timestamp = ' 2023-09-21 12:00 PM';

  return (
    <>
    <div>
    <div className=' flex  px-3 bg-green-50 justify-between '>
    
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
      <div className="flex bg-lime-50  min-h-screen flex-col font-averiaseriflibre items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-[43px] items-start justify-between mx-auto md:px-5 w-full">
       <div className="!sticky !w-[200px] bg-indigo-950 flex  justify-start flex-col h-screen overflow-auto rounded-tl-[10px] top-[2] ">
      

       <Sidebar 
        onClick={() => collapseSidebar(!collapsed)}

       />
       </div>
      
          
          <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-[20px] w-full">
            <div className="flex flex-row  items-center justify-between w-full">
              <div className="flex flex-col gap-[7px] items-start justify-start">
                <Text
                  className="sm:text-[16px] md:text-[16px] text-[20px] text-gray-900 tracking-[-0.56px]"
                  size="txtAveriaSerifLibreBold2816"
                >
                 Hi <span class="text-blue-600">James</span>, Welcome Back.
                </Text>
            
                 <p className="font-weight-10">Information about your clients power consumption and usages.</p> 
                {/* </Text> */}
              </div>
              {/* <div className='bg-white-A700 rounded-full  pt-3 h-12 w-12 text-center ml-auto m-3z'>Pro</div> */}

            </div>
            <div className="vertical-container flex flex-col pt-[-20px] w-full">

            {/* <div className="flex md:flex-col bg-red-900 flex-row md:gap-[42px] items-start justify-between w-[40] w-full"> */}
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
                        {/* <Line className="bg-gray-200 h-[57px] w-px" /> */}
                      </div>
                  
                       
                      {/* <Line className="bg-gray-200 h-[57px] w-px" /> */}
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
                <div className="bg-white-A700  border border-blue-300 Text-center w-full ml-2 rounded-[16px]   mt-[-8.5px]  flex flex-col">
      
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
    
    <div className="bg-white-A700 border border-blue-300 flex flex-col  ml-2 items-center pl-6 sm:px-5 rounded-[16px] w-full">
                    <div className="  flex flex-row  sm:gap-10 items-center justify-between  w-full">
                      {/* <Text
                        className="text-[16.89px] text-gray-900 tracking-[-0.34px]"
                        size="txtAveriaSerifLibreBold1689"
                      >
                        Power consumption in the last 12 hrs
                      </Text> */}
                      <LineGraph></LineGraph>
                    </div>
                 
                     
                      {/* <div className="  h-56 md:h-[204px] relative w-[98%] md:w-full">
                        <div className="absolute md:h-[204px] h-[221px] inset-[0] justify-center m-auto w-full">
                          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[2%] w-full">
                            <div className="flex flex-col items-start justify-start w-full">

                            <div className="">
      <h1 className="text-2xl font-bold mb-4"></h1>
      <LineGraph />
    </div>
                              <Line className="bg-gray-400 h-[199px] w-px" />

                             
                              <Line className="bg-gray-400 h-px rotate-[-180deg] w-full" />

                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat md:h-[204px] h-[221px] inset-y-[0] left-[0] my-auto pb-[7px] pr-[7px] w-[93%] sm:w-full"
                            style={{}}
                          >
                            <div className="h-52 md:h-[204px] mx-auto w-[99%] sm:w-full">
                              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                <div className="flex flex-col gap-[39px] justify-start w-full">
                                  <div
                                    className="bg-cover bg-no-repeat flex flex-col h-[153px] items-end justify-start p-[26px] sm:px-5 w-full"
                                    style={{  }}
                                  >
                                    <div className="bg-blue_gray-100 flex flex-col gap-[13px] items-center justify-start mb-[31px] mr-[110px] p-[5px] rounded-lg shadow-bs1">
                                  
                                    
                                     
                                      <Text
                                        className="mb-[13px] text-[14.08px] text-center text-gray-900"
                                        size="txtAveriaSansLibreBold1408Gray900"
                                      >
                                      {data}
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[125px] w-[33%] md:w-full">
                                    
                                  </div>
                                </div>
                              </div>
                             
                              <div className="absolute bottom-[1%] flex flex-row items-start justify-center left-[10%] w-[9%]">
                               
                              </div>
                             
                            </div>
                            <div className="absolute flex flex-col md:gap-10 gap-[168px] h-max inset-y-[0] items-center justify-start my-auto right-1/4 w-[2%]">
                              <div className="bg-white-A700 h-2.5 outline outline-[1px] outline-deep_purple-A200 rounded-[50%] w-2.5"></div>
                              <div className="bg-white-A700 h-1.5 outline outline-[1px] outline-deep_purple-A200 rounded-[50%] w-1.5"></div>
                            </div>
                          </div>
                        </div>
                      
                      </div> */}
                    
                  
                  
                </div> 
                
              </div>
              
              {/* </div> */}
              {/* <div className="flex md:flex-col flex-row gap-[27px] items-center justify-between mt-[76px] w-full">
                  <div className="h-[298px] relative w-[48%] md:w-full">
                    <div className="absolute h-[298px] inset-[0] justify-center m-auto shadow-bs2 w-[98%]"></div>
                    <div className="absolute h-[297px] md:h-[298px] inset-[0] justify-center m-auto w-full">
                      <div className="bg-white-A700 h-[298px] m-auto rounded-[16px] w-full"></div>
                      <div className="absolute flex flex-col gap-[37px] inset-x-[0] items-center justify-start mx-auto top-[8%] w-[82%]">
                        <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-[16.89px] text-gray-900 tracking-[-0.34px]"
                              size="txtAveriaSerifLibreBold1689"
                            >
                              GRID
                            </Text>
                          </div> */}
                          {/* <Img
                            className="h-[17px] md:h-auto mt-1 object-cover w-4"
                            src="images/img_iconlylightfilter_17x16.png"
                            alt="iconlylightfilt_One"
                          /> */}
                        {/* </div>
                        <div className="flex flex-row font-averiasanslibre gap-[5px] items-center justify-evenly w-full">
                          <div className="flex flex-col gap-[17px] items-start justify-start w-[32%]">
                            <div className="flex flex-col items-center justify-start w-[45%] md:w-full">
                              <div className="flex flex-col gap-[5px] items-end justify-start w-full">
                                <div className="flex flex-row gap-[7px] items-start justify-start mr-0.5 w-[95%] md:w-full">
                                  <div className="bg-red-A400 h-1 my-[3px] rounded-[50%] w-1"></div>
                                  <Text
                                    className="text-[9.85px] text-gray-900"
                                    size="txtAveriaSansLibreBold985Gray900"
                                  >
                                    Yield
                                  </Text>
                                </div>
                                <Text
                                  className="text-[12.67px] text-gray-900"
                                  size="txtAveriaSansLibreBold1267Gray900"
                                >
                                  85%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
                              <div className="flex flex-col justify-start w-full">
                                <div className="flex flex-row gap-[7px] items-start justify-start w-full">
                                  <div className="bg-light_blue-A400 h-1 mb-[5px] mt-0.5 rounded-[50%] w-1"></div>
                                  <Text
                                    className="text-[9.85px] text-gray-900"
                                    size="txtAveriaSansLibreBold985Gray900"
                                  >
                                    Consumption
                                  </Text>
                                </div>
                                <Text
                                  className="md:ml-[0] ml-[11px] mt-1 text-[12.67px] text-gray-900"
                                  size="txtAveriaSansLibreBold1267Gray900"
                                >
                                  40%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col justify-start w-full">
                                <div className="flex flex-row gap-[7px] items-start justify-start w-full">
                                  <div className="bg-blue_gray-100 h-1 mb-[5px] mt-0.5 rounded-[50%] w-1"></div>
                                  <Text
                                    className="text-[9.85px] text-gray-900"
                                    size="txtAveriaSansLibreBold985Gray900"
                                  >
                                    Energy Balance
                                  </Text>
                                </div>
                                <Text
                                  className="md:ml-[0] ml-[11px] mt-1 text-[12.67px] text-gray-900"
                                  size="txtAveriaSansLibreBold1267Gray900"
                                >
                                  40%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="h-[172px] relative w-[172px]">
                            <div className="bg-red-A400 h-[172px] m-auto rounded-[50%] w-[172px]"></div>
                            <div className="!w-[165px] absolute h-[165px] inset-[0] justify-center m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[165px] absolute h-[165px] inset-[0] justify-center m-auto overflow-visible"
                                value={25}
                                counterClockwise
                                strokeWidth={8}
                                styles={{
                                  trail: { strokeWidth: 8, stroke: "#00b7fe" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(222deg)",
                                    stroke: "#d0d2da",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="font-adventpro md:h-[284px] h-[309px] pb-6 relative shadow-bs2 w-[48%] md:w-full">
                    <div className="h-[284px] mx-auto w-full">
                      <div className="bg-white-A700 h-[284px] m-auto rounded-[16px] w-full"></div>
                      <div className="absolute bottom-1/4 flex flex-col gap-[21px] items-start justify-start right-[2%] w-[90%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-[9.85px] text-gray-900 tracking-[-0.20px]"
                                size="txtAdventProBold985"
                              >
                                Today’s Energy
                              </Text>
                              <Text
                                className="text-[9.85px] text-gray-900 text-right tracking-[-0.20px]"
                                size="txtAdventProBold985"
                              >
                                385kWh
                              </Text>
                            </div>
                            <div className="h-1 overflow-hidden relative w-[92%]">
                              <div className="w-full h-full absolute bg-yellow_50 rounded-[2px]"></div>
                              <div
                                className="h-full absolute bg-orange_A700  rounded-[2px]"
                                style={{ width: "30%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                          <Text
                            className="text-[9.85px] text-gray-900 tracking-[-0.20px]"
                            size="txtAdventProBold985"
                          >
                            Monthly Energy
                          </Text>
                          <div className="h-1 md:h-2 mt-1 relative w-full">
                            <Line className="absolute bg-gray-100 h-1 inset-[0] justify-center m-auto rounded-sm w-full" />
                            <Line className="absolute bg-deep_purple-A400 bottom-[0] h-1 left-[0] rounded-sm w-[52%]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-[25px] inset-x-[0] justify-start mx-auto top-[7%] w-[96%]">
                      <div className="flex flex-row gap-[108px] items-center justify-start w-[93%] md:w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[16.89px] text-gray-900 tracking-[-0.34px]"
                            size="txtLatoBlack1689"
                          >
                            Energy Consumption
                          </Text>
                          <Text
                            className="bg-clip-text bg-gradient  mt-1 text-[9.85px] text-transparent"
                            size="txtAdventProBold985Bluegray400"
                          >
                            information on Energy Consuption
                          </Text>
                        </div> */}
                        {/* <Img
                          className="h-[18px] md:h-auto object-cover"
                          src="images/img_iconlylightfilter_17x16.png"
                          alt="iconlylightfilt_Two"
                        /> */}
                      {/* </div>
                      <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] w-[94%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
                          <div className="flex flex-row items-center justify-end w-full">
                            <div className="bg-gray-50 h-11 rounded-[11px] w-11"></div>
                            <div className="flex flex-col items-center justify-start ml-[9px]">
                              <Text
                                className="text-[9.85px] text-gray-900 tracking-[-0.20px]"
                                size="txtAdventProBold985"
                              >
                                Total Energy
                              </Text>
                              <Text
                                className="mt-[3px] text-[12.67px] text-gray-900 tracking-[-0.20px]"
                                size="txtLatoBlack1267"
                              >
                                386kWh
                              </Text>
                            </div> */}
                            {/* <Img
                              className="h-4 ml-[142px] w-4"
                              src="images/img_arrowright.svg"
                              alt="arrowright"
                            /> */}
                            </div>
                        </div>
                        
          
            <div className="vertical-container  flex flex-col p-[10px] w-[40%]">
            
    
            
            {/* Analysis card */}
              <div className="flex flex-col pt-[80px] bg-transparent rounded-lg">
                {/* Peak power */}
              {/* <div>  <h2 className="text-center bg-yellow-200 rounded-lg py-2">ANALYSIS</h2></div> */}
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
                  <div className="text-center text-green-500">{}<span className="text-green-400  pl-1">W</span></div>

                </div>
                {/* Peak current */}
                <div className=" bg-white-A700 h-30 w-[80%]  mt-[-4]  gap-3 rounded-xl border border-blue-300 rounded-xl shadow-lg ring-red-600 p-1 ">
                  <div className="flex flex-col items-center ">
                  <img className="h-6 w-6 mt-1 " src={Current} alt=""/>
                  <span className="bg-clip-text bg-gradient  text-[11.26px] text-blue-300  text-opacity-40 text-center p-1">Peak Current {power}</span>
                  </div>
                  <div className="text-center text-green-500">{current[0]}<span className="text-green-400 mb-2  pl-1 ">A</span></div>
                </div>
                {/* Energy consuption */}
                <div className=" bg-white-A700 h-30 w-[80%]  mt-[-4] gap-3 rounded-xl border border-blue-300 rounded-xl shadow-lg ring-red-600 p-1">
                  <div className="flex flex-col items-center ">
                  <img className="h-6 w-6 mt-1 " src={energy} alt=""/>
                  <span className=" bg-clip-text bg-gradient  text-[11.26px] text-blue-300  text-opacity-40 text-center p-1">Energy</span>
                  </div>
                  <div className="text-center text-green-500">{current[0]}<span className="text-green-400 pl-2">kWh</span></div>

                </div>
               
                </div>
                </List>

                <div className="container border border-blue-300  bg-white-A700 rounded-lg mx-auto mt-12">
      <h1 className="text-lg  font-semibold  "> </h1>
      <Table data={tableData} timestamp={timestamp} />
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