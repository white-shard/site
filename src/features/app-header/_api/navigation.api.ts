"use server"

import { privateConfig } from "@/shared/config/private"

import { NavigationLink } from "../_types/navigation.type"

type NavigationResponse = {
	navigation: NavigationLink[]
}
export async function getNavigationData() {
	const response = await fetch(
		`${privateConfig.NEXT_PUBLIC_API_URL}/globals/settings?depth=1&select[navigation]=true`,
		{
			next: {
				revalidate: Number(privateConfig.REVALIDATE_VERY_RARE)
			}
		}
	)
	if (!response.ok) return []
	const data = (await response.json()) as NavigationResponse
	return data.navigation
}
