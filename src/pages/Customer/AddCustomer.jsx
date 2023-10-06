import React,{useState} from "react"

import { Button, Text,} from "components";
import logo from "../../assets/image/logo.png"
import axios from '../../axiosConfig';
import Sidebar from "components/Sidebar";
import profile from "..//..//assets/image/profile.png"
import { Link } from "react-router-dom";




const Addcustomer = () => {



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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setcountry] = useState("");
  const [county, setcounty] = useState("");
  const [town, settown] = useState("");
  const [password, setpassword] = useState("");
  const [selectedRole, setSelectedRole] = useState('');


 
  
    const handleRoleChange = (event) => {
      setSelectedRole(event.target.value);
    };



  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  
  const handlecountryChange = (event) => {
    setcountry(event.target.value);
  };
  const handlecountyChange = (event) => {
    setcounty(event.target.value);
  };
  const handlepasswordChange = (event) => {
    setpassword(event.target.value);
  };


  const handletownChange= (event) => {
    settown(event.target.value);
  };
 
  const sendRequest = async () => {
    try {
      const requestData = {
        email: email,
        password: password,
        phone:phone,
        name:name,
        country:country,
        county:county,
        town:town,
      };
      const response = await axios.post('/clients/add', requestData);
      console.log("added");
      
      window.location.href = '/view_allcustomer';
 


    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
    <div>
    <div className=' flex bg-blue-50 justify-between px-3 '>
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
        <div className="absolute top-12 right-0 bg-white-A700l border rounded shadow-md   ">
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
   
<div className=" bg-lime-50 flex flex-col font-poppins items-start justify-start mx-2 w-[80%]">


{/* <div className="flex flex-row justify center bg-green-100 w-full" >
    <div className='text-center p-3 text-lg font-500 bg-green-500'> Add Customer 
    </div>
    <div className='text-center p-3 text-lg font-500 '> Customer
    </div>
        </div> */}

        <div className="flex flex-row justify-start bg-green-100 w-full">
  <a href="/add_customer" className="text-center p-3 text-lg font-500 hover:bg-green-700">
    Add Customer
  </a>
  <a href="/view_allcustomer" className="text-center p-3 text-lg font-500 hover:text-green-700">
    Customer
  </a>
</div>


<div className="flex md:flex-col flex-row md:gap-10 gap-[73px] items-center
 justify-start ml-4 md:px-5 w-full">

    <div className=" flex justify-center">
    

    </div>        
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-[49px] items-center justify-start w-full">
          <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-[13px] text-black-700"
                size="txtPoppinsMedium13"
              >
                Name
              </Text>
             
              <input
               name="name"
               placeholder="Enter Name"
               className="leading-[normal] p-0 placeholder:text-grey-50 text-base text-left w-[30%]"
               wrapClassName="flex w-full"
               type="name"
               value={name}
               onChange={handleNameChange}
              />
           
            </div>
          <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-[13px]text-black-700"
                size="txtPoppinsMedium13"
              >
                Phone
              </Text>
             
              <input
               name="phone"
               placeholder="Enter Phone Number"
               className="leading-[normal] p-0 placeholder:text-grey-50 text-base text-left w-[30%]"
               wrapClassName="flex w-full"
               type="phone"
               value={phone}
               onChange={handlePhoneChange}
              />
           
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-[13px]text-black-700"
                size="txtPoppinsMedium13"
              >
                country
              </Text>
             
              <input
               name="country"
               placeholder="Enter country Number"
               className="leading-[normal] p-0 placeholder:text-grey-50 text-base text-left w-[30%]"
               wrapClassName="flex w-full"
               type="country"
               value={country}
               onChange={handlecountryChange}
              />
           
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-[13px]text-black-700"
                size="txtPoppinsMedium13"
              >
               county
              </Text>
             
              <input
               name="county"
               placeholder="Enter county Number"
               className="leading-[normal] p-0 placeholder:text-grey-50 text-base text-leftw-[30%]"
               wrapClassName="flex w-full"
               type="county"
               value={county}
               onChange={handlecountyChange}
              />
           
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-[13px]text-black-700"
                size="txtPoppinsMedium13"
              >
           Town
              </Text>
             
              <input
               name="town"
               placeholder="Town"
               className="leading-[normal] p-0 placeholder:text-grey-50 text-base text-left w-[30%]"
               wrapClassName="flex w-full"
               type="town"
               value={town}
               onChange={handletownChange}
              />
           
            </div>
            
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-[13px]text-black-700"
                size="txtPoppinsMedium13"
              >
                Email
              </Text>
             
              <input
               name="email"
               placeholder="Enter your email address"
               className="leading-[normal] p-0  border border-transparent placeholder:text-grey-50 text-base text-left w-[30%]"
               wrapClassName="flex w-full"
               type="email"
               value={email}
               onChange={handleEmailChange}
              />
           
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-[13px]text-black-700"
                size="txtPoppinsMedium13"
              >
               password
              </Text>
             
              <input
               name="password"
               placeholder="Enter password"
               className="leading-[normal] p-0 placeholder:text-grey-50 border border-transparent text-base text-left w-[30%]"
               wrapClassName="flex w-full"
               type="password"
               value={password}
               onChange={handlepasswordChange}
              />
           
            </div>
         

                <div className="flex flex-col gap-3 items-start justify-start w-full">
                <Text
                className="text-[13px]text-black-700"
                size="txtPoppinsMedium13"
              >
            Role
              </Text>
            <div>
            <div>
      <select id="role" value={selectedRole} onChange={handleRoleChange}>
        <option value="">Select</option>
        <option value="CLIENT">Client</option>
        <option value="MANAGEMENT">Management</option>
      </select>
 
    </div>
            </div>
            </div>
           
              </div>
            </div>
          </div>
          {/* <div className="flex flex-row items-start justify-between mt-4 w-full">
       
            <Text
              className="text-grey-50 text-xs"
              size="txtPoppinsLight12"
            >
            </Text>
          </div> */}
         <div className="flex flex-row ml-10 w-full  ">
          <Button onClick={sendRequest} className="cursor-pointer font-medium leading-[normal] min-w-[50px] sm:min-w-full mt-[40px] rounded-[15px] text-[17px] text-center">
        
         Add Customer
          </Button>
          <Button onClick={sendRequest} className="cursor-pointer font-medium leading-[normal] min-w-[50px] sm:min-w-full mt-[40px] rounded-[15px] ml-5 text-[17px] text-center">
        
        Cancel
         </Button>
         </div>
        </div>
   
      
</div>
 
  </div>

</>
);
};

export default Addcustomer;