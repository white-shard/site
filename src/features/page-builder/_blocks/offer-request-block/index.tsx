import { RegisteredBlockData } from "../../_types/block.type"

import { OfferRequestBlockDashboard } from "./_dashboard/block"
import { OfferRequestBlockRenderer } from "./_ui/renderer"

export const OfferRequestBlock: RegisteredBlockData = {
	blockType: "offerRequestBlock",
	dashboard: OfferRequestBlockDashboard,
	renderer: (data) => <OfferRequestBlockRenderer data={data} />
}
