import { Image, Text, HStack, IconButton, VStack, Flex, Grid, border, Box, Link, MenuIcon } from "@chakra-ui/react";
import { motion } from "framer-motion";

import './CSS/HomePage.css'

const HomePage = () => {
    
    return(
        <>
        <MenuIcon/>
        <IconButton colorScheme="whiteAlpha" aria-label={"hamburger"}/>
        <Box className="home" position={"absolute"}>
          <motion.div whileHover={{ rotate: 33, transformOrigin:"125px 125px", transition: { duration: 0.9 }}}>
            <svg height="250" width="250">
              <polygon points="220,60 250,150 190,240 100, 245,10 140, 80 10" stroke="green" fill="none" strokeWidth={1} />
            </svg>
          </motion.div>
          <Text fontSize={"xx-large"} marginRight={9} position={"static"} marginTop={-120} marginLeft={100}>Home</Text>
        </Box>
        <Grid templateColumns='repeat(2, 1fr)' >
        <Box className="about">
        <motion.div whileHover={{ rotate: -33, transformOrigin:"145px 145px", transition: { duration: 0.7 } }}>
          <svg height="250" width="500">
            <polygon points="210,30 280,150 190,245 100, 245,50 150, 130 20" stroke="yellow" fill="none" strokeWidth={1} />
          </svg>
        </motion.div>
        <Text fontSize={"xx-large"} marginRight={9} position={"static"} marginTop={-120} marginLeft={90}>About Us</Text>
        </Box>
        
        <Box className="services">
        <Link href="/Services">
        <motion.div whileHover={{ rotate: -33, transformOrigin:"133px 133px", transition: { duration: 0.7 } }}>
          <svg height="250" width="500">
            <polygon points="250,30 240,210 170,245 110, 245,20 160, 80 60" stroke="cyan" fill="none" strokeWidth={1} />
          </svg>
        </motion.div>
        </Link>
        <Text fontSize={"xx-large"} position={"static"} marginTop={-120} marginLeft={80}>Services</Text>
        </Box>
        
        </Grid>
        <Box className="contact" position={"fixed"}>
        <motion.div whileHover={{ rotate: 33, transformOrigin:"145px 145px", transition: { duration: 0.9 } }}>
          <svg height="250" width="500">
            <polygon points="210,30 290,150 220,238 100, 245,10 180, 80 10" stroke="purple" fill="none" strokeWidth={1} />
          </svg>
        </motion.div>
        <Text fontSize={"xx-large"} marginRight={9} position={"static"} marginTop={-120} marginLeft={80}>Contact Us</Text>
        </Box>
        </>
    );
};

export default HomePage;

