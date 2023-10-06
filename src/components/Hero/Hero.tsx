"use client";

import TestBox from "./TestBox";
import { Canvas } from "@react-three/fiber";

export default function Hero() {
	return (
		<div className="w-screen h-screen">
			<Canvas>
				<perspectiveCamera fov={90} near={0.1} far={10} position={[0, 0, 5]} />
				<ambientLight intensity={0.5} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
				<pointLight position={[-10, -10, -10]} />
				<TestBox position={[-1.2, 0, 0]} />
				<TestBox position={[1.2, 0, 0]} />
			</Canvas>
		</div>
	);
}
