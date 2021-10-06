import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Typography, Grid } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";

const System = (props) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const lineGeomety = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-0.8, props.y, 0),
    new THREE.Vector3(0.8, props.y, 0),
  ]);

  useFrame(({ clock }) => {
    const timer = clock.elapsedTime;
    const x_angle = Math.sin(timer) / 4;
    const y_angle = 
      // timer - props.id * 0.3;
      Math.sin(timer - props.id * 0.125) * 3.3 + Math.sin(timer) / 3;
    const scale_1 =
      (Math.sin(timer - props.id * 0.125) / 2 + 0.5) * 0.03 + 0.03;
    const scale_2 =
      (Math.sin(-timer + props.id * 0.125) / 2 + 0.5) * 0.03 + 0.03;
    ref2.current.rotation.z = x_angle;
    ref2.current.rotation.y = y_angle;
    ref1.current.scale.set(scale_1, scale_1, scale_1);
    ref3.current.scale.set(scale_2, scale_2, scale_2);
  });

  return (
    <line geometry={lineGeomety} ref={ref2}>
      <lineBasicMaterial color="white" />
      <mesh
        scale={0.06}
        position={[props.x - 0.8, props.y, props.z]}
        ref={ref1}
      >
        <sphereGeometry />
        <meshBasicMaterial color="white" />
      </mesh>
      <mesh
        scale={0.06}
        position={[props.x + 0.8, props.y, props.z]}
        ref={ref3}
      >
        <sphereGeometry />
        <meshBasicMaterial color="white" />
      </mesh>
    </line>
  );
};

const Loader = (props) => {
  let particles = [
    <System x={0} y={1.6} z={0} key={6} id={1} />,
    <System x={0} y={1.4} z={0} key={7} id={2} />,
    <System x={0} y={1.2} z={0} key={8} id={3} />,
    <System x={0} y={1.0} z={0} key={9} id={4} />,
    <System x={0} y={0.8} z={0} key={10} id={5} />,
    <System x={0} y={0.6} z={0} key={11} id={6} />,
    <System x={0} y={0.4} z={0} key={12} id={7} />,
    <System x={0} y={0.2} z={0} key={13} id={8} />,
    <System x={0} y={0} z={0} key={14} id={9} />,
    <System x={0} y={-0.2} z={0} key={15} id={10} />,
    <System x={0} y={-0.4} z={0} key={16} id={11} />,
    <System x={0} y={-0.6} z={0} key={17} id={12} />,
    <System x={0} y={-0.8} z={0} key={18} id={13} />,
    <System x={0} y={-1.0} z={0} key={19} id={14} />,
    <System x={0} y={-1.2} z={0} key={20} id={15} />,
    <System x={0} y={-1.4} z={0} key={21} id={16} />,
    <System x={0} y={-1.6} z={0} key={22} id={17} />,
  ];
  const val = useSelector((state) => state.loading.load);

  return (
    <CSSTransition
      in={val}
      timeout={1000}
      classNames="loader"
      unmountOnExit
    >
      <div
        className="custom-loader"
        style={{
          height: props.height,
          width: props.width,
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          style={{ height: "100%", width: "100%" }}
        >
          <Grid
            container
            item
            xs={2}
            justifyContent="center"
            alignItems="flex-end"
          >
            <Typography
              variant="h3"
              style={{ color: "white", fontFamily: "Montserrat, sans serif" }}
            >
              Loading
            </Typography>
          </Grid>
          <Grid item xs={10} style={{width: "100%"}}>
            <Canvas camera={{ position: [3, 0.75, 3] }} style={{ height: "100%", width: "100%" }}>
              <ambientLight intensity={0.1} />
              <directionalLight position={[0, 0, 5]} />
              {particles.map((particle) => {
                return particle;
              })}
            </Canvas>
          </Grid>
        </Grid>
      </div>
    </CSSTransition>
  );
};

export default Loader;
