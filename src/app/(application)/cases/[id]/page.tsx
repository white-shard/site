import Image from "next/image"
import { notFound } from "next/navigation"

import { Media } from "@/dashboard/payload-types"

import { getCaseById } from "@/shared/api/cases.api"

export async function generateMetadata({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	const data = await getCaseById(Number(id))

	return {
		title: data?.name,
		description: data?.description
	}
}

export default async function CasePage({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	try {
		const data = await getCaseById(Number(id))
		if (!data) return notFound()

		return (
			<div className="container mx-auto flex max-w-screen-xl flex-col gap-4 p-4">
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
			</div>
		)
	} catch {
		return notFound()
	}
}
