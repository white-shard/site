import { Suspense } from "react"

import { BlockRenderer } from "@/features/page-builder/_ui/block-renderer"

type PageProps = {
	params: Promise<{ page: string }>
}

export default async function Page({ params }: PageProps) {
	const { page } = await params

	return (
		<div className="container mx-auto max-w-screen-xl p-4">
			<Suspense fallback={<div>Loading...</div>}>
				<BlockRenderer pageSlug={page} />
			</Suspense>
		</div>
	)
}
