

import React, { useState } from "react";
import { Button, CheckBox, Img, Input, Text } from "components";
import { Link } from 'react-router-dom';
import logo from "../../assets/image/logo.png";
import axios from '../../axiosConfig';
import { useDispatch } from 'react-redux';
import { loginUser } from "store/userSlice";
import { useNavigate } from "react-router-dom";
import video from "../../assets/videos/cytek.mp4"

const DesktoploginpagePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
const handleLogin = async (e) => {
  e.preventDefault();
  let userCredentials = {
    email,
    password,
  };

  try {
    const result = await dispatch(loginUser(userCredentials));
    
    if (loginUser.fulfilled.match(result)) {
      setEmail('');
      setPassword('');
      navigate('/admin_dashboard');
      console.log("Navigate to dashboard");
    }
  } catch (error) {
    // Handle errors here
    console.error(error);
  }
};


  return (
    <div className="bg-custom_blue-500 font-poppins min-h-screen relative">
      <Img
        className="h-20 ml-[391px] my-auto w-20"
        src="images/img_play_white_a700.svg"
        alt="play"
      />
      <div className="absolute bg-custom_blue-500 flex flex-col inset-0 items-center justify-center w-full">
        <div className=" flex md:flex-row gap-[69px] items-center justify-start md:px-5 w-[95%] md:w-full">
        <div className="  sm:hidden flex w-[60vw] h-[90vh] ">
          <video
        className=" object-cover top-0 w-[58vw] h-[88vh] rounded-lg left-0 z-0"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

       
            {/* <div className="absolute bg-blue_gray-100_26 h-[400px] inset-0 justify-center m-auto"></div> */}
          </div>
          <div className="bg-custom_blue-500 border border-1 rounded-lg p-3 border-yellow-500 flex flex-col font-poppins items-center justify-start mx-auto">
            <div className="mb-6">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-2 w-full">
                <Text className="text-[13px] text-white-A700" size="txtPoppinsMedium13">
                  Email
                </Text>
                <input
                  className="rounded-lg text-black"
                  type="text"
                  id="username"
                  name="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text className="ml-0.5 md:ml-[0] text-[13px] text-white-A700" size="txtPoppinsMedium13">
                    Password
                  </Text>
                  <div className="flex flex-row items-end justify-between mt-3 w-full">
                    <input
                      className="rounded-lg text-black"
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-3">
                <button onClick={handleLogin} type="submit" className="text-white-A700 items-center bg-yellow-500 px-4 py-2 hover:bg-yellow-300 rounded-[26px] shadow-bs">
                 login
                 
                </button>
              </div>
            </form>
            <div className="flex flex-row items-start justify-between mt-4 w-full">
              <Text className="text-white-A700 text-xs" size="txtPoppinsLight12">
                <Link to="/forgot_password">Forgot Password</Link>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktoploginpagePage;
