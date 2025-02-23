import { AnswersToQuestionsBlock } from "./_blocks/answers-to-questions-block"
import { HeroBlock } from "./_blocks/hero-block"
import { OfferBlock } from "./_blocks/offer-block"
import { OfferRequestBlock } from "./_blocks/offer-request-block"
import { OurCasesBlock, OurCasesController } from "./_blocks/our-cases-block"
import { ServicesBlock } from "./_blocks/services-block"
import { StagesOfWorkBlock } from "./_blocks/stages-of-work-block"
import { TextBlock } from "./_blocks/text-block"
import { WhyChooseUsBlock } from "./_blocks/why-choose-us-block"
import {
	RegisteredBlockData,
	RegisteredChildPageController
} from "./_types/block.type"

export const registeredBlocks: RegisteredBlockData[] = [
	TextBlock,
	HeroBlock,
	ServicesBlock,
	StagesOfWorkBlock,
	WhyChooseUsBlock,
	AnswersToQuestionsBlock,
	OurCasesBlock,
	OfferRequestBlock,
	OfferBlock
]
export const registeredControllers: RegisteredChildPageController[] = [
	OurCasesController
]

export function getBlockRenderer(blockType: string) {
	return registeredBlocks.find((block) => block.blockType === blockType)
		?.renderer
}

export function getControllerRenderer(controllerId: string) {
	return registeredControllers.find(
		(controller) => controller.controllerId === controllerId
	)?.renderer
}

export function getControllerMetadata(controllerId: string) {
	return registeredControllers.find(
		(controller) => controller.controllerId === controllerId
	)?.metadata
}
