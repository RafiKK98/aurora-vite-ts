import { ReactNode, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { Box, SxProps } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealOnScrollProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  start?: string;
  sx?: SxProps;
  animateOnScroll?: boolean;
}

const RevealOnScroll = ({
  children,
  duration = 0.8,
  delay = 0,
  start = 'top 80%',
  sx = {},
  animateOnScroll = true,
}: RevealOnScrollProps) => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const element = containerRef.current;
      if (!element) return;

      gsap.fromTo(
        element,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          ease: 'power3.out',
          delay,
          ...(animateOnScroll && {
            scrollTrigger: {
              trigger: element,
              start,
              once: true,
            },
          }),
        },
      );
    },
    {
      scope: containerRef,
    },
  );

  return (
    <Box ref={containerRef} sx={sx}>
      {children}
    </Box>
  );
};

export default RevealOnScroll;
