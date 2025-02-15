"use server"

import { privateConfig } from "@/shared/config/private"

import { CaseData } from "../_types/our-cases-block.types"

type CasesResponse = {
	docs: CaseData[]
}
export async function getCases(count: number) {
	const response = await fetch(
		`${privateConfig.NEXT_PUBLIC_API_URL}/cases?limit=${count}`,
		{
			next: {
				revalidate: Number(privateConfig.REVALIDATE_RARE)
			}
		}
	)

	if (!response.ok) return undefined
	const data = (await response.json()) as CasesResponse

	if (!data.docs.length) return undefined
	return data.docs
}
