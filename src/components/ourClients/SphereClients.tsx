import React, { useEffect, useRef } from 'react';
import {
  useGLTF,
  useAnimations,
  Html,
  OrthographicCamera,
} from '@react-three/drei';
import { SpeechBubble } from '@/app/components/ui/SpeechBubble/SpeechBubble';
import { useMediaQuery } from '@mui/material';
import * as THREE from 'three';

export const SphereClients = ({
  handleSetTestimonialSelected,
  isAnimation,
}: {
  handleSetTestimonialSelected: (testimonial: string) => void;
  isAnimation: boolean;
}) => {
  const groupRef = useRef<THREE.Group>(null as unknown as THREE.Group);
  const { nodes, animations } = useGLTF('/models/ssphere-set.glb');
  const { actions } = useAnimations(animations, groupRef);
  const isMobile = useMediaQuery('(max-width: 990px)');

  const handleAnimation = (play: boolean) => {
    Object.keys(actions).forEach((actionName) => {
      const action = actions[actionName];
      if (!action) return;
      action.timeScale = 0.3; // Reduce la velocidad al 50%

      if (play) {
        action.play();
        action.paused = false;
      } else {
        action.paused = true;
      }
    });
  };

  useEffect(() => {
    if (isAnimation) {
      handleAnimation(true);
    } else {
      handleAnimation(false);
    }
  }, [isAnimation]);

  return (
    <group ref={groupRef} dispose={null}>
      <group name="Scene">
        <OrthographicCamera
          name="Camera"
          makeDefault
          zoom={isMobile ? 150 : 350}
          position={[-6.987, 1.727, 0.024]}
          rotation={[-1.558, -1.325, -1.558]}
        />
        <mesh
          name="sphere"
          castShadow
          receiveShadow
          geometry={(nodes.sphere as THREE.Mesh).geometry}
          material={(nodes.sphere as THREE.Mesh).material}
          position={[0, 0.727, 0]}
          scale={0.687}
        >
          <group
            name="Plane001"
            position={[1.235, -0.415, -0.357]}
            rotation={[-Math.PI, -0.034, -1.321]}
            scale={[0.092, 0.075, 0.228]}
          >
            <Html scale={1} zIndexRange={[0, 10]}>
              <SpeechBubble
                name={'Mario Veliz'}
                rate={4.8}
                photoUrl={'/testimonials/marioVeliz.png'}
                handleClick={handleSetTestimonialSelected}
              />
            </Html>
          </group>
          <group
            name="Plane003"
            position={[0.45, -1.019, -1.266]}
            rotation={[1.53, -0.317, 1.44]}
            scale={[0.242, 0.242, 0.11]}
          >
            <Html scale={1} zIndexRange={[0, 10]}>
              <SpeechBubble
                name={'Juan Sanchez'}
                rate={4.8}
                photoUrl={'/testimonials/juanSanchez.png'}
                handleClick={handleSetTestimonialSelected}
              />
            </Html>
          </group>
          <group
            name="Plane004"
            position={[0.435, -1.813, 0.987]}
            rotation={[1.609, -0.387, 1.671]}
            scale={[0.242, 0.242, 0.11]}
          >
            <Html scale={1} position={[0, 0, 2]} zIndexRange={[0, 10]}>
              <SpeechBubble
                name={'Esteban Ibarra'}
                rate={4.8}
                photoUrl={'/testimonials/estebanIbarra.png'}
                handleClick={handleSetTestimonialSelected}
              />
            </Html>
          </group>
          <group
            name="Plane007"
            position={[0.351, -0.114, 1.327]}
            rotation={[1.602, -0.24, 1.701]}
            scale={[0.242, 0.242, 0.11]}
          >
            <Html scale={1} zIndexRange={[0, 10]}>
              <SpeechBubble
                name={'Mario Veliz'}
                rate={4.8}
                photoUrl={'/testimonials/marioVeliz.png'}
                handleClick={handleSetTestimonialSelected}
              />
            </Html>
          </group>
          <group
            name="Plane008"
            position={[-1.102, -0.446, -0.299]}
            rotation={[1.559, -0.316, 1.532]}
            scale={[0.242, 0.242, 0.11]}
          >
            <Html scale={1} zIndexRange={[0, 10]}>
              <SpeechBubble
                name={'Juan Sanchez'}
                rate={4.8}
                photoUrl={'/testimonials/juanSanchez.png'}
                handleClick={handleSetTestimonialSelected}
              />
            </Html>
          </group>
        </mesh>
        <mesh
          name="sphere001"
          castShadow
          receiveShadow
          geometry={(nodes.sphere001 as THREE.Mesh).geometry}
          material={(nodes.sphere001 as THREE.Mesh).material}
          position={[0, 0.727, 0]}
          scale={0.709}
        />
        <mesh
          name="sphere002"
          castShadow
          receiveShadow
          geometry={(nodes.sphere002 as THREE.Mesh).geometry}
          material={(nodes.sphere002 as THREE.Mesh).material}
          position={[0, 0.727, 0]}
          scale={0.687}
        />
        <mesh
          name="sphere003"
          castShadow
          receiveShadow
          geometry={(nodes.sphere003 as THREE.Mesh).geometry}
          material={(nodes.sphere003 as THREE.Mesh).material}
          position={[0, 0.727, 0]}
          scale={0.687}
        />
        <mesh
          name="sphere004"
          castShadow
          receiveShadow
          geometry={(nodes.sphere004 as THREE.Mesh).geometry}
          material={(nodes.sphere004 as THREE.Mesh).material}
          position={[0, 0.727, 0]}
          scale={0.687}
        />
        <mesh
          name="sphere005"
          castShadow
          receiveShadow
          geometry={(nodes.sphere005 as THREE.Mesh).geometry}
          material={(nodes.sphere005 as THREE.Mesh).material}
          position={[0, 0.727, 0]}
          scale={0.687}
        />
        <mesh
          name="sphere006"
          castShadow
          receiveShadow
          geometry={(nodes.sphere006 as THREE.Mesh).geometry}
          material={(nodes.sphere006 as THREE.Mesh).material}
          position={[0, 0.727, 0]}
          scale={0.693}
        />
        <mesh
          name="sphere007"
          castShadow
          receiveShadow
          geometry={(nodes.sphere007 as THREE.Mesh).geometry}
          material={(nodes.sphere007 as THREE.Mesh).material}
          position={[0, 0.727, 0]}
          scale={0.683}
        />
      </group>
    </group>
  );
};
