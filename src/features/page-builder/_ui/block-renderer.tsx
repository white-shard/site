import { getBlockRenderer } from ".."

import { PageData } from "../_types/page.type"

type BlockRendererProps = {
	data: PageData
}

export async function BlockRenderer({ data }: BlockRendererProps) {
	return (
		<div>
			{data.blocks.map((block) => {
				const renderer = getBlockRenderer(block.blockType)
				if (renderer) {
					const blockNode = renderer(block.data)
					return <div key={block.id}>{blockNode}</div>
				}
			})}
		</div>
	)
}
