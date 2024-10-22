import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Corina(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/CorinaTyping3.glb");
  const { actions } = useAnimations(animations, group);
  // console.log(actions)
  useEffect(() => {
    actions["Typing"].reset().play().fadeIn(0.5);
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[0, 0, 0]}>
          <skinnedMesh
            name="corina"
            geometry={nodes.corina.geometry}
            material={materials.texture}
            skeleton={nodes.corina.skeleton}
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/CorinaTyping3.glb");
