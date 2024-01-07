import { ClientComponent } from "@repo/client";
import { ServerComponent } from "@repo/server";

export default function Page() {
	return (
		<>
			<ClientComponent>client component</ClientComponent>
			<ServerComponent>server component</ServerComponent>
			<ClientComponent>
				<ServerComponent>nested server component</ServerComponent>
			</ClientComponent>
			<ServerComponent>
				<ClientComponent>nested client component</ClientComponent>
			</ServerComponent>
		</>
	);
}
