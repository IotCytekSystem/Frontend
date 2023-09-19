import React,{useState} from "react"

import { Button, Img, Line, List, SelectBox, Text,} from "components";
import { Link } from 'react-router-dom';
import logo from "../../assets/image/logo.png"
import axios from 'axios';




const Addcustomer = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const sendRequest = async () => {
    try {
      const requestData = {
        email: email,
        password: password,
      };
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', requestData);
      console.log("logged in");
      
      window.location.href = '/Admindashboard';
 


    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error:', error);
    }
  };
  return (
    <>

<div className="bg-black-900 flex flex-col font-poppins items-start justify-start mx-auto w-full">
<div className="flex md:flex-col flex-row md:gap-10 gap-[73px] items-start justify-center md:px-5 w-[95%] md:w-full">
  {/* <div className="h-[900px] relative w-[64%] md:w-full">
    <Img
      className="absolute h-[900px] inset-[0] justify-center m-auto object-cover rounded-br-[40px] rounded-tr-[40px] w-full"
      src="images/img_rectangle12.png"
      alt="rectangleTwelve"
    />
    <div className="absolute bg-white-A700_19 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[17px] rounded-[40px] w-20">
      <Img
        className="h-[46px] w-[46px]"
        src="images/img_play.svg"
        alt="play"
      />
    </div>
    <div className="absolute bg-blue_gray-100_26 h-[900px] inset-[0] justify-center m-auto w-full"></div>
  </div> */}
  <div className="flex flex-col gap-[30px] justify-start md:mt-0 mt-[74px] w-[32%] md:w-full">

    <div className=" flex justify-center">
    
    <div className="login-container">
<img src={logo} alt="Logo" className="logo" />
{/* Your login form */}
</div>
{/*             
    <div className="bg-red-200 h-[100px] w-[100px] rounded-full">

    <image className="h-[80px] w-[80px] bg-blue-900 z-100" src="../../assets/image/test.jpg" alt="logo"/>
    </div> */}
    </div>
    <div className="flex flex-col items-center justify-start w-full">
      <div className="flex flex-col gap-[50px] items-start justify-start w-full">
        <div className="flex flex-col gap-5 items-start justify-start ml-0.5 md:ml-[0] w-[68%] md:w-full">
          <Text
            className="text-3xl sm:text-[20px] md:text-[28px] text-white-A700"
            size="txtPoppinsMedium30"
          >
            Add Customer
          </Text>
         
        
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-[49px] items-center justify-start w-full">
          <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-[13px] text-white-A700"
                size="txtPoppinsMedium13"
              >
                Name
              </Text>
             
              <input
               name="name"
               placeholder="Enter Name"
               className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
               wrapClassName="flex w-full"
               type="name"
               value={name}
               onChange={handleNameChange}
              />
           
            </div>
          <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-[13px] text-white-A700"
                size="txtPoppinsMedium13"
              >
                Phone
              </Text>
             
              <input
               name="phone"
               placeholder="Enter Phone Number"
               className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
               wrapClassName="flex w-full"
               type="phone"
               value={phone}
               onChange={handlePhoneChange}
              />
           
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-[13px] text-white-A700"
                size="txtPoppinsMedium13"
              >
                Email
              </Text>
             
              <input
               name="email"
               placeholder="Enter your email address"
               className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
               wrapClassName="flex w-full"
               type="email"
               value={email}
               onChange={handleEmailChange}
              />
           
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-[13px] text-white-A700"
                  size="txtPoppinsMedium13"
                >
                  Password
                </Text>

                <div className="flex flex-row items-end justify-between mt-3 w-full">
                  <div className="flex flex-row gap-2 items-start justify-start">
                    {/* <Img
                      className=" mt-0.5 mb-1 h-[17px] mr-2.5"
                      src="images/img_padlock1.svg"
                      alt="padlockOne"
                    />                          */}
                  </div>
                  <input
               name="password"
               placeholder="Enter your password"
               className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
               wrapClassName="flex w-full"
               type="password"
               value={password}
               onChange={handlePasswordChange}
              />
                
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between mt-4 w-full">
            {/* <CheckBox
              className="font-light leading-[normal] text-left  text-white-A700 text-xs"
              inputClassName="border border-solid border-white-A700 h-[15px] mr-[5px] w-[15px]"
              name="rememberme"
              id="rememberme"
              label="Remember Me"
            ></CheckBox> */}
            <Text
              className="text-white-A700 text-xs"
              size="txtPoppinsLight12"
            >
       {/* <Link to ="/ForgotPassword">ForgotPassword</Link> */}
            </Text>
          </div>
         
          <Button onClick={sendRequest} className="cursor-pointer font-medium leading-[normal] min-w-[429px] sm:min-w-full mt-[58px] rounded-[26px] text-[17px] text-center">
        
         Add Customer
          </Button>
        </div>
      </div>
      
     
\            </div>
  </div>
</div>
</div>
</>
);
};

export default Addcustomer;