import { Flex, Box, Divider, Text } from "@chakra-ui/react";
import { uniqueId } from "helpers";
import React from "react";
import UserListItem from "./UserListItem";

const PodLocationList = ({ locations }) => {
  const entries = Object.entries(locations);
  return (
    <Flex gap={3} mt={"1rem"} flexWrap={"wrap"}>
      {entries.map((loc) => {
        const [locationName, pods] = loc;
        return (
          <Box minW={"187px"} key={uniqueId()}>
            <Text color={"primary"} fontSize={".85rem"} fontWeight={"bold"}>
              {locationName}
            </Text>
            <Divider borderWidth={"1px"} borderColor={"typography.primary"} />

            <Flex pt={"1rem"}>
              <Flex
                alignItems={"flex-start"}
                flexDirection={"column"}
                gap={".25rem"}
              >
                {Object.entries(pods).map((pods, key) => {
                  const [podName, status] = pods;
                  return (
                    <UserListItem
                      key={uniqueId()}
                      item={podName}
                      isOnline={status.podOnlineStatus}
                    />
                  );
                })}
              </Flex>
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};

export default PodLocationList;
