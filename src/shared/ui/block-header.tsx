"use client"

import { motion } from "framer-motion"

type Props = {
	title: string
	description: string
}

export function BlockHeader({ title, description }: Props) {
	return (
		<>
			<motion.h2
				className="text-3xl font-bold"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				{title}
			</motion.h2>
			<motion.p
				className="text-secondary max-w-xl"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				{description}
			</motion.p>
		</>
	)
}
