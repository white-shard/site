"use client"

import { motion } from "framer-motion"

import { cn } from "@/shared/lib/utils"

import { WhyChooseUsBlockData } from "../_types/why-choose-us-block.type"

import { ReasonCard } from "./reason-card"

type Props = {
	data: WhyChooseUsBlockData
}

export const WhyChooseUsBlockRenderer = ({ data }: Props) => {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-3xl font-bold">{data.title}</h2>
			<p className="text-secondary max-w-xl">{data.description}</p>
			<motion.div
				className="grid grid-cols-1 gap-4 md:grid-cols-7"
				variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
				initial="hidden"
				animate="show"
			>
				{data.items.map((item, index) => (
					<div
						key={item.id}
						className={cn("bg-opacity-80 rounded-2x", {
							"md:col-span-3": index % 3 !== 0,
							"md:col-span-4": index % 3 === 0
						})}
					>
						<ReasonCard data={item} />
					</div>
				))}
			</motion.div>
		</div>
	)
}
