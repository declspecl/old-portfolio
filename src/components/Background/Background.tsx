"use client";

import * as THREE from "three";
import { useState } from "react";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { Canvas, Object3DNode, MaterialNode, extend } from "@react-three/fiber";
import { CatmullRomLine } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Star from "./Star";

// declare module "@react-three/fiber" {
// 	interface ThreeElements {
// 		meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>,
// 		meshLineMaterial: MaterialNode<MeshLineMaterial, typeof MeshLineMaterial>
// 	}
// }
// 
// extend({ MeshLineGeometry, MeshLineMaterial });

export default function Background() {
	return (
		<div className="fixed top-0 left-0 w-screen h-screen">
			<Canvas camera={{ position: [0, 0, 0] }}>
				<color attach="background" args={[0x16161B]} />

				<group>
					<Star color={0x2C2C37} position={[0, 0, 0]} radius={0.5} />
				</group>
			</Canvas>
		</div>
	);
}
