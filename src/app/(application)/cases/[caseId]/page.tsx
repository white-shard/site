import { Metadata } from "next"

import { CasePageRenderer } from "@/features/page-builder/_blocks/our-cases-block"

import { getCaseById } from "@/shared/api/case.api"

type CaseProps = {
	params: Promise<{ caseId: string }>
}

export async function generateMetadata({
	params
}: CaseProps): Promise<Metadata> {
	const { caseId } = await params
	const caseData = await getCaseById(Number(caseId))

	return {
		title: {
			default: caseData?.name,
			absolute: !caseData?.name ? "404 - Страница не найдена" : ""
		},
		description:
			caseData?.description ||
			"Извините, страница, которую вы ищете, не существует или была перемещена."
	}
}

export default async function CasePage({ params }: CaseProps) {
	const { caseId } = await params

	return (
		<div className="container mx-auto flex max-w-screen-xl flex-col gap-4 p-4">
			<CasePageRenderer caseId={caseId} />
		</div>
	)
}
