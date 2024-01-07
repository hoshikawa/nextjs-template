import { useState } from "react";

type Props = {
	children: React.ReactNode;
};

export const ClientComponent = ({ children }: Props) => {
	const [count, setCount] = useState(0);
	return (
		<div style={{ backgroundColor: "lightgreen", padding: "10px" }}>
			{children}
			<button type="button" onClick={() => setCount(count + 1)}>
				count: {count}
			</button>
		</div>
	);
};
