import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

export const SphereClients = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    '/models/sphere-set-testimonials2.glb'
  );
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
        <mesh
          name="sphere"
          castShadow
          receiveShadow
          geometry={nodes.sphere.geometry}
          material={newMaterial}
          position={[0, 0.727, 0]}
          scale={0.687}
        >
          <group
            name="Plane001"
            position={[1.235, -0.415, -0.357]}
            rotation={[0, -0.06, 1.669]}
            scale={[0.092, 0.075, 0.228]}
          >
            <mesh
              name="Plane001_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_1.geometry}
              material={materials['Material.001']}
              scale={1.6}
            />
            <mesh
              name="Plane001_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_2.geometry}
              material={materials['Material.002']}
              scale={1.6}
            />
          </group>
          <group
            name="Plane003"
            position={[0.45, -1.019, -1.266]}
            rotation={[1.547, 0.152, -1.416]}
            scale={[0.242, 0.242, 0.11]}
          >
            <mesh
              name="Plane003_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane003_1.geometry}
              material={materials['Material.003']}
              scale={1.6}
            />
            <mesh
              name="Plane003_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane003_2.geometry}
              material={materials['Material.004']}
              scale={1.6}
            />
          </group>
          <group
            name="Plane004"
            position={[0.435, -1.813, 0.987]}
            rotation={[1.593, 0.236, -1.665]}
            scale={[0.242, 0.242, 0.11]}
          >
            <mesh
              name="Plane004_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_1.geometry}
              material={materials['Material.006']}
              scale={1.6}
            />
            <mesh
              name="Plane004_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_2.geometry}
              material={materials['Material.005']}
              scale={1.6}
            />
          </group>
          <group
            name="Plane007"
            position={[0.351, -0.114, 1.327]}
            rotation={[1.578, 0.056, -1.698]}
            scale={[0.242, 0.242, 0.11]}
          >
            <mesh
              name="Plane007_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane007_1.geometry}
              material={materials['Material.007']}
              scale={1.6}
            />
            <mesh
              name="Plane007_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane007_2.geometry}
              material={materials['Material.008']}
              scale={1.6}
            />
          </group>
          <group
            name="Plane008"
            position={[-1.102, -0.446, -0.299]}
            rotation={[1.567, 0.08, -1.529]}
            scale={[0.242, 0.242, 0.11]}
          >
            <mesh
              name="Plane008_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane008_1.geometry}
              scale={1.6}
              material={materials['Material.010']}
            />
            <mesh
              name="Plane008_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane008_2.geometry}
              scale={1.6}
              material={materials['Material.009']}
            />
          </group>
        </mesh>
      </group>
    </group>
  );
};

useGLTF.preload('/sphere-set-testimonials2.glb');
