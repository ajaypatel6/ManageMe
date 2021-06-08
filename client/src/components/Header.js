import React, { useState, useRef, useEffect, useContext } from "react";
import logo from "./../images/rsz_logo.png";
import { FaBars } from "react-icons/fa";

import { links } from "./../data/data";
import { UserContext } from "../UserContext";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const { user, setUser } = useContext(UserContext);

  // null
  console.log("header log");
  console.log(user);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button
              className="nav-toggle"
              onClick={() => {
                setShowLinks(!showLinks);
              }}
            >
              <FaBars />
            </button>
          </div>

          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <h3>Track Yourself, "{user}"</h3>
        </div>
      </nav>
    </>
  );
};

export default Header;
