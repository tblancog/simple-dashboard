import React from "react";
import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Nav from "components/Nav";

const BaseLayout = ({ children }) => {
  const bg = {
    navBg: useColorModeValue("navy.700", "navy.negative700"),
  };
  return (
    <Grid templateColumns={{ lg: "250px auto" }}>
      <GridItem bg={bg.navBg}>
        <Nav />
      </GridItem>

      <GridItem>{children}</GridItem>
    </Grid>
  );
};

export default BaseLayout;
