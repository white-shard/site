import { RegisteredBlockData } from "@/features/page-builder/_types/block.type"

import { BannerBlockDashboard } from "./_dashboard/block"
import { BannerBlockRenderer } from "./_ui/renderer"

export const BannerBlock: RegisteredBlockData = {
	blockType: "bannerBlock",
	dashboard: BannerBlockDashboard,
	renderer: (data) => <BannerBlockRenderer data={data} />
}
