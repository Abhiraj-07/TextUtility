import React from "react";

import { Link } from 'react-router-dom'



function NavBar(props) {
  return (
    <>
      <nav className="TopDark" id="MyNavBar"   >
        <Link className=" " id="TitleNavBar" to="/">
          {props.logo}
        </Link>
        <div id="ColorPicker">
          <button
            type="color"
            className=""
            id="ModeChange"
            onClick={props.toggleMode}
          >
            Enable {props.mode === "dark" ? "light" : "dark"}{" "}
          </button>
        </div>
      </nav>
    </>
  );
}

NavBar.propTypes = {};

export default NavBar;
