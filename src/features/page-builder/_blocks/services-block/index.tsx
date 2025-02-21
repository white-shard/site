import { RegisteredBlockData } from "../../_types/block.type"

import { ServicesBlockDashboard } from "./_dashboard/block"
import { ServicesBlockRenderer } from "./_ui/renderer"

export const ServicesBlock: RegisteredBlockData = {
	blockType: "servicesBlock",
	dashboard: ServicesBlockDashboard,
	renderer: (data) => <ServicesBlockRenderer data={data} />
}
