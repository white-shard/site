"use server"

import { getAppCMS } from "../lib/payload"

export async function getCaseById(id: number) {
	const payload = await getAppCMS()
	const data = await payload.findByID({
		collection: "cases",
		id
	})

	return data
}

export async function getCases(limit: number = 32) {
	const payload = await getAppCMS()
	const data = await payload.find({
		collection: "cases",
		limit
	})

	return data.docs
}
