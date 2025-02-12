import { RegisteredBlockData } from "../../_types/block.type"

import { TextBlockDashboard } from "./_dashboard/block"
import { TextBlockRenderer } from "./_ui/renderer"

export const TextBlock: RegisteredBlockData = {
	blockType: "textBlock",
	dashboard: TextBlockDashboard,
	renderer: (data) => <TextBlockRenderer data={data} />
}
