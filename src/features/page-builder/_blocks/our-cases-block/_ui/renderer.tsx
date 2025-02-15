import { Suspense } from "react"

import { OurCasesBlock } from "../_types/our-cases-block.types"

import { CaseList } from "./case-list"
import { CasesSkeleton } from "./case-skeleton"

type Props = {
	data: OurCasesBlock
}
export function OurCasesBlockRenderer({ data }: Props) {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-3xl font-bold">{data.title}</h2>
			<p className="text-secondary max-w-xl">{data.description}</p>
			<Suspense fallback={<CasesSkeleton count={data.count} />}>
				<CaseList limit={data.count} />
			</Suspense>
		</div>
	)
}
