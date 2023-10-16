// import React,{useState,useEffect} from 'react';
// import axios from '../../axiosConfig';


// const Table = ({ data, timestamp }) => {

//   const [loading, setLoading] = useState(true);
//   const [realtime, setRealtime] = useState([]);

// const totalVoltage=realtime.redVoltage+ realtime.blueVoltage+realtime.yellowVoltage;
// const totalCurrent=realtime.redCurrent+ realtime.blueCurrent+realtime.yellowCurrent;
// const totalPower=realtime.redPower+ realtime.bluePower+realtime.yellowPower;
 
// //     const fetchUserData = async () => {
// //       try {
// //  const response= await axios.get("/realtime/data");
       
// //         console.log("data is" +response.data)
// //         setRealtime(response.data)
// //         setLoading(false); // Set loading to false once data is receive
// //       } catch (error) {
// //         console.error("Error fetching user data:", error);
// //       }
// //     };
// //     useEffect(() => {

// //     // Call the fetchUserData function when the component mounts
// //     fetchUserData();
// //   }, []); 


//   useEffect(() => {
//     // Define a function to fetch user data from the server
//     const fetchUserData = async () => {
//       try {
//         console.log("trying to fetch customers...")
//         // Send a GET request to your server's endpoint
//         const response = await axios.get("/realtime/data");
//         // Update the state with the received data
//         console.log("real time="+response.data)
//         setRealtime(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     // Call the fetchUserData function when the component mounts
//     fetchUserData();
//   }); 

//   return (
    
//     // <div className="overflow-x-auto">
//     <div>
//       <table className="md:min-w-full">
//         <thead>
//           <tr>
//             <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider"></th>
//             <th className="px-6 py-3 border-b-2 border-gray-300 text-red-300 text-left text-sm leading-4 tracking-wider">Red</th>
//             <th className="px-6 py-3  text-yellow-300 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">Yellow</th>
         
//             <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-blue-300 text-sm leading-4 tracking-wider">Blue</th>
//             <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-green-300 text-sm leading-4 tracking-wider">Total</th>
//           </tr>
//         </thead>
//         <tbody>
     
    
//   <tr>
 

//               <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-300">
//                 V
//               </td>
//               <td className="px-2 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">
//             {realtime.redVoltage}
//               </td>
//               <td className="px-2 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">
//               {realtime.yellowVoltage}
//               </td>
//               <td className="px-2 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">
             
//               {realtime.blueVoltage}
//               </td>
//               <td className="px-2 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">
//              {totalVoltage}
//               </td>
//             </tr>
   
          
//           <tr >
//             <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-300">
//               I
//             </td>
//             <td className="px-2 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">
//         {realtime.redCurrent}
//             </td>
//             <td className="px-2 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">
//             {realtime.yellowCurrent}
//             </td>
//             <td className="px-2 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">
//              {realtime.blueCurrent}
//             </td>
//             <td className="px-2 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">
//       {totalCurrent}
//             </td>
//           </tr>
       
       
          
//           <tr >
//             <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-300">
//               W
//             </td>
//             <td className="px-2 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">
//             {realtime.redPower}
//             </td>
//             <td className="px-2 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">
//             {realtime.yellowPower}
//             </td>
//             <td className="px-2 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">
//              {realtime.bluePower}
//             </td>
//             <td className="px-2 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">
//           {totalPower}
//             </td>
//           </tr>
       
      
          
//           <tr >
//             <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-300">
//               QP
//             </td>
//             <td className="px-2 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">
//              2344
//             </td>
//             <td className="px-2 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">
//              2344
//             </td>
//             <td className="px-2 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">
//              2344
//             </td>
//             <td className="px-2 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">
//              2344
//             </td>
//           </tr>
     
        
          
//           <tr>
//             <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-300">
//               DP
//             </td>
//             <td className="px-2 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">
//              2344
//             </td>
//             <td className="px-2 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">
//              2344
//             </td>
//             <td className="px-2 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">
//              2344
//             </td>
//             <td className="px-2 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">
//              2344
//             </td>
//           </tr>
       
//           <tr >
//             <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-300">
//               PF
//             </td>
//             <td className="px-2 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">
//              2344
//             </td>
//             <td className="px-2 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">
//              2344
//             </td>
//             <td className="px-2 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">
//              2344
//             </td>
//             <td className="px-2 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">
//              2344
//             </td>
//           </tr>
      
//         </tbody>
//       </table>
//       <div className="mt-4 text-blue-500 text-center">
//         <span className="font-semibold "> {realtime.day} </span>
//         <span className="font-semibold "> {realtime.date} </span>
//         <span className="font-semibold "> {realtime.time} </span>
        
//       </div>
    
//     </div>
//  );

// };

// export default Table;
import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import { CgCalendarDates } from 'react-icons/cg';

const Table = ({ data, timestamp }) => {
  const [loading, setLoading] = useState(true);
  const [realtime, setRealtime] = useState([]);

  const totalVoltage = realtime.redVoltage + realtime.blueVoltage + realtime.yellowVoltage;
  const totalCurrent = realtime.redCurrent + realtime.blueCurrent + realtime.yellowCurrent;
  const totalPower = realtime.redPower + realtime.bluePower + realtime.yellowPower;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/realtime/data");
        setRealtime(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="w-full">
   <div className='flex flex-row justify-start'> 

   <h1 className='bg-blue-800 flex justify-center'>
<CgCalendarDates/>
</h1>
    <span className="font-semibold bg-blue-300 w-full">{realtime.date}</span>
  
    </div>
      <table className="w-full">
        {/* Table headers */}
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider"></th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-red-300 text-left text-sm leading-4 tracking-wider">Red</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-yellow-300 text-left text-sm leading-4 tracking-wider">Yellow</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-blue-300 text-left text-sm leading-4 tracking-wider">Blue</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-green-300 text-left text-sm leading-4 tracking-wider">Total</th>
          </tr>
        </thead>
        <tbody>
          {/* Voltage row */}
          <tr>
            <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-300">V</td>
            <td className="px-2 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">{realtime.redVoltage}</td>
            <td className="px-2 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">{realtime.yellowVoltage}</td>
            <td className="px-2 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">{realtime.blueVoltage}</td>
            <td className="px-2 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">{totalVoltage}</td>
          </tr>

          {/* Current row */}
          <tr>
            <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-300">I</td>
            <td className="px-2 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">{realtime.redCurrent}</td>
            <td className="px-2 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">{realtime.yellowCurrent}</td>
            <td className="px-2 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">{realtime.blueCurrent}</td>
            <td className="px-2 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">{totalCurrent}</td>
          </tr>

          {/* Power row */}
          <tr>
            <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-300">W</td>
            <td className="px-2 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">{realtime.redPower}</td>
            <td className="px-2 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">{realtime.yellowPower}</td>
            <td className="px-2 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">{realtime.bluePower}</td>
            <td className="px-2 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">{totalPower}</td>
          </tr>

          {/* QP row */}
          <tr>
            <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-300">QP</td>
            <td className="px-2 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">2344</td>
            <td className="px-2 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">2344</td>
            <td className="px-2 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">2344</td>
            <td className="px-2 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">2344</td>
          </tr>

          {/* DP row */}
          <tr>
            <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-300">DP</td>
            <td className="px-2 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">2344</td>
            <td className="px-2 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">2344</td>
            <td className="px-2 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">2344</td>
            <td className="px-2 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">2344</td>
          </tr>

          {/* PF row */}
          <tr>
            <td className="px-2 py-4 whitespace-no-wrap border-b border-gray-300">PF</td>
            <td className="px-2 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">2344</td>
            <td className="px-2 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">2344</td>
            <td className="px-2 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">2344</td>
            <td className="px-2 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">2344</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 text-center text-blue-300">
        <span className="font-semibold mr-2">{realtime.day}</span>
        
        <span className="font-semibold">{realtime.time}</span>
      </div>
    </div>

  );
};
export default Table;
