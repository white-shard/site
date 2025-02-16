import Image from "next/image"
import { notFound } from "next/navigation"

import { Media } from "@/dashboard/payload-types"

import { getCaseById } from "@/shared/api/cases.api"

type Props = {
	caseId: string
}

export async function CasePageRenderer({ caseId }: Props) {
	const data = await getCaseById(Number(caseId))
	if (!data) return notFound()

	return (
		<>
			<h2 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent">
				{data.name}
			</h2>
			<p className="text-secondary max-w-xl">{data.description}</p>
			{data.pictures?.map((it) => {
				const picture = it.picture as Media
				return (
					<Image
						key={it.id}
						src={picture?.url || "#"}
						alt={picture?.alt || "#"}
						width={1920}
						height={1080}
					/>
				)
			})}
		</>
	)
}
