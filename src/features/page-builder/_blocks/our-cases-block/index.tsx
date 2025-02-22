import { getCaseById } from "@/shared/api/case.api"

import {
	RegisteredBlockData,
	RegisteredChildPageController
} from "../../_types/block.type"

import { OurCasesBlockDashboard } from "./_dashboard/block"
import { OurCasesControllerDashboard } from "./_dashboard/child-page-controller"
import { CasePageController } from "./_ui/case-page-controller"
import { OurCasesBlockRenderer } from "./_ui/renderer"

export const OurCasesBlock: RegisteredBlockData = {
	blockType: "ourCasesBlock",
	dashboard: OurCasesBlockDashboard,
	renderer: (data) => <OurCasesBlockRenderer data={data} />
}

export const OurCasesController: RegisteredChildPageController = {
	controllerId: "ourCasesController",
	dashboard: OurCasesControllerDashboard,
	metadata: async (_, segments) => {
		const caseId = segments[0]
		const caseData = await getCaseById(Number(caseId))

		return {
			title: caseData?.name,
			description: caseData?.description
		}
	},
	renderer: (data, segments) => (
		<CasePageController data={data} segments={segments} />
	)
}

export * from "./_ui/case-page-renderer"
