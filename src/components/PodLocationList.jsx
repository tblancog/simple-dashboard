import { Flex, Box, Divider, List, Text } from "@chakra-ui/react";
import React from "react";
import UserListItem from "./UserListItem";

const PodLocationList = ({ locations }) => {
  const entries = Object.entries(locations);
  return (
    <Flex gap={3} mt={"1rem"} flexWrap={"wrap"}>
      {entries.map((loc) => {
        const [locationName, pods] = loc;
        return (
          <Box minW={"187px"}>
            <Text color={"primary"} fontSize={".85rem"} fontWeight={"bold"}>
              {locationName}
              <Divider borderWidth={"1px"} borderColor={"typography.primary"} />
            </Text>

            <Flex pt={"1rem"}>
              <List display={"flex"} flexDirection={"row"}>
                <Flex
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                  gap={".25rem"}
                >
                  {/* <pre>{JSON.stringify(location)}</pre> */}
                  {Object.entries(pods).map((pods) => {
                    const [podName, status] = pods;
                    return (
                      <UserListItem
                        item={podName}
                        isOnline={status.podOnlineStatus}
                        key={podName}
                      />
                    );
                  })}
                </Flex>
              </List>
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};

export default PodLocationList;
