import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import { downloadCsv } from "../../helpers";
import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Report = () => {
  const [isDownloadStarted, setIsDownloadStarted] = useState(false);
  const { t } = useTranslation();

  return (
    <Container maxW={"1150px"}>
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
          {t("exportCsvFile")}
        </Heading>
        <Center height={"200px"}>
          {!isDownloadStarted ? (
            <Button
              leftIcon={<BsDownload />}
              color={"fontColor.primary"}
              onClick={() => downloadCsv(setIsDownloadStarted)}
            >
              {t("exportCsv")}
            </Button>
          ) : (
            <Text
              fontSize={"lg"}
              fontWeight={"bold"}
              color={"fontColor.primary"}
            >
              {t("downloadStarted")}
            </Text>
          )}
        </Center>
      </Box>
    </Container>
  );
};

export default Report;
