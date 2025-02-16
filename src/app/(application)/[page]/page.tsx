import { Metadata } from "next"
import { Suspense } from "react"

import { getPageData } from "@/features/page-builder"
import { BlockRenderer } from "@/features/page-builder/_ui/block-renderer"

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

export default async function Page({ params }: PageProps) {
	const { page } = await params

	return (
		<div className="container mx-auto max-w-screen-xl p-4">
			<Suspense fallback={<></>}>
				<BlockRenderer pageSlug={page} />
			</Suspense>
		</div>
	)
}
