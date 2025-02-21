import { RegisteredBlockData } from "../../_types/block.type"

import { AnswersToQuestionsBlockDashboard } from "./_dashboard/block"
import { AnswersToQuestionsBlockRenderer } from "./_ui/renderer"

export const AnswersToQuestionsBlock: RegisteredBlockData = {
	blockType: "answersToQuestionsBlock",
	dashboard: AnswersToQuestionsBlockDashboard,
	renderer: (data) => <AnswersToQuestionsBlockRenderer data={data} />
}
