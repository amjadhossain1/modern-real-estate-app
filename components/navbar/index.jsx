import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => (
  <Box marginBottom="50px">
    <Box
      pos="fixed"
      top="0"
      zIndex={1}
      w="100%"
      backgroundColor="gray.50"
      borderBottom="1px"
      borderColor="gray.300"
    >
      <Box maxWidth="1280px" m="auto">
        <Flex p="2">
          <Box fontSize="3xl" color="blue.400" fontWeight="bold" cursor='pointer'>
            <Link href="/" paddingLeft="2" passHref>
              <i>Real estate</i>
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <Flex alignItems="center" justifyContent="center">
                <Link href="/search" passHref>
                  <MenuItem w="150px" icon={<BsSearch />}>
                    Search
                  </MenuItem>
                </Link>
                <Link href="/search?purpose=for-sale" passHref>
                  <MenuItem w="150px" icon={<FcAbout />}>
                    Buy Property
                  </MenuItem>
                </Link>
                <Link href="/search?purpose=for-rent" passHref>
                  <MenuItem w="150px" icon={<FiKey />}>
                    Rent Property
                  </MenuItem>
                </Link>
              </Flex>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<FcMenu />}
                variant="outline"
                color="green.100"
              />
              <MenuList>
                <Link href="/" passHref>
                  <MenuItem icon={<FcHome />}>Home</MenuItem>
                </Link>
                <Link href="/search" passHref>
                  <MenuItem icon={<BsSearch />}>Search</MenuItem>
                </Link>
                <Link href="/search?purpose=for-sale" passHref>
                  <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                </Link>
                <Link href="/search?purpose=for-rent" passHref>
                  <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    </Box>
  </Box>
);

export default Navbar;
