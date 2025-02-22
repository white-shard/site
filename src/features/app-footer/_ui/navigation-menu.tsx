import { getNavigationData } from "@/shared/api/settings.api"

import { NavigationFlatItem } from "./navigation-flat-item"

export async function NavigationMenu() {
	const data = await getNavigationData()

	return data?.map((item) => (
		<div key={item.id} className="md:pl-8">
			<h3 className="mb-6 font-semibold tracking-wider uppercase md:text-lg">
				{item.label}
			</h3>
			<div className="flex flex-col gap-2" key={item.href}>
				<NavigationFlatItem items={item.children || []} />
			</div>
		</div>
	))
}
