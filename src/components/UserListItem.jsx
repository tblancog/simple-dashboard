import React from "react";
import { Flex, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { BsCircleFill } from "react-icons/bs";

const UserListItem = ({ item }) => {
  return (
    <Flex alignItems={"center"}>
      <ListIcon as={BsCircleFill} color="green.500" w={3} h={3} />
      <ListItem>
        <Text fontWeight={"bold"} fontSize="sm">
          {item}
        </Text>
      </ListItem>
    </Flex>
  );
};

export default UserListItem;
