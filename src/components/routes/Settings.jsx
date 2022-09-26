import React, { useState, useContext } from "react";
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Flex,
  Select,
} from "@chakra-ui/react";
import SettingsContext from "context/SettingsContext";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { displayName, changeDisplayName } = useContext(SettingsContext);
  const { i18n, t } = useTranslation();
  const [setting, setSetting] = useState({
    name: displayName,
    loc: i18n.language,
  });
  const errorInName = setting.name === "";

  // Language settings

  function changeLanguage(newLang) {
    i18n.changeLanguage(newLang);
  }

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
        <Flex flexDirection={"column"} gap={10}>
          {/* DisplayName */}
          <FormControl maxW={"400px"} isInvalid={errorInName}>
            <FormLabel fontSize={"lg"} fontWeight={"bold"}>
              {t("displayName")}
            </FormLabel>
            <Flex gap={3}>
              <Input
                value={setting.name}
                onChange={(e) =>
                  setSetting((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
              />
              <Button
                type={"button"}
                colorScheme="teal"
                onClick={() => changeDisplayName(setting.name)}
              >
                {t("save")}
              </Button>
            </Flex>
            {<FormErrorMessage>{t("setDisplayName")}</FormErrorMessage>}
          </FormControl>

          {/* Locale */}
          <FormControl maxW={"400px"}>
            <FormLabel fontSize={"lg"} fontWeight={"bold"}>
              {t("locale")}
            </FormLabel>
            <Flex gap={3}>
              <Select
                value={setting.loc}
                onChange={(e) => {
                  setSetting((prevState) => ({
                    ...prevState,
                    loc: e.target.value,
                  }));
                }}
              >
                <option value={"en"}>(en) English</option>
                <option value={"es"}>(es) Español</option>
              </Select>
              <Button
                type={"button"}
                colorScheme="teal"
                onClick={() => changeLanguage(setting.loc)}
              >
                {t("save")}
              </Button>
            </Flex>{" "}
          </FormControl>
        </Flex>
      </Box>
    </Container>
  );
};

export default Settings;
