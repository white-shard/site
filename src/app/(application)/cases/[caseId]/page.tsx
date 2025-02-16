import { Suspense } from "react"

import { CasePageRenderer } from "@/features/page-builder/_blocks/our-cases-block"

type CaseProps = {
	params: Promise<{ caseId: string }>
}

export default async function CasePage({ params }: CaseProps) {
	const { caseId } = await params
	return (
		<div className="container mx-auto flex max-w-screen-xl flex-col gap-4 p-4">
			<Suspense fallback={<></>}>
				<CasePageRenderer caseId={caseId} />
			</Suspense>
		</div>
	)
}
