export interface NavigationLink {
	label: string
	href: string
	children?: NavigationLink[] | null
}
