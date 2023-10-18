import React,{useState} from "react"

import { Button, Text,} from "components";
import logo from "../../assets/image/logo.png"
import axios from '../../axiosConfig';
import Sidebar from "components/Sidebar";
import profile from "..//..//assets/image/profile.png"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'; // Import useSelector




const EditProfile = () => {


  const user = useSelector((state) => state.user.user);

  // Initialize state variables with user data
  const initialName = user.user.id || '';
  const initialPhone = user.user.phone || '';
  const initialEmail = user.user?.email || '';
  const initialCountry = user.user?.country || '';
  const initialCounty = user.user?.county || '';
  const initialTown = user.user?.town || '';
  const initialPassword = user.user?.password || '';
  const initialSelectedRole = user.user?.role || '';


  // Form state variables
  const [name, setName] = useState(initialName);
  const [phone, setPhone] = useState(initialPhone);
  const [email, setEmail] = useState(initialEmail);
  const [country, setCountry] = useState(initialCountry);
  const [county, setCounty] = useState(initialCounty);
  const [town, setTown] = useState(initialTown);
  const [password, setPassword] = useState(initialPassword);
  const [selectedRole, setSelectedRole] = useState(initialSelectedRole);



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
    setCountry(event.target.value);
  };
  const handlecountyChange = (event) => {
    setCounty(event.target.value);
  };
  const handlepasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handletownChange= (event) => {
    setTown(event.target.value);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleButtonClick() {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  }

 
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


    <div className="w-[18%] sm:hidden md:flex"> 
       <Sidebar 

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
   

   
   
<div className=" bg-lime-50 flex flex-col font-poppins items-start justify-start mx-[-45px] w-[100%]">




        <div className="flex flex-row justify-start bg-green-100 w-full">
  <a href="/edit_profile" className="text-center pl-6 text-lg font-500 hover:bg-green-700">
    Edit Profile
  </a>
  {/* <a href="/view_allcustomer" className="text-center p-3 text-lg font-500 hover:text-green-700">
    Customer
  </a> */}
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
               className="leading-[normal] p-0 placeholder:text-grey-50 text-base text-left w-[100%]"
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
               className="leading-[normal] p-0 placeholder:text-grey-50 text-base text-left w-[100%]"
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
               className="leading-[normal] p-0 placeholder:text-grey-50 text-base text-left w-[100%]"
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
               className="leading-[normal] p-0 placeholder:text-grey-50 text-base text-left w-[100%]"
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
               className="leading-[normal] p-0 placeholder:text-grey-50 text-base text-left w-[100%]"
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
               className="leading-[normal] p-0  border border-transparent placeholder:text-grey-50 text-base text-left w-[100%]"
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
               className="leading-[normal] p-0 placeholder:text-grey-50 border border-transparent text-base text-left w-[100%]"
               wrapClassName="flex w-full"
               type="password"
               value={password}
               onChange={handlepasswordChange}
              />
           
            </div>
         
            {/* <div className="flex item-start  ]  "> */}
          <Button onClick={sendRequest} className="cursor-pointer font-medium    mt-2 rounded-[15px] text-[14px] text-start">
        
         
         <Link to="/profile">submit</Link>

          </Button>
          {/* <Button onClick={sendRequest} className="cursor-pointer font-medium  min-w-[50px]  mt-[40px] rounded-[15px] ml-5 text-[17px] text-center">
        
        Cancel
         </Button> */}
         {/* </div> */}
                {/* <div className="flex flex-col gap-3 items-start justify-start w-full">
                <Text
                className="text-[13px]text-black-700"
                size="txtPoppinsMedium13"
              >
            Role
              </Text>
            <div> */}
            <div>
      {/* <select id="role" value={selectedRole} onChange={handleRoleChange}>
        <option value="">Select</option>
        <option value="CLIENT">Client</option>
        <option value="MANAGEMENT">Management</option>
      </select> */}
 
    </div>
            </div>
            </div>
           
              </div>
            </div>
          </div>
     
        
        </div>
   
      

 
 

</>
);
};

export default EditProfile;