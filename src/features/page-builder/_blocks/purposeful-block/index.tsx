import { RegisteredBlockData } from "@/features/page-builder/_types/block.type"

import { PurposefulBlockDashboard } from "./_dashboard/block"
import { PurposefulBlockRenderer } from "./_ui/renderer"

export const PurposefulBlock: RegisteredBlockData = {
	blockType: "purposefulBlock",
	dashboard: PurposefulBlockDashboard,
	renderer: (data) => <PurposefulBlockRenderer data={data} />
}
