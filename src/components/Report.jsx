import { Box, Container } from "@chakra-ui/react";
import React from "react";

const Report = () => {
  return (
    <Container maxW={"90%"} py={{ base: 5, lg: "75px" }}>
      {/* Status box */}
      <Box
        w={"100%"}
        minH={"288px"}
        mt={"3.5rem"}
        py={"28px"}
        px={"31px"}
        boxShadow="0px 3px 6px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 1px 12px rgba(0, 0, 0, 0.04)"
        p="6"
        rounded="md"
      ></Box>
    </Container>
  );
};

export default Report;
