"use server"

import { Case } from "@/dashboard/payload-types"

import { privateConfig } from "@/shared/config/private"

export async function getCaseById(id: number) {
	const response = await fetch(
		`${privateConfig.NEXT_PUBLIC_API_URL}/cases/${id}`,
		{
			cache: "no-store"
		}
	)

	if (!response.ok) return undefined
	const data = (await response.json()) as Case

	if (!data) return undefined
	return data
}
