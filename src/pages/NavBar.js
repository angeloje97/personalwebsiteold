import React, { useContext } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const links = [
    { linkName: "Home", link: "/" },
    { linkName: "Resume", link: "/resume" },
    { linkName: "Programming", link: "programming" },
  ];
  return (
    <React.Fragment>
      {links.map((data) => {
        return <NavLink data={data} key={data.link} />;
      })}
    </React.Fragment>
  );
};

const NavLink = ({ data }) => {
  return (
    <Link to={data.link}>
      <button variant="contained" color="primary">
        {data.linkName}
      </button>
    </Link>
  );
};

export default NavBar;
