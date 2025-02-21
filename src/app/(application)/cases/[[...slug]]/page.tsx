import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"

import { CasePageRenderer } from "@/features/page-builder/_blocks/our-cases-block"

import { getCaseById } from "@/shared/api/case.api"

type CaseProps = {
	params: Promise<{ slug?: string[] }>
}

export async function generateMetadata({
	params
}: CaseProps): Promise<Metadata> {
	const { slug } = await params

	if (!slug || !slug.length) return notFound()
	const caseData = await getCaseById(Number(slug[0]))
	if (!caseData) return notFound()

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
	const { slug } = await params
	if (!slug || !slug.length) return notFound()

	try {
		const caseData = await getCaseById(Number(slug[0]))
		if (!caseData) return notFound()

		return (
			<div className="container mx-auto flex max-w-screen-xl flex-col gap-4 p-4">
				<Suspense fallback={<></>}>
					<CasePageRenderer data={caseData} />
				</Suspense>
			</div>
		)
	} catch {
		return notFound()
	}
}
