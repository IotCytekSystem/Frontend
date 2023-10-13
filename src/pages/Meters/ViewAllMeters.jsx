import React, { useState } from 'react';
import Sidebar from 'components/Sidebar'; 
import logo from "../../assets/image/logo.png"
import profile from "../../assets/image/profile.png"
import { useEffect } from 'react';
import CircularProgressBar from 'components/CircularProgressBar';
import axios from '../../axiosConfig';


  // Add more customer data here


const ViewAllCustomer= () => {


  const [isLoading, setIsLoading] = useState(true);
  
  const [meter, setMeter] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (you can replace this with actual data loading)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay as needed
  }, []);

  const deleteHandler = async (meterId) => {
    try {
      const response = await axios.delete(`/meters/${meterId}`);
      console.log(response);
      // Refresh the customer list by making a new GET request
      fetchmeterData();
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  const fetchmeterData = async () => {
    try {
      console.log("trying to fetch meters...");
      // Send a GET request to your server's endpoint
      const response = await axios.get("/meters");
      // Update the state with the received data
      console.log("meters are" + response.data);
      setMeter(response.data);
      console.log(meter);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  
  useEffect(() => {
    // Call the fetchUserData function when the component mounts
    fetchmeterData
    ();
  }); // Empty dependency array
  


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


  return ( 
    <div >
      <div className=' flex bg-green-50 justify-between px-3'>
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
  <div className='flex flex-row  '>
<div className='w-[18%]'>
     
     <Sidebar/>
     </div>
    <div className='w-full'> 
    <div className="flex flex-row justify-start bg-green-100">
  <a href="/add_meter" className="text-center p-3 text-lg font-500 hover:bg-green-300 hover:text-white">
    Add Meter
  </a>
  <a href="/view_allmeters" className="text-center p-3 text-lg font-500 hover:bg-green-300 hover:text-black">
    Meters
  </a>
</div>

    {/* <div className='flex flex-row justify center bg-green-100'>
    <div className='text-center p-3 text-lg font-500'> Add Meter</div>
    <div className='text-center p-3 text-lg font-500 bg-yellow-300'> Meters</div>
</div> */}
<div className="">
      {isLoading ? (
        <CircularProgressBar percentage={50} />
      ) : (
        <div>
      <table className=" h-screen w-full border border-gray-200">
        <thead>
          <tr>
            <th className="px-2 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              SN
            </th>
            <th className="px-2 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Mac_Address
            </th>
            <th className="px-2 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Status
            </th>
            <th className="px-2 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Version
            </th>
            <th className="px-2 py-2 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
             Date
            </th>
            <th className="px-1 py-2 bg-gray-50 text-left text-xs leading-4 font-sm text-gray-500 uppercase tracking-wider">
             Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white border border-gray-200">
          {meter.map((meter) => (
            <tr key={meter.id}>
              <td className="px-2 py-1 whitespace-no-wrap">{meter.serialNumber}</td>
              <td className="px-2 py-1 whitespace-no-wrap">{meter.macAddress}</td>
              <td className="px-2 py-1 whitespace-no-wrap">{meter.status}</td>
              <td className="px-2 py-1 whitespace-no-wrap">{meter.version}</td>
              <td className="px-2 py-1 whitespace-no-wrap">{meter.date}</td>
              <td>
              <div className='flex flex-row space-x-1 '>
    
        <button className=' text-white-A700 bg-green-500 py-1 px-1 rounded hover:bg-green-200'> Edit</button>
      
      
      <button onClick={()=>deleteHandler(meter.id)}  className='text-white-A700 bg-red-500 py-1 px-1 rounded hover:bg-red-200'> Delete</button>
    

    </div>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      )
      }
      </div>
    
    </div>
    </div>
     
    </div>
  );
};

export default ViewAllCustomer;
