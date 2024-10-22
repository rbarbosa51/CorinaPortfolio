import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGLTF, useCursor } from "@react-three/drei";
import { EffectComposer, Outline } from "@react-three/postprocessing";

export default function Room(props) {
  const { nodes, materials } = useGLTF("/models/Room2.glb");
  const portraitRef = useRef();
  const bookRef = useRef();
  const laptopRef = useRef();
  const cellRef = useRef();
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  useCursor(hover);

  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          name="floor"
          // castShadow
          receiveShadow
          geometry={nodes.floor.geometry}
          material={materials.floor}
        />
        <mesh
          name="furnature"
          castShadow
          receiveShadow
          geometry={nodes.furnature.geometry}
          material={materials.furnature}
        />
        <mesh
          ref={portraitRef}
          name="Portrait"
          castShadow
          receiveShadow
          geometry={nodes.Portrait.geometry}
          material={materials.portrait}
          onClick={() => navigate("/skills")}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        />
        <mesh
          ref={bookRef}
          name="Book2"
          castShadow
          receiveShadow
          geometry={nodes.Book2.geometry}
          material={materials.Book2}
          position={[1.494, 2.36, -2.15]}
          rotation={[0, -0.519, 0]}
          scale={0.334}
          onClick={() => navigate("/book")}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        />
        <mesh
          ref={laptopRef}
          name="laptop_1"
          castShadow
          receiveShadow
          geometry={nodes.laptop_1.geometry}
          material={materials["Material.011"]}
          onClick={() => navigate("/os")}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        />
        <mesh
          name="laptop_2"
          castShadow
          receiveShadow
          geometry={nodes.laptop_2.geometry}
          material={materials.Screen}
          onClick={() => navigate("/os")}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        />
        <mesh
          name="Cell_1"
          castShadow
          receiveShadow
          geometry={nodes.Cell_1.geometry}
          material={materials.CellScreen}
          onClick={() => navigate("/cell")}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        />
        <mesh
          ref={cellRef}
          name="Cell_2"
          castShadow
          receiveShadow
          geometry={nodes.Cell_2.geometry}
          material={materials.Black}
          onClick={() => navigate("/cell")}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        />
      </group>
      <EffectComposer autoClear={false}>
        <Outline
          selection={[cellRef, bookRef, laptopRef, portraitRef]}
          blur={true}
          visibleEdgeColor={"#ffffff"}
          edgeStrength={3}
          pulseSpeed={0.6}
        />
      </EffectComposer>
    </>
  );
}

useGLTF.preload("/models/Room2.glb");
