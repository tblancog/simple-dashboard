import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Show, Box, Switch, Text } from "@chakra-ui/react";
import React from "react";

const ColorSwitcher = ({ colorState }) => {
  const { colorMode, toggleColorMode } = colorState;

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
        <Text
          color={"typography.secondary"}
          fontWeight={"bold"}
          marginLeft={"auto"}
        >
          {colorMode ===
          (
            <Text display={"inline"} color="white">
              Light Mode
            </Text>
          ) ? (
            <Text display={"inline"} color="fontColor.primary">
              Light Mode
            </Text>
          ) : (
            "Dark Mode"
          )}
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
