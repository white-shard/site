import { Metadata } from "next"
import { Suspense } from "react"

import { getPageData } from "@/features/page-builder"

type PageProps = {
	params: Promise<{ page: string }>
}

export async function generateMetadata({
	params
}: PageProps): Promise<Metadata> {
	const { page } = await params
	const pageData = await getPageData(page)

	return {
		title: {
			default: pageData?.title,
			absolute: !pageData?.title ? "404 - Страница не найдена" : ""
		},
		description:
			pageData?.description ||
			"Извините, страница, которую вы ищете, не существует или была перемещена.",
		keywords:
			pageData?.keywords?.split(",")?.map((keyword) => keyword.trim()) || []
	}
}

export default function CaseLayout({
	children
}: {
	children: React.ReactNode
}) {
	return <Suspense>{children}</Suspense>
}
