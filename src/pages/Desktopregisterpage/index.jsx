import React, { useState } from "react";
import { Button, Img, Input, Line, Text } from "components";
import logo from "../../assets/image/logo.png";
import axios from "../../axiosConfig";

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
      const response = await axios.post('/v1/auth/register', formData);

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

    // Collect form data (you can use state or useRef to get input values)
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
      <div className="bg-black-900 font-poppins h-[900px] mx-auto relative w-full">
        <Img
          className="h-20 ml-[391px] my-auto w-20"
          src="images/img_play_white_a700.svg"
          alt="play"
        />
        <div className="absolute bg-black-900 flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[69px] items-center justify-start md:px-5 w-[95%] md:w-full">
            <div className="h-[900px] relative w-[64%] md:w-full">
              <Img
                className="absolute h-[900px] inset-[0] justify-center m-auto object-cover rounded-br-[40px] rounded-tr-[40px] w-full"
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
              <div className="absolute bg-blue_gray-100_26 h-[900px] inset-[0] justify-center m-auto w-full"></div>
            </div>
            <div className="flex flex-col gap-[29px] justify-start w-[32%] md:w-full">
              <div className="login-container">
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
                  <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPoppinsRegular16"
                    >
                      If you already have an account, register
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtPoppinsRegular16"
                    >
                      <span className="text-white-A700 font-poppins text-left font-normal">
                        You can{" "}
                      </span>
                      <span className="text-yellow-500 font-poppins text-left font-semibold">
                        Login here!
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col gap-3 inset-x-[0] items-start justify-start mx-auto top-[26%] w-full">
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
                <div className="flex flex-col h-full items-center justify-start mt-[276px] mx-auto w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="text-[13px] text-white-A700"
                      size="txtPoppinsMedium13"
                    >
                      First name
                    </Text>
                    <input
                      name="firstname"
                      placeholder="Enter your first name"
                      className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                      wrapClassName="flex w-full"
                      type="text"
                      value={firstname}
                      onChange={handleFnameChange}
                    />
                  </div>
                </div>
                <div className="absolute bottom-[17%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[13px] text-white-A700"
                      size="txtPoppinsMedium13"
                    >
                      Password
                    </Text>
                    <div className="flex flex-row items-end justify-between mt-[11px] w-full">
                      <div className="flex flex-row gap-[11px] items-start justify-start">
                        <Img
                          className="h-[17px] w-[17px]"
                          src="images/img_padlock1.svg"
                          alt="padlockOne"
                        />
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
                      <Img
                        className="h-3.5 mb-0.5 mt-[7px] w-3.5"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                    </div>
                    <Line className="bg-white-A700 h-0.5 mt-1.5 w-full" />
                  </div>
                </div>
                <div className="absolute bottom-[33%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[13px] text-white-A700"
                      size="txtPoppinsMedium13"
                    >
                      Last Name
                    </Text>
                    <input
                      name="lastname"
                      placeholder="Enter your last name"
                      className="leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                      wrapClassName="flex w-full"
                      type="text"
                      value={lastname}
                      onChange={handleLnameChange}
                    />
                  </div>
                </div>
                <button onClick={handleSubmit} className="absolute bg-yellow-500 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[11px] rounded-[26px] shadow-bs w-full">
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
