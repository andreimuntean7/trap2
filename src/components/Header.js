import React from "react";
import logo from "../poze/emag.png";
import voucer from "../poze/voucer.svg";
import banner from "../poze/genius-platform-logos-0d634d9b.svg";
import genius from "../poze/genius-genius-logo-379506fc.svg";

function Header() {
  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-10 pt-3 ">
        <img className="w-1/3" src={logo} alt="imagine-emag" />
        <img src={voucer} className="w-1/3" alt="" />
      </div>
      <div className="flex px-5">
        <img className="w-1/5" src={genius} alt="" />
        <img className="w-4/5" src={banner} alt="" />
      </div>
    </div>
  );
}

export default Header;
