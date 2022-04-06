import Image from "next/image";
import Link from "next/link";
import { Stack, Link as MuiLink, Container } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import MenuButton from "./MenuButton";
import MENU from "../../src/mockData/menuMock";

const NavLink = styled(MuiLink)`
  color: white;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 33px;
  text-decoration: none;
`;

const Bar = styled(Stack)`
  min-width: 1400px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
`;
const LinkTest = styled(Link)``;

const Navbar = () => {
  return (
    <Bar
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding={4}
    >
      <Link href="/" passHref>
        <NavLink>
          <Image
            src="/images/logo-minimal.png"
            width={62}
            height={54}
            layout="fixed"
          />
        </NavLink>
      </Link>
      <Stack direction="row" spacing={3}>
        {MENU.map((item) => <MenuButton name={item.title} path={item.path} links={item.links}></MenuButton>)}
      </Stack>
    </Bar>
  );
};

export default Navbar;
