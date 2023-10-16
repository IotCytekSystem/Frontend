import React, { useState } from "react";
import { Button, CheckBox, Img, Input, Text } from "components";
import { Link } from 'react-router-dom';
import logo from "../../assets/image/logo.png";
import axios from '../../axiosConfig';
import { useDispatch} from 'react-redux';
import { loginUser } from "store/userSlice";
import { useNavigate } from "react-router-dom";

const DesktoploginpagePage = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
const dispatch=useDispatch ();
const navigate=useNavigate();

  const handleLogin =(e) => {
    e.preventDefault();
   let userCredentials={
    email,password
   };
   dispatch(loginUser(userCredentials)).then((result)=>{
    if (result.payload){
      setEmail('');
      setPassword('');
      navigate('/admin_dashboard')
      console.log("Naviagte to dashboard");

    }
   });
  };

  return (
    <>
     <div className="bg-custom_blue-500 font-poppins h-screen mx-auto relative w-full]">
        <Img
          className="h-20 ml-[391px] my-auto w-20"
          src="images/img_play_white_a700.svg"
          alt="play"
        />
   <div className="absolute bg-custom_blue-500 flex flex-col  inset-[0] items-start justify-center m-auto w-full">
   <div className="flex md:flex-col flex-row md:gap-10 gap-[69px] items-center justify-start md:px-5 w-[95%]">

   <div className=" relative w-[64%] md:w-full">
              <Img
                className="absolute h-screen  inset-[0] justify-center m-auto object-cover rounded-br-[40px] rounded-tr-[40px] w-full"
                src="images/img_rectangle12.png"
                alt="rectangleThirteen"
              />
              <div className="absolute bg-white-A700_19 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[17px] rounded-[50%] w-20">
                <Img
                  className="h-[46px] w-[46px]"
                  src="images/img_play.svg"
                  alt="play_One"
                />
              </div>
              <div className="absolute bg-blue_gray-100_26 h-[900px] inset-[0] justify-center m-auto"></div>
            </div>
      <div className="bg-custom_blue-500 flex flex-col font-poppins items-center justify-start mx-auto ">
      <div className="">
                <img src={logo} alt="Logo" className="logo" />
                {/* Your login form */}
              </div>
              
        <form onSubmit={handleLogin}> {/* Wrap the content in a form */}
      
          <div className="flex md:flex-col flex-col md:gap-10 gap-[73px] items-start justify-start md:px-5 w-[95%] md:w-full">
            {/* ... (rest of your code) */}

            <div className="flex justify-start">
                  <Text
                    className="text-2xl  text-white-A700"
                    size="txtPoppinsMedium30"
                  >
                    Sign up
                  </Text>
                </div>
            <div className="flex flex-col gap-2  mt-[-4px] items-start justify-start w-full">
              <Text
                className="text-[13px] text-white-A700"
                size="txtPoppinsMedium13"
              >
                Email
              </Text>
              <input className="rounded-lg text-black"
                type="text"
                id="username"
                name="username"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required // Add the "required" attribute
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
                  <div className="flex flex-row gap-2 items-start justify-start"></div>
                  <input className="rounded-lg text-black"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                        required // Add the "required" attribute
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-3">
          <button  type="submit" >
          
        <div className="text-white-A700 items-center bg-yellow-500 px-4 py-2 mx-auto  hover:bg-yellow-300 rounded-[26px] shadow-bs">  
     
      <Link to="/admin_dashboard"> Login</Link>
        </div>
       
          </button>
          </div>
        </form>

        <div className="flex flex-row items-start justify-between mt-4 w-full">
            <Text
              className="text-white-A700 text-xs"
              size="txtPoppinsLight12"
            >
              <Link to="/forgot_password">ForgotPassword</Link>
            </Text>
          </div>
        {/* ... (rest of your code) */}
      </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default DesktoploginpagePage;