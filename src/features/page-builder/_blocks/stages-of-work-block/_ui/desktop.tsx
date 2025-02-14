"use client"

import { motion } from "framer-motion"
import { Circle } from "lucide-react"

import { StageOfWorkBlockData } from "../_types/stage-of-work-block.type"

import { StageBlock } from "./stage-block-desktop"

type Props = {
	data: StageOfWorkBlockData
}
export function StagesOfWorkBlockDesktop({ data }: Props) {
	return (
		<div className="container mx-auto hidden py-16 md:block">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="flex flex-col gap-6"
			>
				<header className="text-center">
					<h2 className="mb-4 text-4xl font-bold">{data.title}</h2>
					<p className="text-secondary mx-auto max-w-2xl">{data.description}</p>
				</header>

				<div className="relative mx-auto mt-12 max-w-5xl">
					<div className="bg-border/30 absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 transform"></div>
					<div className="relative">
						{data?.stages?.map((stage, index) => (
							<motion.div
								key={stage.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2 }}
								whileHover={{ scale: 1.02 }}
								className="mb-16 flex items-center last:mb-0"
							>
								<motion.div
									className="flex-1 pr-4 text-right md:pr-12"
									initial={{ x: -50, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ delay: index * 0.2 }}
								>
									{index % 2 !== 0 && <StageBlock {...stage} />}
								</motion.div>
								<motion.div
									className="relative z-10"
									whileHover={{ scale: 1.1 }}
									transition={{ type: "spring", stiffness: 400, damping: 10 }}
								>
									<Circle className="bg-background text-primary border-primary/20 relative size-8 rounded-full border-2 shadow-lg md:size-10"></Circle>
									<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold">
										{index + 1}
									</span>
								</motion.div>
								<motion.div
									className="flex-1 pl-4 md:pl-12"
									initial={{ x: 50, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ delay: index * 0.2 }}
								>
									{index % 2 === 0 && <StageBlock {...stage} />}
								</motion.div>
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>
		</div>
	)
}
