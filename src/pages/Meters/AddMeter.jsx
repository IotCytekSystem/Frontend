import React,{useState} from "react"

import { Button, Text,} from "components";
import logo from "../../assets/image/logo.png"
import axios from 'axios';
import Sidebar from "components/Sidebar";
import profile from "..//..//assets/image/profile.png"




const Addmeter = () => {
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



  const [SN, setSN] = useState("");
  const [version, setversion] = useState("");
  const [status, setstatus] = useState("");
  const [Date, setdate] = useState("");



  const handleSNChange = (event) => {
    setSN(event.target.value);
  };
  const handleversionChange = (event) => {
    setversion(event.target.value);
  };
  const handlestatusChange = (event) => {
    setstatus(event.target.value);
  };
  
  const handledateChange = (event) => {
    setdate(event.target.value);
  };
  
 
  const sendRequest = async () => {
    try {
      const requestData = {
        SN: SN,
        version: version,
        status:status,
        date:Date,
            };
      const response = await axios.post('http://localhost:8080/api/clients/add', requestData);
      console.log("added");
      
      window.location.href = '/Admindashboard';
 


    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
    <div>
    <div className=' flex bg-blue-200 justify-between px-3 '>
      <div className=' p-2 flex align-middle'>
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
              <button onClick={handleLogout}>Log Out</button>
            </li>
          </ul>
        </div>
      )}
    </div>      </div>
    
    <div className="flex flex-row">

    <div className="w-[18%] bg-blue-950">
     <Sidebar/>
      </div>
    

      {/* Your content */}
   
<div className=" bg-blue-50 flex flex-col font-poppins items-start justify-start mx-auto w-[80%]">


<div className="flex flex-row justify center bg-blue-300 w-full" >
    <div className='text-center p-3 text-lg font-500 bg-blue-500'> Add Meter</div>
    <div className='text-center p-3 text-lg font-500 '> Meter</div>
        </div>

<div className="flex md:flex-col flex-row md:gap-10 gap-[73px] items-center
 justify-start ml-4 md:px-5 w-full">

    <div className=" flex justify-center">
    

    </div>        
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-[49px] items-center justify-start w-full">
          
          <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-[13px]text-black-700"
                size="txtPoppinsMedium13"
              >
                SN
              </Text>
             
              <input
               name="SN"
               placeholder="Enter your SN address"
               className="leading-[normal] p-0  border border-transparent placeholder:text-grey-50 text-base text-left w-[30%]"
               wrapClassName="flex w-full"
               type="SN"
               value={SN}
               onChange={handleSNChange}
              />
           
            </div>

            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-[13px]text-black-700"
                size="txtPoppinsMedium13"
              >
               version
              </Text>
             
              <input
               name="version"
               placeholder="Enter version"
               className="leading-[normal] p-0 placeholder:text-grey-50 border border-transparent text-base text-left w-[30%]"
               wrapClassName="flex w-full"
               type="version"
               value={version}
               onChange={handleversionChange}
              />
           
            </div>
          <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-[13px]text-black-700"
                size="txtPoppinsMedium13"
              >
                Status
              </Text>
             
              <input
               name="status"
               placeholder="Enter status Number"
               className="leading-[normal] p-0 placeholder:text-grey-50 text-base text-left w-[30%]"
               wrapClassName="flex w-full"
               type="status"
               value={status}
               onChange={handlestatusChange}
              />
           
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-[13px]text-black-700"
                size="txtPoppinsMedium13"
              >
                date
              </Text>
             
              <input
               name="date"
               placeholder="Enter date  Added"
               className="leading-[normal] p-0 placeholder:text-grey-50 text-base text-left w-[30%]"
               wrapClassName="flex w-full"
               type="date"
               value={Date}
               onChange={handledateChange}
              />
           
            </div>
          
            
            
            
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between mt-4 w-full">
       
            <Text
              className="text-grey-50 text-xs"
              size="txtPoppinsLight12"
            >
            </Text>
          </div>
         <div className="flex flex-row  justify-center">
          <Button onClick={sendRequest} className="cursor-pointer font-medium leading-[normal] min-w-[200px] sm:min-w-full mt-[58px] rounded-[26px] text-[17px] text-center">
        
         Add Meter
          </Button>
          <Button onClick={sendRequest} className="cursor-pointer font-medium leading-[normal] min-w-[200px] sm:min-w-full mt-[58px] rounded-[26px] text-[17px] text-center">
        
        Cancel
         </Button>
         </div>
        </div>
   
      
</div>
 
  </div>

</>
);
};

export default Addmeter;