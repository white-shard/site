import { RegisteredBlockData } from "../../_types/block.type"

import { BlockTextDashboard } from "./_dashboard/block"
import { BlockTextRenderer } from "./_ui/renderer"

export const BlockText: RegisteredBlockData = {
	blockType: "blockText",
	dashboard: BlockTextDashboard,
	renderer: (data) => BlockTextRenderer(data)
}
