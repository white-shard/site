"use client"

import { motion } from "framer-motion"

type Props = {
	name: string
	description?: string
}

export function StageBlock({ name, description }: Props) {
	return (
		<motion.div
			whileHover={{ y: -4 }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}
		>
			<h3 className="mb-2 text-xl font-bold">{name}</h3>
			{description && <p className="text-muted-foreground">{description}</p>}
		</motion.div>
	)
}
