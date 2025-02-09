import { NavigationLink } from "../_types/navigation.type"

import { NavigationItem } from "./navigation-item"

type Props = {
	items: NavigationLink[]
}

export function NavigationFlatItem({ items }: Props) {
	return (
		<>
			{items.map((item) => (
				<NavigationItem key={item.id || item.href} data={item} />
			))}
		</>
	)
}
