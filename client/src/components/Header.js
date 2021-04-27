import React, { useState, useRef, useEffect } from "react";
import logo from "./../images/rsz_logo.png";
import { FaBeer, FaBars } from "react-icons/fa";

import { links } from "./../data/data";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

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
            {/*  */}
          </div>
        </div>
      </nav>

      <h3>
        Lets go forr a <FaBeer />?
      </h3>
    </>
  );
};

export default Header;