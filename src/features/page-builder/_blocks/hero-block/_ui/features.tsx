import { memo } from "react"

import { Button } from "@/shared/ui/button"

import { HeroBlockData } from "../_types/hero-block.type"

type FeaturesProps = {
	features: HeroBlockData["features"]
}

export const Features = memo(({ features }: FeaturesProps) => (
	<div className="flex flex-wrap gap-1 md:gap-2">
		{features.map((feature) => (
			<Button
				className="px-2 text-sm md:text-base"
				key={feature.id}
				variant="outline"
			>
				{feature.name}
			</Button>
		))}
	</div>
))

Features.displayName = "Features"
