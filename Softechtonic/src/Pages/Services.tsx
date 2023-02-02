import { motion } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";

const Services = () => {
    
    return(
        <>
         <div className="ServicesPage">
            
         <motion.div whileHover={{ rotate: 33, transformOrigin:"110px 110px", transition: { duration: 0.9 } }}>
          <svg height="400" width="600">
            
          <polygon points="210,30 290,150 270,248 120, 245,10 180, 80 10" stroke="purple" fill="none" strokeWidth={1} className="polymorphFill" style={{
                transform:"rotate(-60deg)",
                transformOrigin:"140px 130px"
            }} />
            
            <polygon points="210,30 290,150 270,248 120, 245,10 180, 80 10" stroke="purple" fill="none" strokeWidth={1} style={{
                transform:"rotate(-30deg)",
                transformOrigin:"140px 130px"
            }} />
            <polygon points="210,30 290,150 270,248 120, 245,10 180, 80 10" stroke="purple" fill="none" strokeWidth={1} style={{
                transform:"rotate(30deg)",
                transformOrigin:"130px 130px"
            }} />
            
          </svg>
        </motion.div>
        <Box marginTop={-410}><svg height={"250"}>
            <polygon points="210,30 290,150 270,248 120, 245,10 180, 80 10" stroke="purple" fill="white" strokeWidth={1} style={{
                transform: "scale(0.75)",
                transformOrigin:"130px 130px"
            }} />
            </svg>
            </Box>
        <Text fontSize={"xx-large"} textColor="black" position={"static"} marginTop={-130} marginLeft={90}>Services</Text>
        
        </div>
        </>
    );
};

export default Services;