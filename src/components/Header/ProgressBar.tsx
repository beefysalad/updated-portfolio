import { Box } from '@chakra-ui/react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* <motion.div className='progress-bar' style={{ scaleX }} /> */}
      <Box
        as={motion.div}
        w='100%'
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          //   backgroundColor: 'rgba(0, 128, 128, 0.8)',
          //   backgroundImage:
          //     'linear-gradient(135deg, rgba(0, 128, 128, 0.8) 0%, rgba(0, 200, 200, 0.8) 100%)',

          background:
            'linear-gradient(90deg, rgba(5,140,66,1) 0%, rgba(100,255,218,1) 100%)',
          transformOrigin: '0%',
          scaleX,
        }}
      ></Box>
    </>
  );
};
