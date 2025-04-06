import { RegisteredBlockData } from "../../_types/block.type"

import { EmployeeBlockDashboard } from "./_dashboard/block"
import { EmployeeBlockRenderer } from "./_ui/renderer"

export const EmployeeBlock: RegisteredBlockData = {
	blockType: "employeeBlock",
	dashboard: EmployeeBlockDashboard,
	renderer: (data) => <EmployeeBlockRenderer data={data} />
}
