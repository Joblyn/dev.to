import React from "react";
import NavSearch from "../../components/navsearch/navsearch";
import { Container, Inner, Brand } from "./style";
import Logo from "../../assets/images/logo.png"

export default function Header() {
  return (
    <Container>
      <Inner>
        <Brand href="/" aria-lebel="DEV Community Home">
         <img src={Logo} alt="DEV Community" />
        </Brand>
        <NavSearch />

      </Inner>
    </Container>
  );
}
