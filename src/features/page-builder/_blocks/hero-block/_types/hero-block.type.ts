import { Media } from "@/dashboard/payload-types"

export type HeroBlockData = {
	title: string
	description: string
	button: string
	slider: {
		desktopImage: Media
		mobileImage: Media
	}[]
}
