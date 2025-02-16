"use server"

import { privateConfig } from "@/shared/config/private"

type AppMetaData = {
	title: string
	template: string
	description: string
	keywords: string
}

export async function getAppMetaData() {
	const response = await fetch(
		`${privateConfig.NEXT_PUBLIC_API_URL}/globals/settings?select[metaData]=true`,
		{
			next: {
				revalidate: Number(privateConfig.REVALIDATE_FREQUENT)
			}
		}
	)

	if (!response.ok) return undefined
	const data = (await response.json()) as { metaData: AppMetaData }

	if (!data) return undefined
	return data.metaData
}
