
// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; 
// const CustomerTable = () => {
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     axios.get('/api/customers') 
//       .then(response => {
//         setCustomers(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching customer data:', error);
//       });
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-4">
//       <h1 className="text-2xl font-semibold mb-4">Customer List</h1>
//       <table className="min-w-full">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">ID</th>
//             <th className="px-4 py-2">Name</th>
//             <th className="px-4 py-2">meterSN</th>
//             <th className="px-4 py-2">Location</th>
//             <th className="px-4 py-2">Type</th>
            
//           </tr>
//         </thead>
//         <tbody>
//           {customers.map(customer => (
//             <tr key={customer.id}>
//               <td className="px-4 py-2">{customer.id}</td>
//               <td className="px-4 py-2">{customer.name}</td>
//               <td className="px-4 py-2">{customer.metersn}</td>
//               <td className="px-4 py-2">{customer.location}</td>
//               <td className="px-4 py-2">{customer.type}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CustomerTable;


import React, { useState } from 'react';
import logo from "..//..//assets/image/logo.png"
import profile from "..//..//assets/image/profile.png"
import Sidebar from 'components/Sidebar';

const customerData = [
  {
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    country: 'USA',
    county: 'California',
    town: 'Los Angeles',
    emailaddress: 'kingori@gmail.com',
  },
  {
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    country: 'USA',
    county: 'California',
    town: 'Los Angeles',
    emailaddress: 'kingori@gmail.com',
  },
  {
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    country: 'USA',
    county: 'California',
    town: 'Los Angeles',
    emailaddress: 'kingori@gmail.com',
  },
  // Add more customer data here
];

const CustomerTable = () => {


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
  const [customers] = useState(customerData);

  return (

    <div >
    <div className=' flex bg-blue-200 justify-between  p-3'>
    <div className=' pt-3 ml-2 flex align-middle'>
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
    </div>    </div>
<div className='flex flex-row   '>

   <div  className=' bg-blue-950 h-screen w-[18%]'>
   <Sidebar/>
  </div>
    <div className="w-[80%]">
    <div className='flex flex-row justify center bg-blue-300'>
    <div className='text-center p-3 text-lg font-300'> Add Customer</div>
    <div className='text-center p-3 text-lg font-300 bg-blue-500'> Customers</div>
</div>
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Phone number
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Country
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              County
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Town
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              emailaddress
            </th>
          </tr>
        </thead>
        <tbody className="bg-white border border-gray-200">
          {customers.map((customer, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-no-wrap">{customer.name}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{customer.phoneNumber}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{customer.country}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{customer.county}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{customer.town}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{customer.emailaddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default CustomerTable;
