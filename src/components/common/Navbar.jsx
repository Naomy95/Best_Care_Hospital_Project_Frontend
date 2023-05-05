import React, { useState } from "react";
import logo from "../../assets/images/logo1.png";
import location from "../../assets/images/location.png";
import phone from "../../assets/images/phone.png";
import login from "../../assets/images/login.png";
import loginmb from "../../assets/images/loginmb.png";
import AppointmentButton from "../buttons/AppointmentButton";
import LoginModalForm from "../login/LoginModalForm";
import { useNavigate } from "react-router-dom";
import menu from '../../assets/images/menu.png'

const Navbar = () => {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar bg-base-100 px-2  py-2 hidden lg:flex lg:px-28">
        <div className="navbar-start">
          <img src={logo} className="h-16 w-56" alt="Best Care" />
        </div>
        <div className="navbar-center hidden lg:flex ">
          <div className="flex mr-20">
            <img src={location} className="mr-2 w-4 h-5" alt="" />
            <p className="text-md font-normal font-sans text-black">
              82 Baridhara, Dhaka
            </p>
          </div>
          <div className="flex px-10">
            <p className="text-md font-normal font-sans text-black mr-2">
              Have Questions?
            </p>
            <img src={phone} className="mr-2 w-4 h-5" alt="" />
            <p className="text-md font-normal font-sans text-black">12345678</p>
          </div>
        </div>
        <div className="navbar-end">
          <AppointmentButton />
        </div>
      </div>

      <div className="navbar px-4 bg-white lg:bg-navbarcolor lg:px-28 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} >
              <svg
                xmlns={menu}
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#04DAC9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-navbarcolor rounded-box w-52"
            >
              <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
                <a href="/">Home</a>
              </li>
              <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
                <a href="/services">Services</a>
              </li>
              <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
                <a href="/aboutclinic">Offers</a>
              </li>
              {token ? (
                <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
                  <a href="/blogs">Blogs</a>
                </li>
              ) : (
                <li onClick={()=>navigate('/login')} className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
                 
                    <a>Blogs</a>
                
                </li>
              )}

              <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
                <a>Contact</a>
              </li>
            </ul>
          </div>

          <ul className="menu menu-horizontal hidden lg:flex ">
            <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
              <a href="/">Home</a>
            </li>
            <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
              <a href="/services">Services</a>
            </li>
            <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
              <a href="/aboutclinic">Offers</a>
            </li>
            {token ? (
              <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
                <a href="/blogs">Blogs</a>
              </li>
            ) : (
              // <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
              //   <a href="/login">Blogs</a>
              // </li>
              <li className="text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans">
              <label htmlFor="my-modal-4" >
                <a>Blogs</a>
              </label>
              <input
                type="checkbox"
                id="my-modal-4"
                className="modal-toggle"
              />
    
              <LoginModalForm />
            </li>
            )}

            {/* The button to open modal */}
          </ul>
        </div>

        <div className="navbar-center lg:hidden ">
          <img src={logo} className="h-14 w-44 " alt="Best Care" />
        </div>
        <div className="navbar-end">
          <div className="lg:flex hidden  lg:items-center  p-2 border rounded-md border-[1px] border-white">
            <img className="w-1 h-1 lg:w-1/2 lg:h-1/2" src={login} alt="" />

            {token ? (
              <div className="flex ">
                <a
                  className=" text-white text-xs lg:text-lg hover:bg-hoverBackground hover:text-black font-sans lg:pl-2"
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload(true);
                  }}
                >
                  Logout
                </a>
                <img
                  className="lg:hidden w-10 h-10"
                  src={loginmb}
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload(true);
                  }}
                ></img>
              </div>
            ) : (
              <label >
                {" "}
                <a className=" lg:text-white border-[1px] border-buttoncolor p-2 lg:p-0 rounded-lg text-buttoncolor  text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans ml-2 font-semibold lg:font-normal">
                  Login
                </a>
                <input
                type="checkbox"
                id="login-modal"
                className="modal-toggle"
              />
              
              <LoginModalForm />
              </label>
             
           
           
            )}
          </div>

          <div className="flex  lg:hidden  border rounded-md border-[1px] border-white">

            {token ? (
              <div>
               
                <img
                  className="lg:hidden w-10 h-10"
                  src={loginmb}
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload(true);
                  }}
                ></img>
              </div>
            ) : (
              <label onClick={()=>{navigate('/login')}}>
                {" "}
                <a className=" lg:text-white border-[1px] border-buttoncolor p-2 lg:p-0 rounded-lg text-buttoncolor  text-md hover:bg-hoverBackground hover:text-black  font-sans ml-2 font-semibold lg:font-normal">
                  Login
                </a>
            
              </label>
             
           
           
            )}
          </div>

  
        </div>
      </div>
    </div>
  );
};

export default Navbar;
