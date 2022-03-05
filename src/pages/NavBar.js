import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

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
      <Button variant="contained" color="primary">
        {data.linkName}
      </Button>
    </Link>
  );
};

export default NavBar;
