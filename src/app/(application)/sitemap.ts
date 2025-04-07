import { MetadataRoute } from "next"

import { Page } from "@/dashboard/payload-types"

import { getAppCMS } from "@/shared/lib/payload"

const lastReload = new Date()
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const pages = await getAppCMS().then((res) =>
		res
			.find({
				collection: "pages"
			})
			.then((res) => res.docs)
			.catch(() => [] as Page[])
	)

	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://white-shard.ru"

	// Основные страницы сайта
	const staticPages = [
		{
			url: `${baseUrl}`,
			lastModified: lastReload,
			changeFrequency: "daily" as const,
			priority: 1
		}
	]

	// Страницы блога
	const dynamicPages = pages.map((page: Page) => ({
		url: `${baseUrl}/${page.slug}`,
		lastModified: page.updatedAt,
		changeFrequency: "daily" as const,
		priority: 0.9
	}))

	return [...staticPages, ...dynamicPages]
}
