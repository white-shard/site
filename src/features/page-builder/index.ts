import { AnswersToQuestionsBlock } from "./_blocks/answers-to-questions-block"
import { HeroBlock } from "./_blocks/hero-block"
import { ServicesBlock } from "./_blocks/services-block"
import { StagesOfWorkBlock } from "./_blocks/stages-of-work-block"
import { TextBlock } from "./_blocks/text-block"
import { WhyChooseUsBlock } from "./_blocks/why-choose-us-block"
import { RegisteredBlockData } from "./_types/block.type"

export * from "./_api/page.api"

export const registeredBlocks: RegisteredBlockData[] = [
	TextBlock,
	HeroBlock,
	ServicesBlock,
	StagesOfWorkBlock,
	WhyChooseUsBlock,
	AnswersToQuestionsBlock
]
export function getBlockRenderer(blockType: string) {
	return registeredBlocks.find((block) => block.blockType === blockType)
		?.renderer
}
