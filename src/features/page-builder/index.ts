import { HeroBlock } from "./_blocks/hero-block"
import { TextBlock } from "./_blocks/text-block"
import { RegisteredBlockData } from "./_types/block.type"

export * from "./_api/page.api"

export const registeredBlocks: RegisteredBlockData[] = [TextBlock, HeroBlock]
export function getBlockRenderer(blockType: string) {
	return registeredBlocks.find((block) => block.blockType === blockType)
		?.renderer
}
