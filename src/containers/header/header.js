import React from "react";
import HeaderSearch from "../../components/headerSearch/headerSearch";
import { Container, Inner, Brand, Group } from "./style";
import Logo from "../../assets/images/logo.png";
import { PrimaryLg, SecondarySm } from "../../components/buttons/buttons";

export default function Header() {
  return (
    <Container>
      <Inner>
        <Brand href="/" aria-lebel="DEV Community Home">
          <img src={Logo} alt="DEV Community" />
        </Brand>
        <HeaderSearch />
        <Group>
          <span>
            <SecondarySm />
          </span>
          <PrimaryLg md outline/>
        </Group>
      </Inner>
    </Container>
  );
}
