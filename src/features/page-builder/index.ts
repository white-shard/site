import { BlockText } from "./_blocks/block-text"
import { RegisteredBlockData } from "./_types/block.type"

export * from "./_api/page.api"

export const registeredBlocks: RegisteredBlockData[] = [BlockText]
export function getBlockRenderer(blockType: string) {
	return registeredBlocks.find((block) => block.blockType === blockType)
		?.renderer
}
