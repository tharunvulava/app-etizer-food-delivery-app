import React, { useContext } from "react";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className="flex justify-between bg-blue-400 sm:bg-yellow-300  lg:bg-orange-300 shadow-lg">
      <div className="logo-container">
        <img className="w-32 h-24" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 hover:bg-white ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:bg-white">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4  hover:bg-white">
            <Link to="/contact">Contact Us</Link>
          </li>
          <ul className="h-full flex justify-between gap-5  items-center">
            <li className="px-4 relative">
              <Link to="/cart">
                {" "}
                <FaShoppingCart size={24} />
                {cartItems.length > 0 && (
                  <span className="absolute text-sm font-bold text-black px-1 right-1 top-[-10px] rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
          <li className="px-4  hover:bg-white">
            <button
              className="login"
              onClick={() => {
                btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
