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
  quat,
} from "@react-three/rapier";
import {
  Euler,
  Group,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  Vector3,
} from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { RadialSlider } from "./RadialSlider";

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

export function Dice({
  position,
  rotation,
  roll,
  setSelectedFace,
  setSelectedAction,
}: {
  position: Vector3;
  rotation: Euler;
  roll: boolean;
  setSelectedFace: (face: string) => void;
  setSelectedAction: (action: string) => void;
}) {
  const { nodes, materials } = useGLTF("/dice.glb") as GLTFResult;
  const originGroup = useRef<Group>(null);
  const piecesGroup = useRef<Group>(null);

  const origin = useRef<RapierRigidBody>(null);

  const [exploded, setExploded] = useState(false);
  const [pieces, setPieces] = useState<JSX.Element | null>(null);

  useFrame((_, delta) => {
    if (exploded && piecesGroup.current && originGroup.current) {
      originGroup.current.children.forEach((body) => {
        body.position.y -= 0.1 * delta;
        if (body.position.y <= 0.01) {
          removeObject(body);
        }
      });
    }

    if (roll && origin.current) {
      const randX = randomIntFromInterval(-3, 3);
      const randZ = randomIntFromInterval(-3, 3);
      origin.current.applyImpulse(new Vector3(randX, 5, randZ), true);
      origin.current.applyTorqueImpulse({ x: 3, y: 3, z: 3 }, true);
    }
  });

  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function removeObject(object: Object3D) {
    while (object.children.length > 0) {
      object.remove(object.children[0]);
    }
  }

  function getDiceDetails() {
    if (!origin.current) {
      return;
    }
    const rot = euler().setFromQuaternion(quat(origin.current.rotation()));
    const x = getNormalizedDegree(rot.x);
    const y = getNormalizedDegree(rot.y);
    const z = getNormalizedDegree(rot.z);
    const die = getFace({ x, y, z });
    if (!die) {
      return;
    }
    return die.face;
  }

  function getNormalizedDegree(rotationValue: number) {
    const rotValue = rotationValue / (Math.PI / 180);
    let normalizedDegree = 0;
    if (rotValue > 45 && rotValue < 135) {
      normalizedDegree = 90;
    } else if (rotValue < -45 && rotValue > -135) {
      normalizedDegree = -90;
    } else if (
      (rotValue > 135 && rotValue < 215) ||
      (rotValue < -135 && rotValue > -215)
    ) {
      normalizedDegree = 180;
    }
    return normalizedDegree;
  }

  function getFace(degree: { x: number; y: number; z: number }) {
    const rotationLibrary = [
      { x: 0, y: 0, z: 0, face: "bombs" },
      { x: 0, y: 90, z: 0, face: "bombs" },
      { x: 180, y: 0, z: 180, face: "bombs" },
      { x: 0, y: -90, z: 0, face: "bombs" },
      { x: 180, y: 90, z: 180, face: "bombs" },
      { x: 180, y: -90, z: 180, face: "bombs" },
      { x: -90, y: 0, z: 0, face: "heads" },
      { x: -90, y: 0, z: 90, face: "heads" },
      { x: -90, y: 0, z: 180, face: "heads" },
      { x: -90, y: 0, z: -90, face: "heads" },
      { x: 0, y: 90, z: 90, face: "lanterns" },
      { x: 0, y: 0, z: 90, face: "lanterns" },
      { x: 90, y: 90, z: 0, face: "lanterns" },
      { x: -90, y: -90, z: 0, face: "lanterns" },
      { x: 0, y: -90, z: 90, face: "lanterns" },
      { x: -180, y: -180, z: 90, face: "lanterns" },
      { x: -90, y: 90, z: 180, face: "lanterns" },
      { x: 180, y: 90, z: -90, face: "lanterns" },
      { x: 180, y: 0, z: -90, face: "lanterns" },
      { x: 180, y: -90, z: -90, face: "lanterns" },
      { x: 180, y: 90, z: 90, face: "beers" },
      { x: 180, y: -90, z: 90, face: "beers" },
      { x: 0, y: 0, z: -90, face: "beers" },
      { x: 0, y: -90, z: -90, face: "beers" },
      { x: 90, y: -90, z: 0, face: "beers" },
      { x: -90, y: 90, z: 0, face: "beers" },
      { x: 180, y: 0, z: 90, face: "beers" },
      { x: 0, y: 90, z: -90, face: "beers" },
      { x: 90, y: 0, z: 0, face: "horns" },
      { x: 90, y: 0, z: -90, face: "horns" },
      { x: 90, y: 0, z: 180, face: "horns" },
      { x: 90, y: 0, z: 90, face: "horns" },
      { x: 90, y: 90, z: 90, face: "horns" },
      { x: 0, y: 0, z: 180, face: "axes" },
      { x: 180, y: -90, z: 0, face: "axes" },
      { x: 180, y: 90, z: 0, face: "axes" },
      { x: 180, y: 0, z: 0, face: "axes" },
      { x: 0, y: 90, z: 180, face: "axes" },
      { x: 0, y: -90, z: 180, face: "axes" },
    ];
    return rotationLibrary.find(function (obj) {
      if (obj.x === degree.x && obj.y === degree.y && obj.z === degree.z) {
        return obj;
      }
    });
  }

  const [open, setOpen] = useState<boolean>(false);

  function handleClick() {
    if (exploded) {
      return;
    }
    const face = getDiceDetails();
    if (!face) {
      return;
    }
    setOpen(true);
    setSelectedFace(face);
  }

  function triggerAction(action: string) {
    setSelectedAction(action);
    if (action === "save") {
      console.log("save");
    }
    if (action === "spend") {
      if (!origin.current) {
        return;
      }
      const position = vec3(origin.current.translation());
      setPieces(<Pieces position={position} />);
      setExploded(true);
      setOpen(false);
    }
  }

  function updateFace() {
    const face = getDiceDetails();
    if (!face) {
      return;
    }
    setSelectedFace(face);
  }

  return (
    <group>
      <group position={position} rotation={rotation} ref={originGroup}>
        <RigidBody
          onSleep={() => updateFace()}
          type="dynamic"
          name="origin"
          ref={origin}
          collisionGroups={interactionGroups(0, [0])}
          mass={1000}
          friction={0.2}
          linearDamping={0.2}
        >
          <mesh
            onClick={handleClick}
            name="origin"
            geometry={nodes.origin.geometry}
            material={materials.Dice}
            visible={!exploded}
            onPointerOver={() => (document.body.style.cursor = "pointer")}
            onPointerOut={() => (document.body.style.cursor = "")}
          />
          <Html center>
            <div className="content">
              <RadialSlider
                open={open}
                trigger={(action) => triggerAction(action)}
              />
            </div>
          </Html>
        </RigidBody>
      </group>
      {pieces}
    </group>
  );
}

function Pieces({ position }: { position: Vector3 }) {
  const { nodes, materials } = useGLTF("/dice.glb") as GLTFResult;
  const piecesGroup = useRef<Group>(null);
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

  useFrame((_, delta) => {
    if (piecesGroup.current) {
      piecesGroup.current.children.forEach((body) => {
        body.position.y -= 0.1 * delta;
        body.scale.x -= 0.1 * delta;
        body.scale.y -= 0.1 * delta;
        body.scale.z -= 0.1 * delta;
        if (body.scale.x <= 0.1 && body.scale.y <= 0.1 && body.scale.z <= 0.1) {
          body.visible = false;
          removeObject(body);
        }
        piecesGroup.current?.remove();
      });
    }
  });

  function removeObject(object: Object3D) {
    while (object.children.length > 0) {
      object.remove(object.children[0]);
    }
  }

  return (
    <group position={position} ref={piecesGroup}>
      <RigidBody
        type="dynamic"
        name="Dice_cell"
        ref={Dice_cell}
        collisionGroups={interactionGroups(1, [1])}
        mass={100}
        friction={0.2}
      >
        <mesh
          name="Dice_cell"
          geometry={nodes.Dice_cell.geometry}
          material={materials.Dice}
          position={[0.592, 0.592, -0.896]}
        />
      </RigidBody>
      <RigidBody
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
        type="dynamic"
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
  );
}

useGLTF.preload("/../Dice.glb");
