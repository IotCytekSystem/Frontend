import React, { useState } from "react";
import { Button, Img, Input, Line, Text } from "components";
import logo from "../../assets/image/logo.png";
import axios from "../../axiosConfig";

const ResetPassword = () => {
  
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setpassword(event.target.value);
  };




 

  const ResetPassword = async (formData) => {
    try {
      const response = await axios.post('/reset-password/request', formData);

      // Handle the response from the server here
      console.log(response.data); // You can display a success message or handle errors

    } catch (error) {
      // Handle errors here, for example:
      console.error('Registration failed:', error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const formData = {
      email: email,
      password:password,
  
    };

    // Call the registerUser function to send the data to the backend
    ResetPassword(formData);
  };

  return (
    <>
      <div className="bg-custom_blue-500 font-poppins h-[900px] mx-auto relative w-full">
      
            {/* <div className="flex flex-col  justify-center items-center w-[32%] md:w-full"> */}
              <div className="flex justify-center">
                <img src={logo} alt="Logo" className="logo" />
                {/* Your login form */}
              </div>
              <div className="md:h-[656px] h-[663px] relative w-full">
                <div className="flex justify-center ">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                    size="txtPoppinsMedium30"
                  >
                 Reset Password
                  </Text>
                </div>
                <form>
                <div className="absolute flex  gap-3 inset-x-[0] items-center justify-center mx-auto top-[10%] w-full">
              
                  <input
                    name="email"
                    placeholder="Enter your email address"
                    className=" p-3 placeholder:text-black rounded-lg "
                    wrapClassName="flex w-full"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />  
</div>

<input
                    name="Password"
                    placeholder="Enter your new password"
                    className=" p-3 placeholder:text-black rounded-lg "
                    wrapClassName="flex w-full"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />  

</form>
<div className=" absolute pt-[65px] items-center  flex flex-col">
      <button onClick={handleSubmit} className="absolute bg-yellow-500 bottom-[5] flex flex-col items-center justify-end p-[11px] rounded-[26px] shadow-bs">
                  <Text size="txtPoppinsMedium17">Submit</Text>
                </button>
      </div>
                </div>
                
     
               
              {/* </div> */}
            </div>
          
    </>
  );
};

export default ResetPassword;
