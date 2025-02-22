import { getBlockRenderer, getControllerRenderer } from ".."
import { notFound } from "next/navigation"

import { getPageData } from "@/shared/api/page.api"

type BlockRendererProps = {
	segments?: string[]
}

export async function BlockRenderer({ segments }: BlockRendererProps) {
	if (!segments?.length) return notFound()

	const [pageSlug, ...remainingSegments] = segments
	const data = await getPageData(pageSlug)
	if (!data) return notFound()

	const hasChildController = data.childController?.[0]
	const isNestedRoute = segments.length > 1

	if (hasChildController && isNestedRoute) {
		const controllerData = data.childController![0]
		const controller = getControllerRenderer(controllerData.blockType)
		if (!controller) return notFound()

		return (
			<div className="flex flex-col gap-4">
				{controller(controllerData as never, remainingSegments)}
			</div>
		)
	}

	if (isNestedRoute) return notFound()

	return (
		<div className="flex flex-col gap-16">
			{data.blocks?.map((block) => {
				const renderer = getBlockRenderer(block.blockType)
				return renderer && <div key={block.id}>{renderer(block as never)}</div>
			})}
		</div>
	)
}
