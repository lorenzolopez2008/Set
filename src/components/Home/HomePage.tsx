'use client';
import { Observer } from 'gsap/dist/Observer';
import { useGSAP } from '@gsap/react';
import { Box } from '@mui/material';
import createTimeline from './timelines/homeTimeline';
import gsap from 'gsap';
import { TextWithHighlight } from './homeComponents/TextWithHighlight';
import { Machine } from './homeComponents/Machine';

import { useVisibility } from '@/providers/Testing';
import OurClientsCard from '../ourClients/OurClientsCard';
import { OurClients } from '../ourClients/OurClients';

gsap.registerPlugin(Observer);

export default function HomePage() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    let animating = false;

    function tweenToLabel(direction: string, timeline: GSAPTimeline) {
      animating = true;
      timeline.tweenTo(direction, {
        onComplete: () => {
          animating = false;
        },
      });
    }

    mm.add(
      { isDesktop: '(min-width:500px)', isMobile: '(max-width:499px)' },
      (context) => {
        const conditions = context.conditions;
        if (conditions?.isDesktop) {
          const tl = createTimeline({
            paused: true,
            defaults: { duration: 1 },
          });
          Observer.create({
            type: 'wheel',
            wheelSpeed: -1,
            onDown: () => !animating && tweenToLabel(tl.previousLabel(), tl),
            onUp: () => !animating && tweenToLabel(tl.nextLabel(), tl),
            tolerance: 50,
            preventDefault: true,
          });
        }
      }
    );
  });
  const { isVisible } = useVisibility('HomePage');
  if (!isVisible) return null;
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
      }}
    >
      <TextWithHighlight />
      <Machine />
    </Box>
  );
}
