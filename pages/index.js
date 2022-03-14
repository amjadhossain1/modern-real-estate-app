import { Flex, Box } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/property";
import Banner from "../components/banner";

export default function Home({ propertiesForRent, propertiesForSale }) {
  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Box maxWidth="1280px" m="auto">
        <Flex flexWrap="wrap" paddingTop="50px" paddingBottom="50px">
          {propertiesForRent.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
      </Box>

      <Banner
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Box maxWidth="1280px" m="auto">
        <Flex flexWrap="wrap" paddingTop="50px" paddingBottom="50px">
          {propertiesForSale.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const path =
    "properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6";
  const path2 =
    "properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6";

  const propertyForSale = await fetchApi(`${baseUrl}/${path}`);
  const propertyForRent = await fetchApi(`${baseUrl}/${path2}`);
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
