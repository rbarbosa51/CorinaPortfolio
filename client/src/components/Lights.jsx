// import { useHelper } from "@react-three/drei"
import { useCursor } from "@react-three/drei";
import { useRef, useState } from "react";
// import {SpotLightHelper, PointLightHelper, DirectionalLightHelper} from 'three'
import { useAtom } from "jotai";
import { storeLightbulb1, storeLightbulb2 } from "../store";

export default function Lights() {
  const pointLight = useRef();
  const [lightbulb1, setLightbuld1] = useAtom(storeLightbulb1);
  const [lightbulb2, setLightbuld2] = useAtom(storeLightbulb2);
  const [lightHover, setLightHover] = useState(false);
  useCursor(lightHover);

  // useHelper(pointLight, PointLightHelper, 0.5, 'red')
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        intensity={3}
        position={[1.86, 5.85, 6.65]}
      />
      <directionalLight
        castShadow
        intensity={1}
        position={[-5.12, 10.23, -4.43]}
      />
      {/* Lamp 1 */}
      {lightbulb1 && (
        <pointLight
          position={[-1.54, 1.18, -0.5]}
          color={"pink"}
          intensity={1}
        />
      )}
      {/* Lamp 2 */}
      {lightbulb2 && (
        <pointLight position={[1, 1.55, 1]} color={"#FF5C00"} intensity={2} />
      )}
      {/* Book Light */}
      <pointLight position={[1.2, 2.35, -1.9]} color={"pink"} intensity={0.5} />
      {/* Cellphone Light */}
      <pointLight
        ref={pointLight}
        position={[-1.3, 1.18, 0.8]}
        intensity={0.9}
        color={"#1F51FF"}
      />
      <mesh
        visible={false}
        position={[0.85, 1.25, 1.2]}
        onClick={() => setLightbuld2(!lightbulb2)}
        onPointerOver={() => setLightHover(true)}
        onPointerOut={() => setLightHover(false)}
      >
        <boxGeometry args={[0.6, 0.67, 0.5]} />
        {/* <meshBasicMaterial wireframe  color={'red'}/> */}
      </mesh>
      <mesh
        visible={false}
        position={[-1.54, 1.06, -0.08]}
        onClick={() => setLightbuld1(!lightbulb1)}
        onPointerOver={() => setLightHover(true)}
        onPointerOut={() => setLightHover(false)}
      >
        <boxGeometry args={[0.5, 0.5, 0.35]} />
        {/* <meshBasicMaterial wireframe  color={'red'}/> */}
      </mesh>
    </>
  );
}
