import React from "react";
import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Nav from "components/layout/Nav";
import Header from "./Header";

const BaseLayout = ({ children }) => {
  const bg = {
    navBg: useColorModeValue("navy.700", "navy.negative700"),
  };
  return (
    <Grid
      templateColumns={{ lg: "250px auto" }}
      templateRows={{ lg: "150px 1fr" }}
    >
      {/* Nav */}
      <GridItem bg={bg.navBg} rowSpan={2}>
        <Nav />
      </GridItem>

      {/* Header */}
      <GridItem>
        <Header />
      </GridItem>

      {/* Target route component */}
      <GridItem>{children}</GridItem>
    </Grid>
  );
};

export default BaseLayout;
