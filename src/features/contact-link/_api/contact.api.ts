"use server"

import { privateConfig } from "@/shared/config/private"

import { ContactSettings } from "../_types/contact-settings.type"

type ContactsResponse = {
	contact: ContactSettings
}
export async function getContactData() {
	const response = await fetch(
		`${privateConfig.NEXT_PUBLIC_API_URL}/globals/settings?depth=1&select[contact]=true`,
		{
			next: {
				revalidate: Number(privateConfig.REVALIDATE_RARE)
			}
		}
	)

	if (!response.ok) return undefined
	const data = (await response.json()) as ContactsResponse
	return data.contact
}
