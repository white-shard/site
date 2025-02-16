import { Suspense } from "react"

import { BlockHeader } from "@/shared/ui/block-header"

import { OurCasesBlock } from "../_types/our-cases-block.types"

import { CaseList } from "./case-list"
import { CasesSkeleton } from "./case-skeleton"

type Props = {
	data: OurCasesBlock
}
export function OurCasesBlockRenderer({ data }: Props) {
	return (
		<div className="flex flex-col gap-4">
			<BlockHeader title={data.title} description={data.description} />
			<Suspense fallback={<CasesSkeleton count={data.count} />}>
				<CaseList limit={data.count} />
			</Suspense>
		</div>
	)
}
