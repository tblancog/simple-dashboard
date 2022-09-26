import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Show, Box, Switch, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

const ColorSwitcher = ({ colorState }) => {
  const { colorMode, toggleColorMode } = colorState;
  const { t } = useTranslation();

  const textSettings = {
    color: colorMode === "dark" ? "fontColor.secondary" : "fontColor.primary",
    fontWeight: "bold",
    marginLeft: "auto",
    display: "inline",
  };
  return (
    <>
      {/* Mobile */}
      <Show below="lg">
        <Box position={"absolute"} top={0} right={0} py={5} px={4}>
          {colorMode === "dark" ? (
            <SunIcon w={5} h={5} color="orange.200" onClick={toggleColorMode} />
          ) : (
            <MoonIcon w={5} h={5} color="blue.700" onClick={toggleColorMode} />
          )}
        </Box>
      </Show>

      {/* Tablets and above  */}
      <Show above="lg">
        <Text {...textSettings}>
          {colorMode === "dark" ? t("lightMode") : t("darkMode")}
          <Switch
            color={"navy.1000"}
            size="lg"
            ml={3}
            onChange={toggleColorMode}
          />
        </Text>
      </Show>
    </>
  );
};

export default ColorSwitcher;
