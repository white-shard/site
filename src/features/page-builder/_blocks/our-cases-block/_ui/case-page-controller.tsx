import { notFound } from "next/navigation"

import { getCaseById } from "@/shared/api/case.api"

import { CasePageRenderer } from "./case-page-renderer"

type Props = {
	data: never
	segments: string[]
}

export async function CasePageController({ segments }: Props) {
	const caseId = segments[0]
	if (!caseId) return notFound()

	const data = await getCaseById(Number(caseId))
	if (!data) return notFound()

	return <CasePageRenderer data={data} />
}
