import { Container, Flex, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import ColorSwitcher from "./ColorSwitcher";
const Header = ({ name = "John" }) => {
  const colorHook = useColorMode();

  // const value = useContext(second)
  return (
    // <HeaderContext.Provider value={"Victor"}>
    <Container margin={"0 auto"} maxW={"1150px"} py={{ base: 5, lg: "75px" }}>
      <Flex alignItems={"center"}>
        <Heading color={"primary"} size={"2xl"}>
          {`Hello ${name}`}
        </Heading>
        <ColorSwitcher colorState={colorHook} />
      </Flex>
    </Container>
    // </HeaderContext.Provider>
  );
};

export default Header;
