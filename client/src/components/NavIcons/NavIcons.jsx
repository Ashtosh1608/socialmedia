import React from "react";

import Home from "../../img/home.png";
import noti from "../../img/notification.png";
// import Noti from "../../img/noti.png";
import chat from "../../img/chat.png";
import setting from "../../img/setting.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <img className="navicon" src={Home} alt="" />
      </Link>
      <img className="navicon" src={setting} alt="" />
      <img className="navicon" src={noti} alt="" />
        <img className="navicon" src={chat} alt="" />
    </div>
  );
};

export default NavIcons;
