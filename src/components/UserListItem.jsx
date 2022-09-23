import React from "react";
import { Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { BsCircleFill } from "react-icons/bs";

const UserListItem = ({ item, isOnline }) => {
  return (
    <Flex as={List} alignItems={"center"}>
      <ListIcon
        as={BsCircleFill}
        color={isOnline ? "green.500" : "red.500"}
        w={3}
        h={3}
      />
      <ListItem>
        <Text fontWeight={"bold"} fontSize="sm">
          {item}
        </Text>
      </ListItem>
    </Flex>
  );
};

export default UserListItem;
