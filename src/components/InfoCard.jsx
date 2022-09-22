import {
  Flex,
  Heading,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const InfoCard = ({ title, bodyText, footerText, bg }) => {
  const textColor = useColorModeValue("fontColor.darkMode", "white");
  const boxShadow = `0px 3px 6px rgba(0, 0, 0, 0.1), 
                      0px 4px 8px rgba(0, 0, 0, 0.08), 
                      0px 1px 12px rgba(0, 0, 0, 0.04);`;
  return (
    <Flex
      flexDirection="column"
      justifyContent={"space-between"}
      w={"360px"}
      h={"200px"}
      bg={bg}
      boxShadow={boxShadow}
      borderRadius={"14px"}
      p={"16px 25px 14px"}
    >
      <Flex>
        <Heading
          size="lg"
          fontSize="1.375rem"
          fontWeight={"semibold"}
          color={textColor}
        >
          {title}
        </Heading>
        <Stack spacing={3} ml="auto">
          <Select
            placeholder="extra small size"
            fontSize={".75rem"}
            variant="unstyled"
            textAlign={"right"}
            defaultValue={"last-week"}
            color={textColor}
          >
            <option value="last-week">Last Week</option>
            <option value="last-month">Last Month</option>
          </Select>
        </Stack>
      </Flex>
      <Text mt={"0.875rem"} mb={"1rem"} fontSize={"2.3rem"} color={textColor}>
        {bodyText}
      </Text>
      <Text
        as={"footer"}
        fontSize="0.75rem"
        fontWeight={"semibold"}
        color={textColor}
      >
        {footerText}
      </Text>
    </Flex>
  );
};

export default InfoCard;
