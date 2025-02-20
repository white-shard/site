import { getCases } from "@/shared/api/case.api"

import { CaseCard } from "./case-card"

type Props = {
	limit: number
}
export async function CaseList({ limit }: Props) {
	const cases = await getCases(limit)

	return (
		<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{cases?.map((data) => <CaseCard key={data.id} data={data} />)}
		</div>
	)
}
