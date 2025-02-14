import { RegisteredBlockData } from "../../_types/block.type"

import { HeroBlockDashboard } from "./_dashboard/block"
import { HeroBlockRenderer } from "./_ui/renderer"

export const HeroBlock: RegisteredBlockData = {
	blockType: "heroBlock",
	dashboard: HeroBlockDashboard,
	renderer: (data) => <HeroBlockRenderer data={data} />
}
