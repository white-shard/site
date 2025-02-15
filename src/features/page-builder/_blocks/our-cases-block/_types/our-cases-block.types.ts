import { Media } from "@/dashboard/payload-types"

export type OurCasesBlock = {
	title: string
	description: string
	count: number
}

export type CaseData = {
	id: string
	name: string
	description: string
	service: string
	href?: string
	pictures: {
		picture: Media
	}[]
}
