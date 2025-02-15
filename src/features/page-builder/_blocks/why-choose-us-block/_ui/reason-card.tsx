"use client"

import { motion } from "framer-motion"

import { Card, CardDescription, CardTitle } from "@/shared/ui/card"
import { CardContent } from "@/shared/ui/card"

import { ReasonData } from "../_types/why-choose-us-block.type"

type Props = {
	data: ReasonData
}
export const ReasonCard = ({ data }: Props) => {
	return (
		<motion.div
			className="h-full"
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			transition={{ type: "spring", stiffness: 400, damping: 17 }}
		>
			<Card className="bg-primary/10 hover:bg-primary/30 flex h-full flex-col justify-between duration-300">
				<CardContent className="flex flex-grow flex-col gap-4 p-4">
					<CardTitle className="text-xl font-bold">{data.name}</CardTitle>
					<CardDescription className="text-sm">
						{data.description}
					</CardDescription>
				</CardContent>
			</Card>
		</motion.div>
	)
}
