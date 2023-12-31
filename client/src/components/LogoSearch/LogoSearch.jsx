import React from "react";
import home from "../../img/home3.png";
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'
import { Link } from "react-router-dom";


const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <Link to="../home">
        <img className="lshome" src={home} alt="" />

      </Link>
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
