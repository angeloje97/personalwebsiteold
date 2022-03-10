import React from "react";
import { Button, Stack, Divider, Link } from "@mui/material";

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
          return <NavLink data={data} key={data.link} />;
        })}
      </Stack>
    </React.Fragment>
  );
};

const NavLink = ({ data }) => {
  return (
    <Link href={data.link} underline="none">
      <Button color="primary">{data.linkName}</Button>
    </Link>
  );
};

export default NavBar;
