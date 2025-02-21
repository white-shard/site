"use client"

import { motion } from "framer-motion"
import { memo } from "react"

import { Button } from "@/shared/ui/button"

import { HeroBlockData } from "../_types/hero-block.type"

type FeaturesProps = {
	features: HeroBlockData["features"]
}

export const Features = memo(({ features }: FeaturesProps) => (
	<div className="flex flex-wrap gap-1 md:gap-2">
		{features.map((feature) => (
			<motion.div
				key={feature.id}
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
			>
				<Button className="px-2 text-sm md:text-base" variant="outline">
					{feature.name}
				</Button>
			</motion.div>
		))}
	</div>
))

Features.displayName = "Features"
