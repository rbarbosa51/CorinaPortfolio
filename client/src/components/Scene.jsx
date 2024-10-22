import { useRef, useEffect } from "react";
import { useAtom } from "jotai";
import { storeCameraState, cameraPosition } from "../store";
import { CameraControls } from "@react-three/drei";
// import {useControls, button} from 'leva'
import Room from "./Room";
import Lights from "./Lights";
import Corina from "./Corina";

export default function Scene() {
  const [cameraState, setCameraState] = useAtom(storeCameraState);
  const cameraControls = useRef();

  // useControls('helper', {
  //     getLootAt: button(() => {
  //       const position = cameraControls.current.getPosition()
  //       const target = cameraControls.current.getTarget()
  //       console.log([...position, ...target])
  //     }),
  //     toJSON: button(() => {
  //       const json = cameraControls.current.toJSON()
  //       console.log(json)
  //     })
  //   })
  // useControls('Navigate', {
  //   start: button(() => {
  //       cameraControls.current.setLookAt(...cameraPosition.start, true)
  //   }),
  //   intro: button(() => {
  //       cameraControls.current.setLookAt(...cameraPosition.cell, true)
  //   }),
  //   skill: button(() => {
  //       cameraControls.current.setLookAt(...cameraPosition.skill, true)
  //   }),
  //   book: button(() => {
  //       cameraControls.current.setLookAt(...cameraPosition.book, true)
  //   }),
  //   os: button(() => {
  //       cameraControls.current.setLookAt(...cameraPosition.os, true)
  //   }),
  //   next: button(() => {
  //       //const length = Object.keys(cameraPosition).length
  //       setCameraState(prev => (
  //           prev === (Object.keys(cameraPosition).length - 1) ? 0 : prev + 1
  //       ))
  //   })
  // })
  useEffect(() => {
    switch (cameraState) {
      case 0:
        cameraControls.current.setLookAt(...cameraPosition.start, true);
        break;
      case 1:
        cameraControls.current.setLookAt(...cameraPosition.skill, true);
        break;
      case 2:
        cameraControls.current.setLookAt(...cameraPosition.book, true);
        break;
      case 3:
        cameraControls.current.setLookAt(...cameraPosition.os, true);
        break;
      case 4:
        cameraControls.current.setLookAt(...cameraPosition.cell, true);
        break;
    }
  }, [cameraState]);

  return (
    <>
      <CameraControls
        ref={cameraControls}
        smoothTime={2.0}
        mouseButtons={{ left: 0, right: 0, middle: 0, wheel: 0 }}
        touches={{ one: 0, two: 0, three: 0 }}
      />
      {/* <color attach={'background'} args={['#ffffff']} /> */}
      <Lights />
      <Room />
      <Corina position={[0, 0.25, 0.1]} />
    </>
  );
}
