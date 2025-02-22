import { Metadata } from "next"
import { Suspense } from "react"

import { getControllerMetadata, getPageData } from "@/features/page-builder"

type PageProps = {
	params: Promise<{ segments?: string[] }>
}

export async function generateMetadata({
	params
}: PageProps): Promise<Metadata> {
	const { segments = ["home"] } = await params
	const slug = segments.length ? segments : ["home"]
	const pageData = await getPageData(slug[0])

	if (pageData?.childController?.[0] && slug.length > 1) {
		const controllerId = pageData.childController[0].blockType
		const controllerMetadata = getControllerMetadata(controllerId)
		return (
			controllerMetadata?.(pageData as never, slug.slice(1)) ??
			getDefaultMetadata(pageData)
		)
	}

	return getDefaultMetadata(pageData)
}

function getDefaultMetadata(pageData: Awaited<ReturnType<typeof getPageData>>) {
	return {
		title: {
			default: pageData?.title,
			absolute: pageData?.title ? "" : "404 - Страница не найдена"
		},
		description:
			pageData?.description ??
			"Извините, страница, которую вы ищете, не существует или была перемещена.",
		keywords:
			pageData?.keywords?.split(",").map((keyword) => keyword.trim()) ?? []
	}
}

export default function PageLayout({
	children
}: {
	children: React.ReactNode
}) {
	return <Suspense>{children}</Suspense>
}
