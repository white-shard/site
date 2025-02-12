import { notFound } from "next/navigation"

import { getPageData } from "@/features/page-builder"
import { BlockRenderer } from "@/features/page-builder/_ui/block-renderer"

type PageProps = {
	params: Promise<{ page: string }>
}

export default async function Page({ params }: PageProps) {
	const { page } = await params
	const data = await getPageData(page)
	if (!data) return notFound()

	return (
		<div className="container mx-auto max-w-screen-xl p-4">
			<BlockRenderer data={data} />
		</div>
	)
}
