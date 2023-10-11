import React from "react";
import * as THREE from "three";

interface StarProps {
	color: THREE.Color,
	position: TypedArray,
	radius?: number,
	segments?: number,
	thetaStart?: number,
	thetaLength?: number
}

const StarMesh = React.forwardRef<THREE.Mesh, StarProps>(({ color, position, radius, segments, thetaStart, thetaLength }, ref) => (
	<mesh ref={ref}>
		<circleGeometry args={[radius, segments, thetaStart, thetaLength]}>
			<bufferAttribute attach="attributes-position" args={[position, 3]} />
		</circleGeometry>

		<meshBasicMaterial color={color} />
	</mesh>
));

export const Star = React.forwardRef<THREE.Mesh, StarProps>(({ color, position, radius, segments, thetaStart, thetaLength}, ref) => {
	const [point, setPoint] = useState(new Float32Array(position));

});
