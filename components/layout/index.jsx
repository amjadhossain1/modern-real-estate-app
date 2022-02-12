import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "../navbar";
// import Footer from "../footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Real Estate app</title>
    </Head>
    <Box>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        {/* <Footer /> */}
      </footer>
    </Box>
  </>
);

export default Layout;
