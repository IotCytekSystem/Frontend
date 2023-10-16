import React, { useState } from "react";
import { Button, Img, Input, Line, Text } from "components";
import logo from "../../assets/image/logo.png";
import axios from "../../axiosConfig";
import video from "../../assets/videos/cytek.mp4"

const DesktopRegisterPage = () => {
  
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFnameChange = (event) => {
    setFirstname(event.target.value);
  };

  const handleLnameChange = (event) => {
    setLastname(event.target.value);
  };

  const registerUser = async (formData) => {
    try {
      const response = await axios.post('/register', formData);

      // Handle the response from the server here
      console.log(response.data); // You can display a success message or handle errors
      window.location.href = '/';

    } catch (error) {
      // Handle errors here, for example:
      console.error('Registration failed:', error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const formData = {
      email: email,
      firstname: firstname,
      lastname: lastname,
      password: password,
    };

    // Call the registerUser function to send the data to the backend
    registerUser(formData);
  };

  return (
    <>
      <div className="bg-custom_blue-500 font-poppins h-[900px] mx-auto relative w-full">
        <Img
          className="h-20 ml-[391px] my-auto w-20"
          src="images/img_play_white_a700.svg"
          alt="play"
        />
        <div className="absolute bg-custom_blue-500 flex flex-col inset-0 items-center justify-center w-full">
          <div className="flex md:flex-row gap-[69px] items-center justify-start md:px-5 w-[95%] md:w-full">
          <div className="  sm:hidden flex w-[60vw] h-[110vh] ">
          <video
        className=" object-cover top-0 w-[58vw] h-[108vh] rounded-lg left-0 z-0"
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
              <div className="flex justify-center">
                <img src={logo} alt="Logo" className="logo" />
                {/* Your login form */}
              </div>
              <div className="md:h-[656px] h-[663px] relative w-full">
                <div className="absolute flex flex-col gap-[21px] items-start justify-start left-[0] top-[0] w-[74%]">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtPoppinsMedium30"
                  >
                    Sign up
                  </Text>
                </div>
                <div className="absolute flex flex-col gap-3 inset-x-[0] items-start justify-start mx-auto top-[10%] w-full">
                  <Text
                    className="text-[13px] text-white-A700"
                    size="txtPoppinsMedium13"
                  >
                    Email
                  </Text>
                  <input
                    name="email"
                    placeholder="Enter your email address"
                    className=" p-2 placeholder:text-black rounded-lg  w-full"
                    wrapClassName="flex w-full"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="flex flex-col h-full items-center justify-start mt-[200px] mx-auto w-full">
                  <div className="flex flex-col gap-3  items-start justify-start w-full">
                    <Text
                      className="text-[13px] text-white-A700"
                      size="txtPoppinsMedium13"
                    >
                      First name
                    </Text>
                    <input
                      name="firstname"
                      placeholder="Enter your first name"
                      className=" p-2 placeholder:text-black rounded-lg  w-full"
                      wrapClassName="flex w-full"
                      type="text"
                      value={firstname}
                      onChange={handleFnameChange}
                      required
                    />
                  </div>
                </div>
                <div className="absolute bottom-[23%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[13px] text-white-A700"
                      size="txtPoppinsMedium13"
                    >
                      Password
                    </Text>
                    <div className="flex flex-row items-end justify-between mt-[11px] w-full">
                      <div className="flex flex-row gap-[11px] items-start justify-start">
                        <input
                          name="password"
                          placeholder="Enter your password"
                          className=" rounded-lg p-2 placeholder:text-black w-full"
                          wrapClassName="flex w-full"
                          type="password"
                          value={password}
                          onChange={handlePasswordChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[40%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                    <Text
                      className="text-[13px] text-white-A700"
                      size="txtPoppinsMedium13"
                    >
                      Last Name
                    </Text>
                    <input
                      name="lastname"
                      placeholder="Enter your last name"
                      className=" p-2 placeholder:text-black rounded-lg w-full"
                      wrapClassName="flex w-full"
                      type="text"
                      value={lastname}
                      onChange={handleLnameChange}
                      required
                    />
                  </div>
                </div>
                <button onClick={handleSubmit} className="absolute bg-yellow-500 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[11px] rounded-[26px] shadow-bs">
                  <Text size="txtPoppinsMedium17">Register</Text>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopRegisterPage;
