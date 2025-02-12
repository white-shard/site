export type PageData = {
	slug: string
	title: string
	description: string
	keywords: string[]
	blocks: PageBlock[]
}

export type PageBlock = {
	id: string
	blockType: string
	data: never
}
