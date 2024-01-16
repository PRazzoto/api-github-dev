import React from "react";

import { Container, Name, Description, Footer, Lang, Link } from "./styles";

function Repository() {
  return (
    <Container color="#f1c40f">
      <Name>Repository Name</Name>
      <Description>Repository Description</Description>
      <Footer color="#f37272">
        <Lang>Repository Lang</Lang>
        <Link href="devsamuria.com.br" target="_blank">
          Ver
        </Link>
      </Footer>
    </Container>
  );
}

export default Repository;
