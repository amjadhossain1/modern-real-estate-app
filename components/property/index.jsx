import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import DefaultImage from "../../images/house.jpg";

const Property = ({ property }) => {
  if (!property) {
    return null;
  }
  const {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  } = property;

  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex
        flexWrap="wrap"
        w="400px"
   
        paddingTop="0px"
        justifyContent="flex-start"
        cursor="pointer"
        bgColor="gray.50"
        borderRadius="md"
        m="auto"
        marginBottom="5"
        _hover={{
          background: "gray.100",
          color: "teal.700",
          shadow: "md",
        }}
      >
        <Box>
          <Image
            src={coverPhoto ? coverPhoto.url : DefaultImage}
            width={400}
            height={260}
            alt="house"
           
          />
        </Box>
        <Box w="full" p="3">
          <Flex
            paddingTop="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <Box paddingRight="3" color="green.400">
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                AED {price}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar
                size="sm"
                src={agency?.logo?.url}
                border="1px"
                borderColor="green.100"
                p="1px"
              ></Avatar>
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            p="1"
            justifyContent="space-between"
            w="250px"
            color="blue.400"
          >
            {rooms}
            <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
          </Flex>
          <Text fontSize="lg">
            {title.length > 30 ? title.substring(0, 30) + "..." : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};
export default Property;
