import React, { useEffect, useState } from "react";
import {
  Container,
  Flex,
  Heading,
  useColorMode,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import ColorSwitcher from "components/ColorSwitcher";
import PodLocationList from "components/PodLocationList";
import StatCard from "components/StatCard";
import { formatThousand, toHHMM } from "helpers";
const Home = () => {
  const [pods, setPods] = useState({ Stats: {}, pod: {} });

  useEffect(() => {
    fetch("/api/home")
      .then((res) => res.json())
      .then((data) => {
        setPods(data);
      });
  }, []);

  const colorHook = useColorMode();
  const bg = {
    cardOneBg: useColorModeValue("highlight.navy", "highlight.negativeNavy"),
    cardTwoBg: useColorModeValue(
      "highlight.emmerald",
      "highlight.negativeEmmerald"
    ),
    cardThreeBg: useColorModeValue("highlight.sky", "highlight.negativeSky"),
  };
  return (
    <Container maxW={"90%"} py={{ base: 5, lg: "75px" }}>
      {/* Title */}
      <Flex alignItems={"center"}>
        <Heading color={"primary"} size={"2xl"}>
          Hello John
        </Heading>
        <ColorSwitcher colorState={colorHook} />
      </Flex>

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
      >
        <Heading color={"typography.primary"} fontSize={"1.5rem"}>
          Pod Online Status
        </Heading>

        {/* Pod locations */}
        <PodLocationList locations={pods.pod} />
      </Box>

      {/* Stat Cards */}
      <Flex wrap={"wrap"} mt={"25px"} justifyContent={"space-between"} gap={3}>
        <StatCard
          title="Total Deliveries"
          bodyText={pods.Stats.totalDeliveries}
          footerText="25% Improvement"
          bg={bg.cardOneBg}
        />
        <StatCard
          title="Total Time in Pod"
          bodyText={toHHMM(pods.Stats.totalTimeInPod)}
          footerText="48% Improvement"
          bg={bg.cardTwoBg}
        />
        <StatCard
          title="Total Users"
          bodyText={formatThousand(pods.Stats.totalUsers)}
          footerText="48% Improvement"
          bg={bg.cardThreeBg}
        />
      </Flex>
    </Container>
  );
};

export default Home;
