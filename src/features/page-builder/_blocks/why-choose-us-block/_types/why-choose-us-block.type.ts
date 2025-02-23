export type WhyChooseUsBlockData = {
	title: string
	description?: string
	items: ReasonData[]
}

export type ReasonData = {
	id: string
	name: string
	description: string
}
