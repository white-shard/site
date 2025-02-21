import { Suspense } from "react"

import { BlockRenderer } from "@/features/page-builder/_ui/block-renderer"

export default function Home() {
	return (
		<div className="container mx-auto max-w-screen-xl p-4">
			<Suspense fallback={<></>}>
				<BlockRenderer pageSlug="home" />
			</Suspense>
		</div>
	)
}
