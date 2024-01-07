type Props = {
	children: React.ReactNode;
};

export const ServerComponent = async ({ children }: Props) => {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const json = await response.json();
	return (
		<div style={{ backgroundColor: "pink", padding: "10px" }}>
			{children}
			<p>{json.title}</p>
		</div>
	);
};
