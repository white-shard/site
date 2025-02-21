export type NavigationLink = {
	id?: string | null
	label: string
	href: string
	children?: NavigationLink[] | null
}
