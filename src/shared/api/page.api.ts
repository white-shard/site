"use server"

import { getAppCMS } from "../lib/payload"

export async function getPageData(slug: string) {
	const payload = await getAppCMS()
	const data = await payload.find({
		collection: "pages",
		where: {
			slug: {
				equals: slug
			}
		}
	})

	if (!data.docs.length) return undefined
	return data.docs[0]
}
