import { Container, Flex, Heading, useColorMode } from "@chakra-ui/react";
import SettingsContext from "context/SettingsContext";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import ColorSwitcher from "../ColorSwitcher";
const Header = () => {
  const colorHook = useColorMode();
  const { displayName } = useContext(SettingsContext);
  const { t } = useTranslation();

  return (
    <Container margin={"0 auto"} maxW={"1150px"} py={{ base: 5, lg: "75px" }}>
      <Flex alignItems={"center"}>
        <Heading color={"primary"} size={"2xl"}>
          {`${t("hello")} ${displayName}`}
        </Heading>
        <ColorSwitcher colorState={colorHook} />
      </Flex>
    </Container>
  );
};

export default Header;
