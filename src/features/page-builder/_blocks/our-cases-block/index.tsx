import { RegisteredBlockData } from "../../_types/block.type"

import { OurCasesBlockDashboard } from "./_dashboard/block"
import { OurCasesBlockRenderer } from "./_ui/renderer"

export const OurCasesBlock: RegisteredBlockData = {
	blockType: "ourCasesBlock",
	dashboard: OurCasesBlockDashboard,
	renderer: (data) => <OurCasesBlockRenderer data={data} />
}

export * from "./_ui/case-page-renderer"
