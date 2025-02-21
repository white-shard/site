import { RegisteredBlockData } from "../../_types/block.type"

import { StagesOfWorkBlockDashboard } from "./_dashboard/block"
import { StagesOfWorkBlockRenderer } from "./_ui/renderer"

export const StagesOfWorkBlock: RegisteredBlockData = {
	blockType: "stagesOfWorkBlock",
	dashboard: StagesOfWorkBlockDashboard,
	renderer: (data) => <StagesOfWorkBlockRenderer data={data} />
}
