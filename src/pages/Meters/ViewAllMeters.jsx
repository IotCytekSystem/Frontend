import React, { useState } from 'react';
import Sidebar from 'components/Sidebar'; 
import logo from "../../assets/image/logo.png"
import profile from "../../assets/image/profile.png"

const MeterData = [
  {
    sn: '1',
   Mac_Address: 'John Doe',
    Status: 'Regular',
    Version: '66778',
    Date: '30th-sep-2023',
  },
  {
    sn: '2',
   Mac_Address: 'John Doe',
    Status: 'Regular',
    Version: '5587',
    Date: '30th-sep-2023',
  },
  {
    sn: '3',
   Mac_Address: 'Johnateoe',
    Status: 'Regular',
    Version: '66789',
    Date: '30th-sep-2023',
  },
  // Add more customer data here
];

const ViewAllCustomer= () => {



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
  const [Meter] = useState(MeterData);

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
    </div>      </div>
  <div className='flex flex-row   '>

     <div  className=' bg-blue-950 h-screen w-[18%]'>

    
     <Sidebar/>
    </div>
   
 
    <div className='w-full'> 
    <div className='flex flex-row justify center bg-green-100'>
    <div className='text-center p-3 text-lg font-500'> Add Meter</div>
    <div className='text-center p-3 text-lg font-500 bg-yellow-300'> Meters</div>
</div>
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              SN
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Mac_Address
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Status
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Version
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
             Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white border border-gray-200">
          {Meter.map((Meter, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-no-wrap">{Meter.sn}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{Meter.Mac_Address}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{Meter.Status}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{Meter.Version}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{Meter.Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default ViewAllCustomer;
