import React from "react";

import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";

import { Container, Header, Login, Name, Avatar, Inner, Data } from "./styles";

function Profiles() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/55540536?v=4" />
        <Login>patrick</Login>
        <Name>Patrick</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          30&nbsp; <i>followers</i>&nbsp; &middot; &nbsp; 10 &nbsp;
          <i>following</i>
        </Data>
        <Data>
          <MdWork size={20} /> Dev Samurai
        </Data>
        <Data>
          <MdLocationCity size={20} /> Torino
        </Data>
        <Data>
          <MdLink size={20} /> &nbsp;
          <a href="https://devsamurai.com.br">devsamurai.com.br</a>
        </Data>
      </Inner>
    </Container>
  );
}

export default Profiles;
