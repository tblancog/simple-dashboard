import React, { useEffect, useState } from "react";
import {
  Container,
  Flex,
  Heading,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import PodLocationList from "components/PodLocationList";
import StatCard from "components/StatCard";
import { formatThousand, toHHMM } from "helpers";
import { useTranslation } from "react-i18next";
const Home = () => {
  const [pods, setPods] = useState({ Stats: {}, pod: {} });
  const { t } = useTranslation();

  useEffect(() => {
    fetch("/api/home")
      .then((res) => res.json())
      .then((data) => {
        setPods(data);
      });
  }, []);

  const bg = {
    cardOneBg: useColorModeValue("highlight.navy", "highlight.negativeNavy"),
    cardTwoBg: useColorModeValue(
      "highlight.emmerald",
      "highlight.negativeEmmerald"
    ),
    cardThreeBg: useColorModeValue("highlight.sky", "highlight.negativeSky"),
  };
  return (
    <Container maxW={"1150px"}>
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
          {t("podOnlineStatus")}
        </Heading>

        {/* Pod locations */}
        <PodLocationList locations={pods.pod} />
      </Box>

      {/* Stat Cards */}
      <Flex wrap={"wrap"} mt={"25px"} justifyContent={"space-between"} gap={3}>
        <StatCard
          title={t("totalDeliveries")}
          bodyText={pods.Stats.totalDeliveries}
          footerText={`25% ${t("improvement")}`}
          bg={bg.cardOneBg}
        />
        <StatCard
          title={t("totalTimeInPod")}
          bodyText={toHHMM(pods.Stats.totalTimeInPod)}
          footerText={`48% ${t("improvement")}`}
          bg={bg.cardTwoBg}
        />
        <StatCard
          title={t("totalUsers")}
          bodyText={formatThousand(pods.Stats.totalUsers)}
          footerText={`48% ${t("improvement")}`}
          bg={bg.cardThreeBg}
        />
      </Flex>
    </Container>
  );
};

export default Home;
