import { Flex, Box, Divider, List, Text } from "@chakra-ui/react";
import React from "react";
import UserListItem from "./UserListItem";

const PodLocationList = ({ locations }) => {
  return (
    <Flex gap={3} mt={"1rem"} flexWrap={"wrap"}>
      {locations.map((loc) => (
        <Box minW={"187px"}>
          <Text color={"primary"} fontSize={".85rem"} fontWeight={"bold"}>
            {loc}
            <Divider borderWidth={"1px"} borderColor={"typography.primary"} />
          </Text>

          <Flex pt={"1rem"}>
            <List display={"flex"} flexDirection={"row"}>
              <Flex
                alignItems={"flex-start"}
                flexDirection={"column"}
                gap={".25rem"}
              >
                {["Angela", "Catherine", "Brittany", "Daisy"].map((el) => (
                  <UserListItem item={el} key={el} />
                ))}
              </Flex>
            </List>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default PodLocationList;
