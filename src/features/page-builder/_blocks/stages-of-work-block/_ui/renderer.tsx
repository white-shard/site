import { StageOfWorkBlockData } from "../_types/stage-of-work-block.type"

import { StagesOfWorkBlockDesktop } from "./desktop"
import { StagesOfWorkMobile } from "./mobile"

type Props = {
	data: StageOfWorkBlockData
}
export function StagesOfWorkBlockRenderer({ data }: Props) {
	return (
		<>
			<StagesOfWorkBlockDesktop data={data} />
			<StagesOfWorkMobile data={data} />
		</>
	)
}
