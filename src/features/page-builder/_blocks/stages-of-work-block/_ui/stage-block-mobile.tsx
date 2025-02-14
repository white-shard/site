import { motion } from "framer-motion"

import { Card, CardContent } from "@/shared/ui/card"

type Props = {
	index: number
	name: string
	description: string
}

export function StageBlockMobile({ index, name, description }: Props) {
	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			transition={{ type: "spring", stiffness: 400, damping: 17 }}
		>
			<Card className="bg-primary/10 hover:bg-primary/30 relative">
				<CardContent className="py-6">
					<div>
						<h3 className="mb-2 text-lg font-bold">{name}</h3>
						<p className="text-muted-foreground text-sm">{description}</p>
					</div>
				</CardContent>
				<motion.span
					className="text-primary absolute -top-4 -left-2 text-5xl font-bold"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{
						type: "spring",
						stiffness: 400,
						damping: 10,
						delay: 0.3 + index * 0.1
					}}
				>
					{index + 1}
				</motion.span>
			</Card>
		</motion.div>
	)
}
