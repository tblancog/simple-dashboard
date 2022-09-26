import React, { useState, useContext } from "react";
import {
  Container,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";
import SettingsContext from "context/SettingsContext";

const Settings = () => {
  const { displayName, changeDisplayName } = useContext(SettingsContext);
  const [name, setName] = useState(displayName);

  const error = name === "";
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
        <Flex>
          <FormControl maxW={"400px"} isInvalid={error}>
            <FormLabel fontSize={"lg"} fontWeight={"bold"}>
              Name
            </FormLabel>
            <Flex gap={3}>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
              <Button
                type={"button"}
                colorScheme="teal"
                onClick={() => changeDisplayName(name)}
              >
                Save
              </Button>
            </Flex>
            {!error ? (
              <FormHelperText>Set your display name here</FormHelperText>
            ) : (
              <FormErrorMessage>Please set a display name</FormErrorMessage>
            )}
          </FormControl>
        </Flex>
      </Box>
    </Container>
  );
};

export default Settings;
