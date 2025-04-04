export type ServicesBlockData = {
	title: string
	description?: string
	services: ServiceData[]
}

export type ServiceData = {
	id: string
	name: string
	description: string
	cost: string
	link: {
		slug: string
	}
}
