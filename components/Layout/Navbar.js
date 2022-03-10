import Image from "next/image";
import Link from "next/link";
import { Stack, Link as MuiLink, Container } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

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
          <Image src="/images/logo.png" width={90} height={90} layout="fixed" />
        </NavLink>
      </Link>
      <Stack direction="row" spacing={3}>
        <Link href="/utbildningen" passHref>
          <NavLink>Sökande</NavLink>
        </Link>

        <Link href="/" passHref>
          <NavLink>Student</NavLink>
        </Link>

        <NavLink>Ashop</NavLink>
        <NavLink>Näringsliv</NavLink>
        <NavLink>Kontakt</NavLink>
      </Stack>
    </Bar>
  );
};

export default Navbar;
