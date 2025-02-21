"use client"

import { motion } from "framer-motion"

import { BlockHeader } from "@/shared/ui/block-header"

import { StageOfWorkBlockData } from "../_types/stage-of-work-block.type"

import { StageBlockMobile } from "./stage-block-mobile"

type Props = {
	data: StageOfWorkBlockData
}

export function StagesOfWorkMobile({ data }: Props) {
	return (
		<div className="grid gap-4 md:hidden">
			<BlockHeader title={data.title} description={data.description} />
			<motion.div
				className="flex flex-col gap-4 py-4"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				{data.stages?.map((stage, index) => (
					<motion.div
						key={stage.id}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.5,
							delay: 0.2 + index * 0.1,
							type: "spring",
							stiffness: 100
						}}
					>
						<StageBlockMobile index={index} {...stage} />
					</motion.div>
				))}
			</motion.div>
		</div>
	)
}
