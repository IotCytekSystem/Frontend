import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDashboard, AiFillPieChart, AiFillSetting, AiFillWallet } from 'react-icons/ai';
import { SiFuturelearn, SiOpenaccess } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import {} from 'react-icons/ai';
import "./index"

const Menus = [
  { title: 'Dashboard', path: '/admin_dashboard', 
src : <AiFillDashboard/>,
},
  {
    title: 'Customer',
    path: '/customer',
    src:<CgProfile/>,
    hasSubMenu: true,
    subMenus: [
      
     
    ],
  },
  {
    title: 'Meters',
    path: '/meters',
    src: <AiFillWallet/>,
    hasSubMenu: true,
    subMenus: [
    ],
  },
  {
    title: 'profile',
    path: '/profile',
    src: <CgProfile />,
    hasSubMenu: true,
    subMenus: [
      
      { title: 'Edit Profile', path: '/edit_profile' },
    ],
  },
  { title: 'Settings', path: '/setting', src: <AiFillSetting/>},
  { title: 'LogOut', path: '/', src: <SiOpenaccess />, gap: true },
];

const Sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuClick = (index) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(index);
    }
  };

  return (
    <div className="sidebar">
      <ul className='flex flex-col   space-y-4'>
        {Menus.map((menu, index) => (
          <li key={index}>
            {menu.hasSubMenu ? (
              <div>
                <div
                  className='flex space-x-5  m-8 cursor-pointer'
                  onClick={() => handleSubMenuClick(index)}
                >
                  <div className='text-center mt-2 text-[20px] text-white-A700 '>
                    {menu.src}
                  </div>
                  <span className='text-center text-white-A700 mt-2 text-[15px] hover:bg-white-A700 hover:text-blue-950 hover:px-2  hover:rounded-full'>{menu.title}</span>
                </div>
                {openSubMenu === index && (
                  <ul className='ml-8'>
                    {menu.subMenus.map((subMenu, subIndex) => (
                      <li key={subIndex}>
                      <Link to={subMenu.path}>
  <div className='flex space-x-5  m-8'>
    <div className='text-center mt-2 text-[20px] text-white-A700 '>
      {/* You can customize the icon for sub-menu items */}
    </div>
    <span className='text-center text-white-A700 mt-2 text-[15px] hover:bg-white-A700 hover:text-blue-950 hover:px-2  hover:rounded-full'>{subMenu.title}</span>
  </div>
</Link>
          
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link to={menu.path}>
                <div className='flex space-x-5  m-8'>
                  <div className='text-center mt-2 text-[20px]  text-white-A700 '>
                    {menu.src}
                  </div>
                  <span className='text-center mt-2 text-white-A700 text-[15px] hover:bg-white-A700 hover:text-blue-950 hover:px-2  hover:rounded-full '>{menu.title}</span>
                </div>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
