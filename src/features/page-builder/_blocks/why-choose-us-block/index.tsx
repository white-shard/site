import { RegisteredBlockData } from "../../_types/block.type"

import { WhyChooseUsBlockDashboard } from "./_dashboard/block"
import { WhyChooseUsBlockRenderer } from "./_ui/renderer"

export const WhyChooseUsBlock: RegisteredBlockData = {
	blockType: "whyChooseUsBlock",
	dashboard: WhyChooseUsBlockDashboard,
	renderer: (data) => <WhyChooseUsBlockRenderer data={data} />
}
