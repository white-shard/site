"use server"

import { getAppCMS } from "../lib/payload"

export async function getAppMetaData() {
	const payload = await getAppCMS()
	const data = await payload.findGlobal({
		slug: "settings",
		select: {
			metaData: true
		}
	})

	return data.metaData
}

export async function getContactData() {
	const payload = await getAppCMS()
	const data = await payload.findGlobal({
		slug: "settings",
		select: {
			contact: true
		}
	})

	return data.contact
}

export async function getNavigationData() {
	const payload = await getAppCMS()
	const data = await payload.findGlobal({
		slug: "settings",
		select: {
			navigation: true
		}
	})

	return data.navigation
}

export async function getFooterData() {
	const payload = await getAppCMS()
	const data = await payload.findGlobal({
		slug: "settings"
	})

	return data.footer
}
