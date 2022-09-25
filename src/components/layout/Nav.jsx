import React from "react";
import {
  Box,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  Flex,
  Show,
  Menu,
  IconButton,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import BulletIcon from "../icons/BulletIcon";
import { NavLink as RouterLink } from "react-router-dom";
import { HamburgerIcon, SettingsIcon } from "@chakra-ui/icons";

const LinkItem = ({ to, children, icon = BulletIcon, ...options }) => (
  <ListItem {...options}>
    <RouterLink to={to} end>
      {({ isActive }) => (
        <Flex gap={3} alignItems="center">
          <ListIcon as={icon} />
          <Text
            variant={isActive ? "primary" : "secondary"}
            fontWeight={"bold"}
          >
            {children}
          </Text>
        </Flex>
      )}
    </RouterLink>
  </ListItem>
);
const Nav = () => (
  <Flex
    flexDirection={"column"}
    justifyContent={"flex-start"}
    alignItems={"center"}
    pt={{ base: 5, lg: "75px" }}
    h={{ lg: "100vh" }}
  >
    <Image src={logo} />

    {/* Mobile */}
    <Show below="lg">
      <Box position={"absolute"} top={0} left={0} m={3}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem as={"a"} href={"/"} icon={<BulletIcon />}>
              Home
            </MenuItem>
            <MenuItem as={"a"} href={"/report"} icon={<BulletIcon />}>
              Report
            </MenuItem>
            <MenuItem as={"a"} href={"/settings"} icon={<SettingsIcon />}>
              Settings
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Show>

    {/* Desktop */}
    <Show above="lg">
      <List
        pt={"3rem"}
        h={"100%"}
        display={"flex"}
        flexDirection={"column"}
        gap={6}
      >
        <LinkItem to={"/"}>Home</LinkItem>
        <LinkItem to={"/report"}>Report</LinkItem>
        <LinkItem
          to={"/settings"}
          // @ts-ignore
          icon={SettingsIcon}
          mt="auto"
          mb={"1rem"}
        >
          Settings
        </LinkItem>
      </List>
    </Show>
  </Flex>
);
export default Nav;
