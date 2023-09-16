import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, Line, List, SelectBox, Text,} from "components";
import logo from "../../assets/image/logo.png";


const durationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Admindashboard = () => {
  const { collapseSidebar, collapsed } = useProSidebar();


  const sideBarMenu = [
    {
      // icon: (
      //   <Img className="h-[17px] w-4" src="images/img_menu.svg" alt="menu" />
      // ),
      label: "Overview",
    },
    {
      // icon: (
      //   <Img className="h-[17px] w-4" src="images/img_menu.svg" alt="menu" />
      // ),
      label: "Customer",
    },
    {
      // icon: (
      //   <Img className="h-[17px] w-4" src="" alt="menu" />
      // ),
      label: "Meters",
    },
    {
      // icon: (
      //   <Img className="h-4 w-4" src="images/img_settings.svg" alt="settings" />
      // ),
      label: "Settings",
    },
    {
      // icon: (
      //   <Img className="h-4 w-4" src="images/img_volume.svg" alt="volume" />
      // ),
      label: "Log out",
    },
  ];

  return (
    <>
      <div className="bg-indigo-50 flex flex-col font-averiaseriflibre items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-[43px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[213px] bg-black-900 flex h-screen md:hidden justify-start overflow-auto rounded-tl-[10px] top-[0]"
          >
           <div className="login-container">
      <img src={logo} alt="Logo" className="logo" />
      {/* Your login form */}
    </div>
            <Text
              className="bg-white-A700 justify-center md:ml-[0] ml-[15px] mr-[39px] mt-[29px] pb-[13px] pt-5 sm:px-5 px-[35px] rounded-[26px] text-[14.08px] text-black-900_01 tracking-[-0.28px] w-[158px]"
              size="txtAveriaSansLibreRegular1408"
            >
              Dashboard
            </Text>
            {/* <Text
              className="bg-white-A700 justify-center md:ml-[0] ml-[15px] mr-[39px] mt-[29px] pb-[13px] pt-5 sm:px-5 px-[35px] rounded-[26px] text-[14.08px] text-black-900_01 tracking-[-0.28px] w-[158px]"
              size="txtAveriaSansLibreRegular1408"
            >
             Customers
            </Text> */}

            {/* <Line className="bg-gradient  h-px md:ml-[0] ml-[15px] mr-[58px] mt-[116px] w-[66%]" /> */}

            {/* <div className="flex flex-row font-averiasanslibre gap-[13px] items-start justify-start md:ml-[0] ml-[15px] mr-[94px] mt-[109px] w-[49%]"> */}
              {/* <div className="bg-yellow-A200 h-[3px] mb-[7px] mt-0.5 rounded w-[8%]"></div> */}
              {/* <Text
                className="text-[9.85px] text-white-A700"
                size="txtAveriaSansLibreBold985"
              >
                Add new customer
              </Text>
            </div>
            <div className="flex flex-row font-averiasanslibre gap-[13px] items-start justify-start md:ml-[0] ml-[15px] mr-[89px] mt-[22px] w-[51%]">
              <div className="bg-yellow-A200 h-[3px] mb-[7px] mt-0.5 rounded w-[8%]"></div>
              <Text
                className="text-[9.85px] text-white-A700"
                size="txtAveriaSansLibreBold985"
              >
                View All Customers
              </Text> */}
            {/* </div> */}
            <Menu
              menuItemStyles={{
                button: {
                  padding: "15px 15px 15px 25px",
                  gap: "13px",
                  backgroundColor: "#ffffff",
                  marginTop: "302px",
                  color: "#000000",
                  fontWeight: 700,
                  fontSize: "14.08px",
                  borderRadius: "26px",
                  [`&:hover, &.ps-active`]: {
                    color: "#551fff",
                    backgroundColor: "#f3f0ffff !important",
                  },
                },
              }}
              className="flex flex-col font-averiasanslibre items-center justify-start mb-[143px] pl-[15px] md:pr-10 sm:pr-5 pr-[49px] pt-[18px] w-[70%]"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-8 items-center justify-start md:mt-0 mt-[26px] w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col gap-[7px] items-start justify-start">
                <Text
                  className="sm:text-[24.16px] md:text-[26.16px] text-[28.16px] text-gray-900 tracking-[-0.56px]"
                  size="txtAveriaSerifLibreBold2816"
                >
                  Dashboard
                </Text>
                {/* <Text
                  className="bg-clip-text bg-gradient bg-red-900 text-[15px] text-transparent "
                  size="txtAveriaSansLibreBold1267"
                > */}
                 <p className="font-weight-10">Information about your clients power consumption and usages</p> 
                {/* </Text> */}
              </div>
              
            </div>
            <div className="vertical-container  mt- -2flex flex-col p-[40px] w-[110%]">

            {/* <div className="flex md:flex-col bg-red-900 flex-row md:gap-[42px] items-start justify-between w-full"> */}
              <div className="flex md:flex-1 flex-col gap-[25px] items-center justify-start bg-yellow-900w-[63%] md:w-full">
                <div className="bg-white-A700 flex sm:flex-col flex-row gap-7 items-center justify-start p-[23px] sm:px-5 rounded-[14px] shadow-bs w-full">
                  <List
                    className="sm:flex-1 sm:flex-col flex-row gap-[27px] grid sm:grid-cols-1 grid-cols-3 ml-1 sm:ml-[0] w-[73%] sm:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        {/* <Button className="bg-orange-50_95 flex h-11 items-center justify-center my-1.5 p-3 rounded-[11px] w-11">
                          <Img
                            className="h-4"
                            src="images/img_group5.png"
                            alt="groupFive"
                          />
                        </Button> */}
                        <div className="flex flex-col gap-1.5 items-start justify-start">
                          <Text
                            className="bg-clip-text bg-gradient  text-[11.26px] text-transparent"
                            size="txtAveriaSerifLibreBold1126"
                          >
                            SmartMeters
                          </Text>
                          <Text
                            className="text-[14.08px] text-gray-900"
                            size="txtAveriaSansLibreBold1408Gray900"
                          >
                            3
                          </Text>
                        </div>
                        <Line className="bg-gray-200 h-[57px] w-px" />
                      </div>
                    </div>
                    <div className="flex flex-row gap-[37px] items-center justify-center w-full">
                      <div className="flex flex-col items-center justify-start w-[73%]">
                        <div className="flex flex-row gap-2 items-center justify-between w-full">
                          {/* <Button className="bg-deep_purple-50_95 flex h-11 items-center justify-center p-[13px] rounded-[11px] w-11">
                            <Img
                              className="h-4"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </Button> */}
                          <div className="flex flex-col gap-1.5 items-start justify-start">
                            <Text
                              className="bg-clip-text bg-gradient  text-[11.26px] text-transparent"
                              size="txtAveriaSerifLibreBold1126"
                            >
                              Power
                            </Text>
                            <Text
                              className="text-[14.08px] text-gray-900"
                              size="txtAveriaSansLibreBold1408Gray900"
                            >
                              2300W
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-gray-200 h-[57px] w-px" />
                    </div>
                    <div className="flex flex-row gap-[30px] items-center justify-between w-full">
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-row gap-2 items-center justify-between w-full">
                          {/* <Button className="bg-light_blue-50_95 flex h-11 items-center justify-center p-[13px] rounded-[11px] w-11"> */}
                            {/* <Img
                              className="h-4"
                              src="images/img_group6.png"
                              alt="groupSix"
                            /> */}
                          {/* </Button> */}
                          <div className="flex flex-col gap-[7px] items-start justify-start">
                            <Text
                              className="bg-clip-text bg-gradient  text-[11.26px] text-transparent"
                              size="txtAveriaSerifLibreBold1126"
                            >
                              Places
                            </Text>
                            <Text
                              className="text-[14.08px] text-gray-900"
                              size="txtAveriaSansLibreBold1408Gray900"
                            >
                              3
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-gray-200 h-[57px] w-px" />
                    </div>
                  </List>
                  <div className="flex sm:flex-1 flex-col items-center justify-start w-1/5 sm:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row gap-2 items-center justify-between w-full">
                        {/* <Button className="bg-red-50_95 flex h-11 items-center justify-center p-[13px] rounded-[11px] w-11"> */}
                          {/* <Img
                            className="h-4"
                            src="images/img_group7.png"
                            alt="groupSeven"
                          /> */}
                        {/* </Button> */}
                        <div className="flex flex-col gap-[5px] items-start justify-start">
                          <Text
                            className="bg-clip-text bg-gradient  text-[11.26px] text-transparent"
                            size="txtAveriaSerifLibreBold1126"
                          >
                            Total Energy
                          </Text>
                          <Text
                            className="text-[14.08px] text-gray-900"
                            size="txtAveriaSansLibreBold1408Gray900"
                          >
                            386 kWh
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col ml-auto items-center justify-end p-6 sm:px-5 rounded-[16px] w-full w-[100%]">
                  <div className="flex flex-col  gap-5 items-center justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between  w-full">
                      <Text
                        className="text-[16.89px] text-gray-900 tracking-[-0.34px]"
                        size="txtAveriaSerifLibreBold1689"
                      >
                        Power consumption in the last 12 hrs{" "}
                      </Text>
                      {/* <Img
                        className="h-4 md:h-auto object-cover w-4"
                        src="images/img_iconlylightfilter.png"
                        alt="iconlylightfilt"
                      /> */}
                    </div>
                    <div className="flex md:flex-col flex-row font-averiasanslibre md:gap-5 items-start justify-evenly w-full">
                      <div className="flex flex-col gap-[27px] items-start justify-start md:mt-0 mt-[19px]">
                        <Text
                          className="bg-clip-text bg-gradient  text-[8.45px] text-transparent"
                          size="txtAveriaSansLibreBold845"
                        >
                          9W
                        </Text>
                        <Text
                          className="bg-clip-text bg-gradient  md:ml-[0] ml-[3px] text-[8.45px] text-transparent"
                          size="txtAveriaSansLibreBold845"
                        >
                          7W
                        </Text>
                        <Text
                          className="bg-clip-text bg-gradient  h-[11px] text-[8.45px] text-transparent"
                          size="txtAveriaSansLibreBold845"
                        >
                          5w
                        </Text>
                        <Text
                          className="bg-clip-text bg-gradient  ml-0.5 md:ml-[0] text-[8.45px] text-transparent"
                          size="txtAveriaSansLibreBold845"
                        >
                          3W
                        </Text>
                        <Text
                          className="bg-clip-text bg-gradient  h-[11px] text-[8.45px] text-transparent"
                          size="txtAveriaSansLibreBold845"
                        >
                          1W
                        </Text>
                      </div>
                      <div className="h-56 md:h-[204px] relative w-[98%] md:w-full">
                        <div className="absolute md:h-[204px] h-[221px] inset-[0] justify-center m-auto w-full">
                          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[2%] w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Line className="bg-gray-200 h-[199px] w-px" />
                              <Line className="bg-gray-200 h-px rotate-[-180deg] w-full" />
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat md:h-[204px] h-[221px] inset-y-[0] left-[0] my-auto pb-[7px] pr-[7px] w-[93%] sm:w-full"
                            style={{
                              // backgroundImage: "url('images/img_group8.png')",
                            }}
                          >
                            <div className="h-52 md:h-[204px] mx-auto w-[99%] sm:w-full">
                              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                <div className="flex flex-col gap-[39px] justify-start w-full">
                                  <div
                                    className="bg-cover bg-no-repeat flex flex-col h-[153px] items-end justify-start p-[26px] sm:px-5 w-full"
                                    style={{
                                      // backgroundImage:
                                      //   "url('images/img_group9.svg')",
                                    }}
                                  >
                                    <div className="bg-blue_gray-100 flex flex-col gap-[13px] items-center justify-start mb-[31px] mr-[110px] p-[5px] rounded-lg shadow-bs1">
                                      <Text
                                        className="text-[11.26px] text-black-900_01 text-center"
                                        size="txtAveriaSerifLibreBold1126Black90001"
                                      >
                                        peak power
                                      </Text>
                                      <Text
                                        className="mb-[13px] text-[14.08px] text-center text-gray-900"
                                        size="txtAveriaSansLibreBold1408Gray900"
                                      >
                                        7546
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[125px] w-[33%] md:w-full">
                                    <Line className="bg-gray-200 h-[9px] mt-[5px] rotate-[-90deg] w-px" />
                                    <Line className="bg-gray-200 h-[9px] ml-[15px] my-0.5 rotate-[-90deg] w-px" />
                                    <Line className="bg-gray-200 h-[9px] ml-[30px] my-0.5 rotate-[-90deg] w-px" />
                                    <Line className="bg-gray-200 h-[9px] mb-[5px] ml-5 rotate-[-90deg] w-px" />
                                    <Line className="bg-gray-200 h-[9px] mb-[5px] ml-12 rotate-[-90deg] w-px" />
                                    <Line className="bg-gray-200 h-[9px] mb-1 ml-[19px] rotate-[-90deg] w-px" />
                                    <Line className="bg-gray-200 h-[9px] ml-[11px] my-0.5 rotate-[-90deg] w-px" />
                                    <Line className="bg-gray-200 h-[9px] mb-1 ml-[15px] rotate-[-90deg] w-px" />
                                  </div>
                                </div>
                              </div>
                              <Line className="absolute bg-gray-200 bottom-[0] h-[9px] right-[17%] rotate-[-90deg] w-px" />
                              <Line className="absolute bg-gray-200 bottom-[0] h-[9px] right-[37%] rotate-[-90deg] w-px" />
                              <Line className="absolute bg-gray-200 bottom-[0] h-[9px] left-[43%] rotate-[-90deg] w-px" />
                              <div className="absolute bottom-[1%] flex flex-row items-start justify-center left-[10%] w-[9%]">
                                <Line className="bg-gray-200 h-[9px] rotate-[-90deg] w-px" />
                                <Line className="bg-gray-200 h-[9px] ml-[23px] rotate-[-90deg] w-px" />
                                <Line className="bg-gray-200 h-[9px] ml-[18px] rotate-[-90deg] w-px" />
                              </div>
                              <Line className="absolute bg-gray-200 bottom-[0] h-[9px] left-[4%] rotate-[-90deg] w-px" />
                              <Line className="absolute bg-gray-200 bottom-[2%] h-[177px] right-1/4 w-px" />
                            </div>
                            <div className="absolute flex flex-col md:gap-10 gap-[168px] h-max inset-y-[0] items-center justify-start my-auto right-1/4 w-[2%]">
                              <div className="bg-white-A700 h-2.5 outline outline-[1px] outline-deep_purple-A200 rounded-[50%] w-2.5"></div>
                              <div className="bg-white-A700 h-1.5 outline outline-[1px] outline-deep_purple-A200 rounded-[50%] w-1.5"></div>
                            </div>
                          </div>
                        </div>
                        <Line className="absolute bg-gray-200 bottom-[7%] h-[9px] right-[7%] rotate-[-90deg] w-px" />
                        <Line className="absolute bg-gray-200 bottom-[19%] h-px left-[0] w-[2%]" />
                        <Line className="absolute bg-gray-200 bottom-[36%] h-px left-[0] w-[2%]" />
                        <Line className="absolute bg-gray-200 h-px left-[0] top-[46%] w-[2%]" />
                        <Line className="absolute bg-gray-200 h-px left-[0] top-[29%] w-[2%]" />
                        <Line className="absolute bg-gray-200 h-px left-[0] top-[11%] w-[2%]" />
                        <Text
                          className="absolute bg-clip-text bg-gradient  bottom-[0] left-[2%] text-[8.45px] text-center text-transparent"
                          size="txtAveriaSansLibreBold845"
                        >
                          10:30 AM
                        </Text>
                        <Text
                          className="absolute bg-clip-text bg-gradient  bottom-[0] left-[37%] text-[8.45px] text-center text-transparent"
                          size="txtAveriaSansLibreBold845"
                        >
                          12:30 AM
                        </Text>
                        <Text
                          className="absolute bg-clip-text bg-gradient  bottom-[0] left-[19%] text-[8.45px] text-center text-transparent"
                          size="txtAveriaSansLibreBold845"
                        >
                          11:30 AM
                        </Text>
                        <Text
                          className="absolute bg-clip-text bg-gradient  bottom-[0] right-[39%] text-[8.45px] text-center text-transparent"
                          size="txtAveriaSansLibreBold845"
                        >
                          01:30 PM
                        </Text>
                        <Text
                          className="absolute bg-clip-text bg-gradient  bottom-[0] right-[22%] text-[8.45px] text-center text-transparent"
                          size="txtAveriaSansLibreBold845"
                        >
                          02:30 PM
                        </Text>
                        <Text
                          className="absolute bg-clip-text bg-gradient  bottom-[0] right-[4%] text-[8.45px] text-transparent"
                          size="txtAveriaSansLibreBold845"
                        >
                          03:30 PM
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* <div className="flex md:flex-col flex-row gap-[27px] items-center justify-between mt-[76px] w-full">
                  <div className="h-[298px] relative w-[48%] md:w-full">
                    <div className="absolute h-[298px] inset-[0] justify-center m-auto shadow-bs2 w-[98%]"></div>
                    <div className="absolute h-[297px] md:h-[298px] inset-[0] justify-center m-auto w-full">
                      <div className="bg-white-A700 h-[298px] m-auto rounded-[16px] w-full"></div>
                      <div className="absolute flex flex-col gap-[37px] inset-x-[0] items-center justify-start mx-auto top-[8%] w-[82%]">
                        <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-[16.89px] text-gray-900 tracking-[-0.34px]"
                              size="txtAveriaSerifLibreBold1689"
                            >
                              GRID
                            </Text>
                          </div> */}
                          {/* <Img
                            className="h-[17px] md:h-auto mt-1 object-cover w-4"
                            src="images/img_iconlylightfilter_17x16.png"
                            alt="iconlylightfilt_One"
                          /> */}
                        {/* </div>
                        <div className="flex flex-row font-averiasanslibre gap-[5px] items-center justify-evenly w-full">
                          <div className="flex flex-col gap-[17px] items-start justify-start w-[32%]">
                            <div className="flex flex-col items-center justify-start w-[45%] md:w-full">
                              <div className="flex flex-col gap-[5px] items-end justify-start w-full">
                                <div className="flex flex-row gap-[7px] items-start justify-start mr-0.5 w-[95%] md:w-full">
                                  <div className="bg-red-A400 h-1 my-[3px] rounded-[50%] w-1"></div>
                                  <Text
                                    className="text-[9.85px] text-gray-900"
                                    size="txtAveriaSansLibreBold985Gray900"
                                  >
                                    Yield
                                  </Text>
                                </div>
                                <Text
                                  className="text-[12.67px] text-gray-900"
                                  size="txtAveriaSansLibreBold1267Gray900"
                                >
                                  85%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
                              <div className="flex flex-col justify-start w-full">
                                <div className="flex flex-row gap-[7px] items-start justify-start w-full">
                                  <div className="bg-light_blue-A400 h-1 mb-[5px] mt-0.5 rounded-[50%] w-1"></div>
                                  <Text
                                    className="text-[9.85px] text-gray-900"
                                    size="txtAveriaSansLibreBold985Gray900"
                                  >
                                    Consumption
                                  </Text>
                                </div>
                                <Text
                                  className="md:ml-[0] ml-[11px] mt-1 text-[12.67px] text-gray-900"
                                  size="txtAveriaSansLibreBold1267Gray900"
                                >
                                  40%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col justify-start w-full">
                                <div className="flex flex-row gap-[7px] items-start justify-start w-full">
                                  <div className="bg-blue_gray-100 h-1 mb-[5px] mt-0.5 rounded-[50%] w-1"></div>
                                  <Text
                                    className="text-[9.85px] text-gray-900"
                                    size="txtAveriaSansLibreBold985Gray900"
                                  >
                                    Energy Balance
                                  </Text>
                                </div>
                                <Text
                                  className="md:ml-[0] ml-[11px] mt-1 text-[12.67px] text-gray-900"
                                  size="txtAveriaSansLibreBold1267Gray900"
                                >
                                  40%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="h-[172px] relative w-[172px]">
                            <div className="bg-red-A400 h-[172px] m-auto rounded-[50%] w-[172px]"></div>
                            <div className="!w-[165px] absolute h-[165px] inset-[0] justify-center m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[165px] absolute h-[165px] inset-[0] justify-center m-auto overflow-visible"
                                value={25}
                                counterClockwise
                                strokeWidth={8}
                                styles={{
                                  trail: { strokeWidth: 8, stroke: "#00b7fe" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(222deg)",
                                    stroke: "#d0d2da",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="font-adventpro md:h-[284px] h-[309px] pb-6 relative shadow-bs2 w-[48%] md:w-full">
                    <div className="h-[284px] mx-auto w-full">
                      <div className="bg-white-A700 h-[284px] m-auto rounded-[16px] w-full"></div>
                      <div className="absolute bottom-1/4 flex flex-col gap-[21px] items-start justify-start right-[2%] w-[90%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-[9.85px] text-gray-900 tracking-[-0.20px]"
                                size="txtAdventProBold985"
                              >
                                Today’s Energy
                              </Text>
                              <Text
                                className="text-[9.85px] text-gray-900 text-right tracking-[-0.20px]"
                                size="txtAdventProBold985"
                              >
                                385kWh
                              </Text>
                            </div>
                            <div className="h-1 overflow-hidden relative w-[92%]">
                              <div className="w-full h-full absolute bg-yellow_50 rounded-[2px]"></div>
                              <div
                                className="h-full absolute bg-orange_A700  rounded-[2px]"
                                style={{ width: "30%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                          <Text
                            className="text-[9.85px] text-gray-900 tracking-[-0.20px]"
                            size="txtAdventProBold985"
                          >
                            Monthly Energy
                          </Text>
                          <div className="h-1 md:h-2 mt-1 relative w-full">
                            <Line className="absolute bg-gray-100 h-1 inset-[0] justify-center m-auto rounded-sm w-full" />
                            <Line className="absolute bg-deep_purple-A400 bottom-[0] h-1 left-[0] rounded-sm w-[52%]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-[25px] inset-x-[0] justify-start mx-auto top-[7%] w-[96%]">
                      <div className="flex flex-row gap-[108px] items-center justify-start w-[93%] md:w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[16.89px] text-gray-900 tracking-[-0.34px]"
                            size="txtLatoBlack1689"
                          >
                            Energy Consumption
                          </Text>
                          <Text
                            className="bg-clip-text bg-gradient  mt-1 text-[9.85px] text-transparent"
                            size="txtAdventProBold985Bluegray400"
                          >
                            information on Energy Consuption
                          </Text>
                        </div> */}
                        {/* <Img
                          className="h-[18px] md:h-auto object-cover"
                          src="images/img_iconlylightfilter_17x16.png"
                          alt="iconlylightfilt_Two"
                        /> */}
                      {/* </div>
                      <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] w-[94%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
                          <div className="flex flex-row items-center justify-end w-full">
                            <div className="bg-gray-50 h-11 rounded-[11px] w-11"></div>
                            <div className="flex flex-col items-center justify-start ml-[9px]">
                              <Text
                                className="text-[9.85px] text-gray-900 tracking-[-0.20px]"
                                size="txtAdventProBold985"
                              >
                                Total Energy
                              </Text>
                              <Text
                                className="mt-[3px] text-[12.67px] text-gray-900 tracking-[-0.20px]"
                                size="txtLatoBlack1267"
                              >
                                386kWh
                              </Text>
                            </div> */}
                            {/* <Img
                              className="h-4 ml-[142px] w-4"
                              src="images/img_arrowright.svg"
                              alt="arrowright"
                            /> */}
                          </div>
                        </div>
                        {/* <Text
                          className="md:ml-[0] ml-[237px] mt-[58px] text-[9.85px] text-gray-900 text-right tracking-[-0.20px]"
                          size="txtAdventProBold985"
                        >
                          90000kWh
                        </Text> */}
                        {/* <div className="flex flex-col items-center justify-start mt-[33px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-[9.85px] text-gray-900 tracking-[-0.20px]"
                                size="txtAdventProBold985"
                              >
                                Yearly Energy
                              </Text>
                              <Text
                                className="text-[9.85px] text-gray-900 text-right tracking-[-0.20px]"
                                size="txtAdventProBold985"
                              >
                                1000000kWh
                              </Text>
                            </div>
                            <div className="md:h-2 h-[5px] mt-[3px] relative w-[92%]">
                              <Line className="absolute bg-red-50 h-1 inset-[0] justify-center m-auto rounded-sm w-full" />
                              <Line className="absolute bg-red-A400 h-[5px] inset-[0] justify-center m-auto rounded-sm w-[98%]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                
          {/* {
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>
                    <input
                      type="text"
                      value={cell}
                      onChange={(e) =>
                        this.handleCellChange(rowIndex, colIndex, e.target.value)
                      }
                    />
                  </td>
                ))}
              </tr>
            ))} */}
            <div className="vertical-container flex flex-col p-[40px] w-[35%]">
            <SelectBox
                className="bg-gray-100 sm:flex-1 font-bold leading-[normal] sm:mt-0 my-2 px-1.5 py-[11px] rounded-lg text-[12.67px] text-gray-900 text-left w-[22%] sm:w-full"
                placeholderClassName="text-gray-900"
                // indicator={
                  // <Img
                  //   className="h-4 w-4"
                  //   src="images/img_arrowdown.svg"
                  //   alt="arrow_down"
                  // />
                // }
                isSearchable={false}
                placeholder="Wednesday,6 sep 2023"
                getOptionLabel={(e) => (
                  <div className="flex items-center">
                    <Img
                      className="h-[17px] mr-[15px] w-4"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <span>{e.label}</span>
                  </div>
                )}
                name="duration"
                isMulti={false}
                options={durationOptionsList}
              />
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start rounded-[16px] w-[100%] md:w-full">
             
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[300px] items-start justify-start w-auto"
                  style={{ backgroundImage: "url('images/defaultNoData.png')" }}
                >
                
                  <div className="flex   flex-col justify-start w-[50%]">
                  <p className="text-center mt-4 pt-2">ANALYSIS</p>
                   
                    <div className="flex flex-col font-averiasanslibre items-center justify-start h-[30px] md:ml-[0] ml-[11px] mt-8 w-[97%] md:w-full">
                      <Text
                        className="text-[10px] text-gray-900 "
                        size="txtAveriaSansLibreBold15"
                      >
                        Peak Power
                      </Text>
                      <Text
                        className="mt-[10px]  text-[10px] text-gray-900"
                        size="txtAveriaSansLibreBold15"
                      >
                        4300W
                      </Text>
                      {/* <Line className="bg-gray-200 h-[5px] mt-[1px] w-full" /> */}
                    </div>
                    <List
                      className="flex flex-col font-averiasanslibre gap-[23px] h-[30px] items-center mr-2 mt-3.5 w-[98%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-col justify-start w-full">
                        <Text
                          className="md:ml-[0] ml-[35px] text-[10px] text-gray-900"
                          size="txtAveriaSansLibreBold15"
                        >
                          Peak Current
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[45px] mt-[10px] text-[10px] text-gray-900"
                          size="txtAveriaSansLibreBold15"
                        >
                          223A
                        </Text>
                        {/* <Line className="bg-gray-200 h-px mt-[33px] w-full" /> */}
                      </div>
                      <div className="flex flex-col justify-start w-full">
                        <Text
                          className="md:ml-[0] ml-[35px] text-[10px] text-gray-900"
                          size="txtAveriaSansLibreBold15"
                        >
                          Energy Consumptipon
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[35px] mt-[10px] text-[10px] text-gray-900"
                          size="txtAveriaSansLibreBold15"
                        >
                          386kWh
                        </Text>
                        {/* <Line className="bg-gray-200 h-px mt-[22px] w-full" /> */}
                      </div>
                    </List>
                  </div>
                </div>
              </div>

              <div className="mt-[10px] bg-white-A700 flex md:flex-1 flex-col items-center justify-start px-5 pt-5 rounded-[16px] w-[100%] md:w-full">
        <table>
          <thead>
            <tr className="bg-blue-500">
            <th></th>
              <th>Red </th>
              <th>Blue </th>
              <th>Yellow </th>
              <th>Total</th>
            </tr>
            <tr>
    <th scope="row">V</th>
    <td className="text-center p-1.5 font-normal"><span className="font-light">7</span> </td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>4,569</td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>4,569</td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>4,569</td>


  </tr>
  <tr>
    <th scope="row">I</th>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>7</td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>7,223</td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>4,569</td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>4,569</td>


  </tr>
  <tr>
    <th scope="row">W</th>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>7</td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>7,223</td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>4,569</td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>4,569</td>


  </tr>
  <tr>
    <th scope="row">QP</th>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>7</td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>7,223</td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>4,569</td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>4,569</td>


  </tr>
  <tr>
    <th scope="row">DP</th>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>7</td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>7,223</td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>4,569</td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>4,569</td>


  </tr>
  <tr>
    <th scope="row">PF</th>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>9</td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>6,219</td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>4,569</td>
    <td className="text-center p-1.5 font-normal"><span className="font-normal"></span>4,569</td>

    
  </tr>
          </thead>
          <tbody>
          </tbody>
            </table>
      </div>
            </div>
          </div>
          </div>
        {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Admindashboard;
