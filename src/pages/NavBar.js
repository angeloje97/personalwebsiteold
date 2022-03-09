import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Divider } from "@mui/material";

const NavBar = () => {
  const links = require("../data/pageLinks.json");

  return (
    <React.Fragment>
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {links.map((data) => {
          return <NavLink data={data} />;
        })}
      </Stack>
    </React.Fragment>
  );
};

const NavLink = ({ data }) => {
  return (
    <Link to={data.link}>
      <Button color="primary">{data.linkName}</Button>
    </Link>
  );
};

export default NavBar;
