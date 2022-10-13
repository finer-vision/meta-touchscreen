import React from "react";

export default function Lights() {
  return (
    <>
      {/*<Environment*/}
      {/*  background={false}*/}
      {/*  files="./assets/environment.hdr"*/}
      {/*  encoding={THREE.LinearEncoding}*/}
      {/*/>*/}
      <ambientLight />
      <spotLight position={[0, 10, 0]} intensity={50} />
      <spotLight position={[5, 0, 0]} intensity={150} />
      <spotLight position={[-5, 0, 0]} intensity={150} />
      <spotLight position={[0, 5, -30]} intensity={50} />
      <spotLight position={[0, 5, 30]} intensity={50} />
    </>
  );
}
