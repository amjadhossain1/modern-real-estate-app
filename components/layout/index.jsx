import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "../navbar";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Real Estate app</title>
    </Head>
    <header>
      <Navbar />
    </header>
    <main>{children}</main>

    <footer>
      <Box
        textAlign="center"
        p="5"
        color="gray.600"
        borderTop="1px"
        borderColor="gray.100"
      >
        © {new Date().getFullYear()} Real Estate Realtor Company, Inc.
        
      </Box>
    </footer>
  </>
);

export default Layout;
