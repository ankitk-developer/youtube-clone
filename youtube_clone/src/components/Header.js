import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytlogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";

import { RiVideoAddLine } from "react-icons/ri";

import { FiBell } from "react-icons/fi";

import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
    }
  };

  const { pathname } = useLocation();
  const pageName = pathname.split("/")?.filter(Boolean)?.[0];
  return (
    <div className="sticky top-0 z-10 h-16 flex flex-row items-center justify-between px-4 md:px-5 bg-black">
      <Link className="flex h-5 items-center">
        <img src={ytlogo} className="h-full  dark:md:block" alt="ytlogo" />
      </Link>
      <div className="flex gap-4 border border-slate-700 rounded-full">
        <div className="flex items-center">
          <IoIosSearch className="text-white text-xl mx-4" />
        </div>
        <div>
          <input
            placeholder="Seach ..."
            type="text"
            className="bg-transparent outline-none text-white px-1 py-1.5 w-[30rem]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <RiVideoAddLine className="text-white text-xl mx-4" />
        </div>
        <div>
          <FiBell className="text-white text-xl mx-4" />
        </div>
      </div>
    </div>
  );
};

export default Header;
