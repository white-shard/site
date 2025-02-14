import { getBlockRenderer, getPageData } from ".."
import { notFound } from "next/navigation"

type BlockRendererProps = {
	pageSlug: string
}

export async function BlockRenderer({ pageSlug }: BlockRendererProps) {
	const data = await getPageData(pageSlug)
	if (!data) return notFound()

	return (
		<div className="flex flex-col gap-16 md:gap-4">
			{data.blocks.map((block) => {
				const renderer = getBlockRenderer(block.blockType)
				if (renderer) {
					const blockNode = renderer(block as never)
					return <div key={block.id}>{blockNode}</div>
				}
			})}
		</div>
	)
}
