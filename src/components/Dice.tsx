/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 Dice.glb -o Dice.tsx -r public -k 
*/
import {
  RigidBody,
  RapierRigidBody,
  interactionGroups,
  vec3,
  euler,
} from "@react-three/rapier";
import { Group, Mesh, MeshStandardMaterial, Object3D } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    origin: Mesh;
    Dice_cell: Mesh;
    Dice_cell001: Mesh;
    Dice_cell002: Mesh;
    Dice_cell003: Mesh;
    Dice_cell004: Mesh;
    Dice_cell005: Mesh;
    Dice_cell006: Mesh;
    Dice_cell007: Mesh;
    Dice_cell008: Mesh;
    Dice_cell009: Mesh;
    Dice_cell010: Mesh;
    Dice_cell011: Mesh;
    Dice_cell012: Mesh;
    Dice_cell013: Mesh;
    Dice_cell014: Mesh;
    Dice_cell015: Mesh;
    Dice_cell016: Mesh;
    Dice_cell017: Mesh;
    Dice_cell018: Mesh;
    Dice_cell019: Mesh;
    Dice_cell020: Mesh;
    Dice_cell021: Mesh;
    Dice_cell022: Mesh;
    Dice_cell023: Mesh;
  };
  materials: {
    Dice: MeshStandardMaterial;
  };
};

export function Dice() {
  const { nodes, materials } = useGLTF("/models/dice.glb") as GLTFResult;
  const originGroup = useRef<Group>(null);
  const group = useRef<Group>(null);

  const origin = useRef<RapierRigidBody>(null);
  const Dice_cell = useRef<RapierRigidBody>(null);
  const Dice_cell001 = useRef<RapierRigidBody>(null);
  const Dice_cell002 = useRef<RapierRigidBody>(null);
  const Dice_cell003 = useRef<RapierRigidBody>(null);
  const Dice_cell004 = useRef<RapierRigidBody>(null);
  const Dice_cell005 = useRef<RapierRigidBody>(null);
  const Dice_cell006 = useRef<RapierRigidBody>(null);
  const Dice_cell007 = useRef<RapierRigidBody>(null);
  const Dice_cell008 = useRef<RapierRigidBody>(null);
  const Dice_cell009 = useRef<RapierRigidBody>(null);
  const Dice_cell010 = useRef<RapierRigidBody>(null);
  const Dice_cell011 = useRef<RapierRigidBody>(null);
  const Dice_cell012 = useRef<RapierRigidBody>(null);
  const Dice_cell013 = useRef<RapierRigidBody>(null);
  const Dice_cell014 = useRef<RapierRigidBody>(null);
  const Dice_cell015 = useRef<RapierRigidBody>(null);
  const Dice_cell016 = useRef<RapierRigidBody>(null);
  const Dice_cell017 = useRef<RapierRigidBody>(null);
  const Dice_cell018 = useRef<RapierRigidBody>(null);
  const Dice_cell019 = useRef<RapierRigidBody>(null);
  const Dice_cell020 = useRef<RapierRigidBody>(null);
  const Dice_cell021 = useRef<RapierRigidBody>(null);
  const Dice_cell022 = useRef<RapierRigidBody>(null);
  const Dice_cell023 = useRef<RapierRigidBody>(null);

  const [exploding, setExploding] = useState(false);
  const [exploded, setExploded] = useState(false);

  useFrame((_, delta) => {
    if (origin.current && group.current && !exploding) {
      const position = vec3(origin.current.translation());
      origin.current.applyImpulse(vec3({ x: 0, y: 0.2, z: 0 }), true);
      group.current.position.x = position.x;
      group.current.position.z = position.z;
    }
    if (exploding && !exploded && group.current) {
      group.current.children.forEach((body) => {
        body.scale.x -= 0.1 * delta;
        body.scale.y -= 0.1 * delta;
        body.scale.z -= 0.1 * delta;
        if (body.scale.x <= 0.1 && body.scale.y <= 0.1 && body.scale.z <= 0.1) {
          removeObject(body);
          setExploded(true);
        }
      });
    }
  });

  function removeObject(object: Object3D) {
    while (object.children.length > 0) {
      object.remove(object.children[0]);
    }
  }

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <group ref={originGroup}>
      <RigidBody
        type={exploding ? "fixed" : "dynamic"}
        name="origin"
        ref={origin}
        collisionGroups={interactionGroups(0, [0])}
        position={[
          randomNumber(-5, 5),
          randomNumber(12, 15),
          randomNumber(-5, 5),
        ]}
        rotation={euler({
          x: randomNumber(-45, 45),
          y: randomNumber(-45, 45),
          z: randomNumber(-45, 45),
        })}
      >
        <mesh
          name="origin"
          geometry={nodes.origin.geometry}
          material={materials.Dice}
          onPointerOver={() => (document.body.style.cursor = "grab")}
          onPointerOut={() => (document.body.style.cursor = "")}
          onClick={() => setExploding(true)}
          visible={!exploding}
        />
      </RigidBody>
      <group ref={group} visible={exploding}>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell"
          ref={Dice_cell}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell"
            geometry={nodes.Dice_cell.geometry}
            material={materials.Dice}
            position={[0.592, 0.592, -0.896]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell001"
          ref={Dice_cell001}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell001"
            geometry={nodes.Dice_cell001.geometry}
            material={materials.Dice}
            position={[0.592, 0.896, -0.592]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell002"
          ref={Dice_cell002}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell002"
            geometry={nodes.Dice_cell002.geometry}
            material={materials.Dice}
            position={[0.896, 0.592, -0.592]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell003"
          ref={Dice_cell003}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell003"
            geometry={nodes.Dice_cell003.geometry}
            material={materials.Dice}
            position={[0.592, -0.896, -0.592]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell004"
          ref={Dice_cell004}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell004"
            geometry={nodes.Dice_cell004.geometry}
            material={materials.Dice}
            position={[0.592, -0.593, -0.896]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell005"
          ref={Dice_cell005}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell005"
            geometry={nodes.Dice_cell005.geometry}
            material={materials.Dice}
            position={[0.896, -0.593, -0.592]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell006"
          ref={Dice_cell006}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell006"
            geometry={nodes.Dice_cell006.geometry}
            material={materials.Dice}
            position={[0.896, 0.592, 0.593]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell007"
          ref={Dice_cell007}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell007"
            geometry={nodes.Dice_cell007.geometry}
            material={materials.Dice}
            position={[0.592, 0.896, 0.592]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell008"
          ref={Dice_cell008}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell008"
            geometry={nodes.Dice_cell008.geometry}
            material={materials.Dice}
            position={[0.592, 0.592, 0.896]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell009"
          ref={Dice_cell009}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell009"
            geometry={nodes.Dice_cell009.geometry}
            material={materials.Dice}
            position={[0.896, -0.592, 0.592]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell010"
          ref={Dice_cell010}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell010"
            geometry={nodes.Dice_cell010.geometry}
            material={materials.Dice}
            position={[0.592, -0.593, 0.896]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell011"
          ref={Dice_cell011}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell011"
            geometry={nodes.Dice_cell011.geometry}
            material={materials.Dice}
            position={[0.592, -0.896, 0.592]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell012"
          ref={Dice_cell012}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell012"
            geometry={nodes.Dice_cell012.geometry}
            material={materials.Dice}
            position={[-0.592, 0.592, -0.896]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell013"
          ref={Dice_cell013}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell013"
            geometry={nodes.Dice_cell013.geometry}
            material={materials.Dice}
            position={[-0.896, 0.592, -0.593]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell014"
          ref={Dice_cell014}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell014"
            geometry={nodes.Dice_cell014.geometry}
            material={materials.Dice}
            position={[-0.593, 0.896, -0.592]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell015"
          ref={Dice_cell015}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell015"
            geometry={nodes.Dice_cell015.geometry}
            material={materials.Dice}
            position={[-0.896, -0.592, -0.592]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell016"
          ref={Dice_cell016}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell016"
            geometry={nodes.Dice_cell016.geometry}
            material={materials.Dice}
            position={[-0.593, -0.592, -0.896]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell017"
          ref={Dice_cell017}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell017"
            geometry={nodes.Dice_cell017.geometry}
            material={materials.Dice}
            position={[-0.592, -0.896, -0.592]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell018"
          ref={Dice_cell018}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell018"
            geometry={nodes.Dice_cell018.geometry}
            material={materials.Dice}
            position={[-0.896, 0.592, 0.592]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell019"
          ref={Dice_cell019}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell019"
            geometry={nodes.Dice_cell019.geometry}
            material={materials.Dice}
            position={[-0.593, 0.592, 0.896]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell020"
          ref={Dice_cell020}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell020"
            geometry={nodes.Dice_cell020.geometry}
            material={materials.Dice}
            position={[-0.593, 0.896, 0.592]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell021"
          ref={Dice_cell021}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell021"
            geometry={nodes.Dice_cell021.geometry}
            material={materials.Dice}
            position={[-0.592, -0.896, 0.592]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell022"
          ref={Dice_cell022}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell022"
            geometry={nodes.Dice_cell022.geometry}
            material={materials.Dice}
            position={[-0.593, -0.593, 0.896]}
          />
        </RigidBody>
        <RigidBody
          type={exploding ? "dynamic" : "fixed"}
          name="Dice_cell023"
          ref={Dice_cell023}
          collisionGroups={interactionGroups(1, [1])}
          mass={20}
        >
          <mesh
            name="Dice_cell023"
            geometry={nodes.Dice_cell023.geometry}
            material={materials.Dice}
            position={[-0.896, -0.592, 0.592]}
          />
        </RigidBody>
      </group>
    </group>
  );
}

useGLTF.preload("/../Dice.glb");
