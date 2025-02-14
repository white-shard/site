import { motion } from "framer-motion"

type Props = {
	name: string
	description: string
}

export function StageBlock({ name, description }: Props) {
	return (
		<motion.div
			whileHover={{ y: -4 }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}
		>
			<h3 className="mb-2 text-sm font-bold md:text-lg">{name}</h3>
			<p className="text-muted-foreground text-xs md:text-base">
				{description}
			</p>
		</motion.div>
	)
}
