import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = (props) => {
  const {
    purpose,
    title1,
    title2,
    desc1,
    desc2,
    buttonText,
    linkName,
    imageUrl,
  } = props;
  return (
    <Box bgColor="green.50">
      <Flex
        maxWidth="1280px"
        flexWrap="wrap"
        justifyContent='center'
        alignItems="center"        
        paddingTop="50px"
        paddingBottom="50px"
      >
        <Image src={imageUrl} width={650} height={350} alt="banner" />
        <Box p="5">
          <Text color="gray.500" fontSize="sm" fontWeight="medium">
            {purpose}
          </Text>
          <Text fontSize="3xl" fontWeight="bold">
            {title1}
            <br />
            {title2}
          </Text>
          <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
            {desc1}
            <br />
            {desc2}
          </Text>
          <Button fontSize="xl">
            <Link href={linkName}>
              <a>{buttonText}</a>
            </Link>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Banner;
