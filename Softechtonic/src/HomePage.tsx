import { Image, Text, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import './CSS/HomePage.css'

const HomePage = () => {
    
    return(
        <>
        <div className="home">
        <motion.div whileHover={{ rotate: 33, transformOrigin:"125px 125px", transition: { duration: 0.9 } }}>
            <svg height="250" width="500">
            
  <polygon points="220,30 250,210 170,248 120, 245,10 180, 80 60" stroke="purple" fill="none" strokeWidth={1} className="polymorphFill"/>
</svg>
</motion.div>
<Text fontSize={"xx-large"} marginRight={9} position={"static"} marginTop={-120} marginLeft={100}>Home</Text>
            
        </div>
        <HStack spacing={200}>
        <div className="about">
        <motion.div whileHover={{ rotate: -33, transformOrigin:"170px 170px", transition: { duration: 0.7 } }}>
            <svg height="250" width="500">
            
  <polygon points="210,30 280,150 190,245 100, 245,50 150, 130 20" stroke="purple" fill="none" strokeWidth={1} className="polymorphFill"/>
</svg>
</motion.div>
<Text fontSize={"xx-large"} marginRight={9} position={"static"} marginTop={-120} marginLeft={90}>About Us</Text>
            
        </div>
        <div className="services">
        <motion.div whileHover={{ rotate: -33, transformOrigin:"170px 170px", transition: { duration: 0.7 } }}>
            <svg height="250" width="500">
            
  <polygon points="250,30 240,210 170,245 110, 245,20 160, 80 60" stroke="purple" fill="none" strokeWidth={1} className="polymorphFill"/>
</svg>
</motion.div>
<Text fontSize={"xx-large"} position={"static"} marginTop={-120} marginLeft={80}>Services</Text>
</div>
        
        </HStack>
        <div className="contact">
        <motion.div whileHover={{ rotate: 33, transformOrigin:"150px 150px", transition: { duration: 0.9 } }}>
            <svg height="250" width="500">
            
  <polygon points="210,30 290,150 270,248 120, 245,10 180, 80 10" stroke="purple" fill="none" strokeWidth={1} className="polymorphFill"/>
</svg>
</motion.div>
<Text fontSize={"xx-large"} marginRight={9} position={"static"} marginTop={-120} marginLeft={80}>Contact Us</Text>
            
        </div>
        </>
    );
};

export default HomePage;

