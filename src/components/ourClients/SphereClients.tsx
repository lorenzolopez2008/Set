import React, { useEffect, useRef } from 'react';
import {
  useGLTF,
  useAnimations,
  Html,
  PerspectiveCamera,
  OrthographicCamera,
} from '@react-three/drei';
import * as THREE from 'three';
import { SpeechBubble } from '@/app/components/ui/SpeechBubble/SpeechBubble';

export const SphereClients = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/ssphere-set.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions);
    Object.keys(actions).forEach((actionName) => {
      const action = actions[actionName];
      action.timeScale = 0.3; // Reduce la velocidad al 50%
      action.play();
    });
  }, []);

  const newMaterial = new THREE.MeshBasicMaterial({ color: '#999' });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        {/* <PerspectiveCamera */}
        {/*   name="Camera" */}
        {/*   makeDefault={true} */}
        {/*   far={1000} */}
        {/*   near={0.1} */}
        {/*   fov={22.895} */}
        {/*   position={[-6.786, 2.394, 0.018]} */}
        {/*   rotation={[-1.562, -1.234, -1.561]} */}
        {/* /> */}
        <OrthographicCamera
          name="Camera"
          makeDefault
          zoom={200}
          position={[-6.987, 1.727, 0.024]}
          rotation={[-1.558, -1.325, -1.558]}
        />
        <mesh
          name="sphere"
          castShadow
          receiveShadow
          geometry={nodes.sphere.geometry}
          material={nodes.sphere.material}
          position={[0, 0.727, 0]}
          scale={0.687}
        >
          <group
            name="Plane001"
            position={[1.235, -0.415, -0.357]}
            rotation={[-Math.PI, -0.034, -1.321]}
            scale={[0.092, 0.075, 0.228]}
          >
            <mesh
              name="Plane001_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_1.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Plane001_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_2.geometry}
              material={materials['Material.002']}
            />
          </group>
          <group
            name="Plane003"
            position={[0.45, -1.019, -1.266]}
            rotation={[1.53, -0.317, 1.44]}
            scale={[0.242, 0.242, 0.11]}
          >
            <mesh
              name="Plane003_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane003_1.geometry}
              material={materials['Material.003']}
            />
            <mesh
              name="Plane003_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane003_2.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group
            name="Plane004"
            position={[0.435, -1.813, 0.987]}
            rotation={[1.609, -0.387, 1.671]}
            scale={[0.242, 0.242, 0.11]}
          >
            <mesh
              name="Plane004_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_1.geometry}
              material={materials['Material.006']}
            />
            <mesh
              name="Plane004_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_2.geometry}
              material={materials['Material.005']}
            />
          </group>
          <group
            name="Plane007"
            position={[0.351, -0.114, 1.327]}
            rotation={[1.602, -0.24, 1.701]}
            scale={[0.242, 0.242, 0.11]}
          >
            <mesh
              name="Plane007_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane007_1.geometry}
              material={materials['Material.007']}
            />
            <mesh
              name="Plane007_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane007_2.geometry}
              material={materials['Material.008']}
            />
          </group>
          <group
            name="Plane008"
            position={[-1.102, -0.446, -0.299]}
            rotation={[1.559, -0.316, 1.532]}
            scale={[0.242, 0.242, 0.11]}
          >
            <mesh
              name="Plane008_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane008_1.geometry}
              material={materials['Material.010']}
            />
            <mesh
              name="Plane008_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane008_2.geometry}
              material={materials['Material.009']}
            />
          </group>
        </mesh>
        <mesh
          name="sphere001"
          castShadow
          receiveShadow
          geometry={nodes.sphere001.geometry}
          material={nodes.sphere001.material}
          position={[0, 0.727, 0]}
          scale={0.709}
        />
        <mesh
          name="sphere002"
          castShadow
          receiveShadow
          geometry={nodes.sphere002.geometry}
          material={nodes.sphere002.material}
          position={[0, 0.727, 0]}
          scale={0.687}
        />
        <mesh
          name="sphere003"
          castShadow
          receiveShadow
          geometry={nodes.sphere003.geometry}
          material={nodes.sphere003.material}
          position={[0, 0.727, 0]}
          scale={0.687}
        />
        <mesh
          name="sphere004"
          castShadow
          receiveShadow
          geometry={nodes.sphere004.geometry}
          material={nodes.sphere004.material}
          position={[0, 0.727, 0]}
          scale={0.687}
        />
        <mesh
          name="sphere005"
          castShadow
          receiveShadow
          geometry={nodes.sphere005.geometry}
          material={nodes.sphere005.material}
          position={[0, 0.727, 0]}
          scale={0.687}
        />
        <mesh
          name="sphere006"
          castShadow
          receiveShadow
          geometry={nodes.sphere006.geometry}
          material={nodes.sphere006.material}
          position={[0, 0.727, 0]}
          scale={0.693}
        />
        <mesh
          name="sphere007"
          castShadow
          receiveShadow
          geometry={nodes.sphere007.geometry}
          material={nodes.sphere007.material}
          position={[0, 0.727, 0]}
          scale={0.683}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/sphere-set-testimonials2.glb');
