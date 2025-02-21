import { getNavigationData } from "@/shared/api/settings.api"

import { NavigationDropdownItem } from "./navigation-dropdown-item"
import { NavigationFlatItem } from "./navigation-flat-item"
import { NavigationItem } from "./navigation-item"

type Props = {
	useDropdown?: boolean
}
export async function NavigationMenu({ useDropdown = true }: Props) {
	const data = await getNavigationData()

	return (
		<nav className="flex h-full flex-col gap-6 text-lg font-medium lg:h-auto lg:flex-row lg:text-base">
			{data?.map((item) =>
				item.children?.length ? (
					<div className="flex flex-col gap-6" key={item.href}>
						{useDropdown ? (
							<NavigationDropdownItem data={item} />
						) : (
							<NavigationFlatItem items={item.children} />
						)}
					</div>
				) : (
					<NavigationItem key={item.id || item.href} data={item} />
				)
			)}
		</nav>
	)
}
