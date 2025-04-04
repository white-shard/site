import { RegisteredBlockData } from "../../_types/block.type"

import { OfferBlockDashboard } from "./_dashboard/block"
import { OfferBlockRenderer } from "./_ui/renderer"

export const OfferBlock: RegisteredBlockData = {
	blockType: "offerBlock",
	dashboard: OfferBlockDashboard,
	renderer: (data) => <OfferBlockRenderer data={data} />
}
