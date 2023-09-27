import React,{useState,useEffect} from 'react';
import axios from 'axios';


const Table = ({ data, timestamp }) => {

  const [loading, setLoading] = useState(true);

  const [rrc,setRrc]= useState([]);
  const [rrp,setRrp] = useState([]);
  const [rrv,setRrv] = useState([]);

  const [ryc,setRyc]= useState([]);
  const [ryp,setRyp] = useState([])
  const [ryv,setRyv] = useState([])

  const [rbc,setRbc]= useState([]);
  const [rbp,setRbp] = useState([])
  const [rbv,setRbv] = useState([])

  const totalV= rrv+ryv+rbv;
  const totalC= rrc+ryc+rbc;
  const totalP= rrp+ryp+rbp;






  useEffect(() => {
    const fetchUserData = async () => {
      try {
      

// Realtime data
 const response= await axios.get("http://192.168.1.135:8080/api/realtime/data");
 const rrc = await axios.get("http://192.168.1.135:8080/api/realtime/red/current");
  const rrp = await axios.get("http://192.168.1.135:8080/api/realtime/red/power");
  const rrv = await axios.get("http://192.168.1.135:8080/api/realtime/red/voltage");
        
  const ryc = await axios.get("http://192.168.1.135:8080/api/realtime/yellow/current");
  const ryp = await axios.get("http://192.168.1.135:8080/api/realtime/yellow/power");
  const ryv = await axios.get("http://192.168.1.135:8080/api/realtime/yellow/voltage");
        
  const rbc = await axios.get("http://192.168.1.135:8080/api/realtime/blue/current");
  const rbp = await axios.get("http://192.168.1.135:8080/api/realtime/blue/power");
  const rbv = await axios.get("http://192.168.1.135:8080/api/realtime/blue/voltage");
        
        // Update the state with the received data
        setRrc(rrc.data);
        setRrp(rrp.data);
        setRrv(rrv.data);

       setRyc(ryc.data);
       setRyp(ryp.data);
       setRyv(ryv.data);

       setRbc(rbc.data);
       setRbp(rbp.data);
       setRbv(rbv.data);


        setLoading(false); // Set loading to false once data is received

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Call the fetchUserData function when the component mounts
    fetchUserData();
  }, []); 



  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider"></th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-red-300 text-left text-sm leading-4 tracking-wider">Red</th>
            <th className="px-6 py-3  text-yellow-300 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">Yellow</th>
         
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-blue-300 text-sm leading-4 tracking-wider">Blue</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-green-300 text-sm leading-4 tracking-wider">Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
          
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                V
              </td>
              <td className="px-6 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">
              {rrc}
              </td>
              <td className="px-6 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">
               {ryc}
              </td>
              <td className="px-6 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">
               {rbc}
              </td>
              <td className="px-6 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">
             {totalC}
              </td>
            </tr>
          ))}
          {data.map((item) => (
          
          <tr key={item.id}>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
              I
            </td>
            <td className="px-6 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">
        {rrp}
            </td>
            <td className="px-6 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">
            {ryp}
            </td>
            <td className="px-6 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">
             {rbp}
            </td>
            <td className="px-6 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">
      {totalP}
            </td>
          </tr>
        ))}
        {data.map((item) => (
          
          <tr key={item.id}>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
              W
            </td>
            <td className="px-6 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">
            {rrv}
            </td>
            <td className="px-6 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">
            {ryv}
            </td>
            <td className="px-6 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">
             {rbv}
            </td>
            <td className="px-6 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">
          {totalV}
            </td>
          </tr>
        ))}
        {data.map((item) => (
          
          <tr key={item.id}>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
              QP
            </td>
            <td className="px-6 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">
             2344
            </td>
            <td className="px-6 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">
             2344
            </td>
            <td className="px-6 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">
             2344
            </td>
            <td className="px-6 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">
             2344
            </td>
          </tr>
        ))}
          {data.map((item) => (
          
          <tr key={item.id}>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
              DP
            </td>
            <td className="px-6 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">
             2344
            </td>
            <td className="px-6 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">
             2344
            </td>
            <td className="px-6 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">
             2344
            </td>
            <td className="px-6 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">
             2344
            </td>
          </tr>
        ))}
        {data.map((item) => (
          
          <tr key={item.id}>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
              PF
            </td>
            <td className="px-6 py-4 text-red-500 whitespace-no-wrap border-b border-gray-300">
             2344
            </td>
            <td className="px-6 py-4 text-yellow-500 whitespace-no-wrap border-b border-gray-300">
             2344
            </td>
            <td className="px-6 py-4 text-blue-500  whitespace-no-wrap border-b border-gray-300">
             2344
            </td>
            <td className="px-6 py-4 text-green-500 whitespace-no-wrap border-b border-gray-300">
             2344
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <div className="mt-4 text-blue-500 text-center">
        <span className="font-semibold "> </span>
        {timestamp}
      </div>
    </div>
  );
};

export default Table;
