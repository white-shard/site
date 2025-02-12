"use server"

import { privateConfig } from "@/shared/config/private"

import { PageData } from "../_types/page.type"

type PageResponse = {
	docs: PageData[]
}
export async function getPageData(slug: string) {
	const response = await fetch(
		`${privateConfig.NEXT_PUBLIC_API_URL}/pages?where[slug][equals]=${slug}`,
		{
			cache: "no-store"
		}
	)

	if (!response.ok) return undefined
	const data = (await response.json()) as PageResponse

	if (!data.docs.length) return undefined
	return data.docs[0]
}
