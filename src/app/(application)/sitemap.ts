import { MetadataRoute } from "next"

import { NavigationLink } from "@/features/app-footer/_types/navigation.type"

import { getNavigationData } from "@/shared/api/settings.api"

const lastReload = new Date()
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const navigation = (await getNavigationData()) ?? []

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
	const dynamicPages = navigation.map((page: NavigationLink) => ({
		url: `${baseUrl}${page.href}`,
		lastModified: lastReload,
		changeFrequency: "daily" as const,
		priority: 0.8
	}))

	return [...staticPages, ...dynamicPages]
}
